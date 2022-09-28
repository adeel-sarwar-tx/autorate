/* 

 ** Page number -> 13

 ** Percentage -> 24

*/

import React, { useState } from 'react';
import ProgressDetails from './ProgressDetails';
import PrimaryLabel from './PrimaryLabel';
import FormActionContainer from './FormActionContainer';

import ErrorText from './ErrorText';
import CallUsSection from './CallUsSection';

import { useNavigate } from 'react-router';
import { Paths } from '../constants/Constants';

export default function AutoInsurancePast30daysFS({ data, setData, percentage, setPercentage, contactUsNumber, savingsAmount, cityName, setPage }) {

    let navigate = useNavigate();

    if (data.VehicleYear === "") {
        navigate(Paths.vehicle1Year);
    }

    //error
    const [error, setError] = useState(false);

    React.useEffect(() => {
        //scroll to top
        const progressContainer = document.querySelector(".primary-label-container");
        if (progressContainer !== null) {
            setTimeout(() => { progressContainer.scrollIntoViewIfNeeded(); }, 300);
        }
    });

    //set AutoInsurancePast30days
    function setAutoInsurancePast30days(value) {
        setData({ ...data, AutoInsurancePast30days: value });
        setError(false);
        if (value === "Yes") {
            //setTimeout(() => { setPage(14) }, 200);
            setTimeout(() => { navigate(Paths.currentInsurer) }, 200);
        } else {
            //setTimeout(() => { setPage(15) }, 200);
            setTimeout(() => { navigate(Paths.driversCount) }, 200);
        }
    }



    //previous button click
    function previousButtonOnclick() {
        if (data.AddThirdVehicle === "Yes") {
            //setTimeout(() => { setPage(12) }, 200);
            setTimeout(() => { navigate(Paths.vehicle3Model) }, 200);
        } else if (data.AddSecondVehicle === "Yes") {
            //setTimeout(() => { setPage(9) }, 200);
            setTimeout(() => { navigate(Paths.addThirdVehicle) }, 200);
        } else {
            //setTimeout(() => { setPage(5) }, 200);
            setTimeout(() => { navigate(Paths.addSecondVehicle) }, 200);
        }

    }

    //next button click
    function nextButtonOnclick() {
        if (data.AutoInsurancePast30days != null && data.AutoInsurancePast30days !== "" && data.AutoInsurancePast30days !== undefined) {

            if (data.AutoInsurancePast30days === "Yes") {
                //setTimeout(() => { setPage(14) }, 200);
                setTimeout(() => { navigate(Paths.currentInsurer) }, 200);
            } else {
                //setTimeout(() => { setPage(15) }, 200);
                setTimeout(() => { navigate(Paths.driversCount) }, 200);
            }
        } else {
            setError(true);
        }
    }


    return (
        <div>
            <ProgressDetails percentage={24} savingsAmount={savingsAmount} cityName={cityName} />
            <PrimaryLabel label="Have you had auto insurance in the past 30 days?" />

            <div className="section-container">
                <div className="form-section">
                    <div className="options-container">

                        {/* <button className="option-button active-option-button">
                            2018
                        </button> */}
                        <button style={{ minWidth: "46%" }} onClick={() => { setAutoInsurancePast30days("Yes") }} className={data.AutoInsurancePast30days === "Yes" ? "option-button active-option-button" : "option-button"}>
                            Yes
                        </button>
                        <button style={{ minWidth: "46%" }} onClick={() => { setAutoInsurancePast30days("No") }} className={data.AutoInsurancePast30days === "No" ? "option-button active-option-button" : "option-button"}>
                            No
                        </button>

                    </div>
                    {error ? <ErrorText /> : null}
                </div>

            </div>

            <FormActionContainer previousButtonVisibility={true} previousButtonOnclick={previousButtonOnclick} nextButtonVisibility={true} nextButtonOnclick={nextButtonOnclick} />

            <CallUsSection contactUsNumber={contactUsNumber} />
        </div>
    )
}
