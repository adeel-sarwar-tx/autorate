/* 

 ** Page number -> 9

 ** Percentage -> 14

*/

import React, { useState } from 'react';
import ProgressDetails from './ProgressDetails';
import PrimaryLabel from './PrimaryLabel';
import FormActionContainer from './FormActionContainer';

import ErrorText from './ErrorText';
import CallUsSection from './CallUsSection';

import { useNavigate } from 'react-router';
import { Paths } from '../constants/Constants';

export default function AddThirdVehicleFS({ data, setData, percentage, setPercentage, contactUsNumber, savingsAmount, cityName, setPage }) {

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

    //set AddThirdVehicle
    function setAddThirdVehicle(value) {
        setData({ ...data, AddThirdVehicle: value });
        setError(false);
        if (value === "Yes") {
            setTimeout(() => { navigate(Paths.vehicle3Year) }, 200);
            //setTimeout(() => { setPage(10) }, 200);
        } else {
            setTimeout(() => { navigate(Paths.autoInsurance) }, 200);
            //setTimeout(() => { setPage(13) }, 200);
        }
    }



    //previous button click
    function previousButtonOnclick() {
        //setTimeout(() => { setPage(8) }, 200);
        setTimeout(() => { navigate(Paths.vehicle2Model) }, 200);

    }

    //next button click
    function nextButtonOnclick() {
        if (data.AddThirdVehicle != null && data.AddThirdVehicle !== "" && data.AddThirdVehicle !== undefined) {

            if (data.AddThirdVehicle === "Yes") {
                //add second vehicle
                //setTimeout(() => { setPage(10) }, 200);
                setTimeout(() => { navigate(Paths.vehicle3Year) }, 200);

            } else {
                //no need to add second vehicle
                //setTimeout(() => { setPage(13); }, 200);
                setTimeout(() => { navigate(Paths.autoInsurance) }, 200);
            }
        } else {
            setError(true);
        }
    }


    return (
        <div>
            <ProgressDetails percentage={14} savingsAmount={savingsAmount} cityName={cityName} />
            <PrimaryLabel label="Would you like to add a third vehicle?" />

            <div className="section-container">
                <div className="form-section">
                    <div className="options-container">

                        {/* <button className="option-button active-option-button">
                            2018
                        </button> */}
                        <button style={{ minWidth: "46%" }} onClick={() => { setAddThirdVehicle("Yes") }} className={data.AddThirdVehicle === "Yes" ? "option-button active-option-button" : "option-button"}>
                            Yes
                        </button>
                        <button style={{ minWidth: "46%" }} onClick={() => { setAddThirdVehicle("No") }} className={data.AddThirdVehicle === "No" ? "option-button active-option-button" : "option-button"}>
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
