/*

 ** Page number -> 29

 ** Percentage -> 66

*/


import React, { useState } from 'react';
import ProgressDetails from './ProgressDetails';
import PrimaryLabel from './PrimaryLabel';
import FormActionContainer from './FormActionContainer';

import ErrorText from './ErrorText';
import CallUsSection from './CallUsSection';

import { useNavigate } from 'react-router';
import { Paths } from '../constants/Constants';

export default function ThirdDriverMarriedFS({ data, setData, percentage, setPercentage, contactUsNumber, savingsAmount, cityName, setPage }) {

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

    //error
    const [error, setError] = useState(false);



    //set ThirdDriverMarried
    function setThirdDriverMarried(value) {
        setData({ ...data, ThirdDriverMarried: value });
        setError(false);

        //setTimeout(() => { setPage(30) }, 200);
        setTimeout(() => { navigate(Paths.driver3Accidents) }, 200);
    }



    //previous button click
    function previousButtonOnclick() {


        //setTimeout(() => { setPage(28) }, 200);

        setTimeout(() => { navigate(Paths.driver3Gender) }, 200);
    }

    //next button click
    function nextButtonOnclick() {
        if (data.ThirdDriverMarried != null && data.ThirdDriverMarried !== "" && data.ThirdDriverMarried !== undefined) {


            //setTimeout(() => { setPage(29) }, 200);
            setTimeout(() => { navigate(Paths.driver3Accidents) }, 200);
        } else {
            setError(true);
        }
    }


    return (
        <div>
            <ProgressDetails percentage={66} savingsAmount={savingsAmount} cityName={cityName} />
            <PrimaryLabel label="Is your third driver married?" />

            <div className="section-container">
                <div className="form-section">
                    <div className="options-container">

                        {/* <button className="option-button active-option-button">
                            2018
                        </button> */}

                        <button style={{ minWidth: "46%" }} className={data.ThirdDriverMarried === "Yes" ? "option-button active-option-button" : "option-button"} onClick={() => { setThirdDriverMarried("Yes") }} >
                            Yes
                        </button>

                        <button style={{ minWidth: "46%" }} className={data.ThirdDriverMarried === "No" ? "option-button active-option-button" : "option-button"} onClick={() => { setThirdDriverMarried("No") }} >
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

