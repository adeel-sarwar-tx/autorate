/* 

 ** Page number -> 23

 ** Percentage -> 50

*/



import React, { useState } from 'react';
import ProgressDetails from './ProgressDetails';
import PrimaryLabel from './PrimaryLabel';
import FormActionContainer from './FormActionContainer';

import ErrorText from './ErrorText';
import CallUsSection from './CallUsSection';

import { useNavigate } from 'react-router';
import { Paths } from '../constants/Constants';

export default function SecondDiverMarriedFS({ data, setData, percentage, setPercentage, contactUsNumber, savingsAmount, cityName, setPage }) {

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

    //set SecondDiver
    function setSecondDiverMarried(value) {
        setData({ ...data, SecondDriverMarried: value });
        setError(false);
        //setTimeout(() => { setPage(24) }, 200);
        setTimeout(() => { navigate(Paths.driver2Accidents) }, 200);
    }



    //previous button click
    function previousButtonOnclick() {


        //setTimeout(() => { setPage(22) }, 200);

        setTimeout(() => { navigate(Paths.driver2Gender) }, 200);
    }

    //next button click
    function nextButtonOnclick() {
        if (data.SecondDriverMarried != null && data.SecondDriverMarried !== "" && data.SecondDriverMarried !== undefined) {


            //setTimeout(() => { setPage(24) }, 200);
            setTimeout(() => { navigate(Paths.driver2Accidents) }, 200);

        } else {
            setError(true);
        }
    }


    return (
        <div>
            <ProgressDetails percentage={50} savingsAmount={savingsAmount} cityName={cityName} />
            <PrimaryLabel label="Is your second driver married?" />

            <div className="section-container">
                <div className="form-section">
                    <div className="options-container">

                        {/* <button className="option-button active-option-button">
                            2018
                        </button> */}

                        <button style={{ minWidth: "46%" }} className={data.SecondDriverMarried === "Yes" ? "option-button active-option-button" : "option-button"} onClick={() => { setSecondDiverMarried("Yes") }} >
                            Yes
                        </button>

                        <button style={{ minWidth: "46%" }} className={data.SecondDriverMarried === "No" ? "option-button active-option-button" : "option-button"} onClick={() => { setSecondDiverMarried("No") }} >
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

