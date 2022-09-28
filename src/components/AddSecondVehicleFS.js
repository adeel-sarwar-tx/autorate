/* 

 ** Page number -> 5

 ** Percentage -> 5

*/

import React, { useState } from 'react';
import ProgressDetails from './ProgressDetails';
import PrimaryLabel from './PrimaryLabel';
import FormActionContainer from './FormActionContainer';

import ErrorText from './ErrorText';
import CallUsSection from './CallUsSection';

import { useNavigate } from 'react-router';
import { Paths } from '../constants/Constants';


export default function AddSecondVehicleFS({ data, setData, percentage, setPercentage, contactUsNumber, savingsAmount, cityName, setPage }) {

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


    //set AddSecondVehicle
    function setAddSecondVehicle(value) {
        setData({ ...data, AddSecondVehicle: value });
        setError(false);
        if (value === "Yes") {
            //setTimeout(() => { setPage(6) }, 200);
            setTimeout(() => { navigate(Paths.vehicle2Year) }, 200);
        } else {
            //setTimeout(() => { setPage(13) }, 200);
            setTimeout(() => { navigate(Paths.autoInsurance) }, 200);
        }
    }



    //previous button click
    function previousButtonOnclick() {
        //setPage(4);
        setTimeout(() => { navigate(Paths.vehicle1Model) }, 200);
    }

    //next button click
    function nextButtonOnclick() {
        if (data.AddSecondVehicle != null && data.AddSecondVehicle !== "" && data.AddSecondVehicle !== undefined) {

            if (data.AddSecondVehicle === "Yes") {
                //add second vehicle
                setPage(6);
            } else {
                //no need to add second vehicle
                setPage(13);
            }
        } else {
            setError(true);
        }
    }


    return (
        <div>
            <ProgressDetails percentage={6} savingsAmount={savingsAmount} cityName={cityName} />
            <PrimaryLabel label="Would you like to add a second vehicle?" />

            <div className="section-container">
                <div className="form-section">
                    <div className="options-container">

                        {/* <button className="option-button active-option-button">
                            2018
                        </button> */}
                        <button style={{ minWidth: "46%" }} onClick={() => { setAddSecondVehicle("Yes") }} className={data.AddSecondVehicle === "Yes" ? "option-button active-option-button" : "option-button"}>
                            Yes
                        </button>
                        <button style={{ minWidth: "46%" }} onClick={() => { setAddSecondVehicle("No") }} className={data.AddSecondVehicle === "No" ? "option-button active-option-button" : "option-button"}>
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
