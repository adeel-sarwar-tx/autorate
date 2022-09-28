/* 

 ** Page number -> 21

 ** Percentage -> 41

*/


import React, { useState } from 'react';
import ProgressDetails from './ProgressDetails';
import PrimaryLabel from './PrimaryLabel';
import FormActionContainer from './FormActionContainer';

import ErrorText from './ErrorText';
import CallUsSection from './CallUsSection';

import { useNavigate } from 'react-router';
import { Paths } from '../constants/Constants';

export default function DUIpast3yearsFS({ data, setData, percentage, setPercentage, contactUsNumber, savingsAmount, cityName, setPage }) {



    //error
    const [error, setError] = useState(false);

    let navigate = useNavigate();

    if (data.VehicleYear === "") {
        navigate(Paths.vehicle1Year);
    }

    React.useEffect(() => {
        //scroll to top
        const progressContainer = document.querySelector(".primary-label-container");
        if (progressContainer !== null) {
            setTimeout(() => { progressContainer.scrollIntoViewIfNeeded(); }, 300);
        }
    });

    //set DUIpast3years
    function setDUIpast3years(value) {
        setData({ ...data, DUIpast3years: value });
        setError(false);

        if (data.HowManyDrivers === "1") {
            // setTimeout(() => { setPage(34) }, 200);
            setTimeout(() => { navigate(Paths.ownOrRentHome) }, 200);
        } else {
            //setTimeout(() => { setPage(22) }, 200);
            setTimeout(() => { navigate(Paths.driver2Gender) }, 200);
        }



    }



    //previous button click
    function previousButtonOnclick() {


        // setTimeout(() => { setPage(20) }, 200);
        setTimeout(() => { navigate(Paths.driver1Tickets) }, 200);


    }

    //next button click
    function nextButtonOnclick() {
        if (data.DUIpast3years != null && data.DUIpast3years !== "" && data.DUIpast3years !== undefined) {


            if (data.HowManyDrivers === "1") {
                // setTimeout(() => { setPage(34) }, 200);
                setTimeout(() => { navigate(Paths.ownOrRentHome) }, 200);
            } else {
                //setTimeout(() => { setPage(22) }, 200);
                setTimeout(() => { navigate(Paths.driver2Gender) }, 200);
            }

        } else {
            setError(true);
        }
    }


    return (
        <div>
            <ProgressDetails percentage={41} savingsAmount={savingsAmount} cityName={cityName} />
            <PrimaryLabel label="Have you had a DUI conviction in the past three (3) years or need an SR-22 form?" />

            <div className="section-container">
                <div className="form-section">
                    <div className="options-container">

                        {/* <button className="option-button active-option-button">
                            2018
                        </button> */}

                        <button style={{ minWidth: "46%" }} className={data.DUIpast3years === "Yes" ? "option-button active-option-button" : "option-button"} onClick={() => { setDUIpast3years("Yes") }} >
                            Yes
                        </button>

                        <button style={{ minWidth: "46%" }} className={data.DUIpast3years === "No" ? "option-button active-option-button" : "option-button"} onClick={() => { setDUIpast3years("No") }} >
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

