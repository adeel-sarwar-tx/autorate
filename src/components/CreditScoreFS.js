/* 

 ** Page number -> 18

 ** Percentage -> 35

*/


import React, { useState } from 'react';
import ProgressDetails from './ProgressDetails';
import PrimaryLabel from './PrimaryLabel';
import FormActionContainer from './FormActionContainer';

import { useNavigate } from 'react-router';
import { Paths } from '../constants/Constants';

import ErrorText from './ErrorText';
import CallUsSection from './CallUsSection';

export default function CreditScoreFS({ data, setData, percentage, setPercentage, contactUsNumber, savingsAmount, cityName, setPage }) {



    //error
    const [error, setError] = useState(false);

    React.useEffect(() => {
        //scroll to top
        const progressContainer = document.querySelector(".primary-label-container");
        if (progressContainer !== null) {
            setTimeout(() => { progressContainer.scrollIntoViewIfNeeded(); }, 300);
        }
    });

    let navigate = useNavigate();

    if (data.VehicleYear === "") {
        navigate(Paths.vehicle1Year);
    }

    //set HowManyDrivers
    function setCreditScore(value) {
        setData({ ...data, CreditScore: value });
        setError(false);

        //setTimeout(() => { setPage(19) }, 200);
        setTimeout(() => { navigate(Paths.driver1Accidents) }, 200);
    }



    //previous button click
    function previousButtonOnclick() {


        //setTimeout(() => { setPage(17) }, 200);
        setTimeout(() => { navigate(Paths.driver1Married) }, 200);

    }

    //next button click
    function nextButtonOnclick() {
        if (data.Gender != null && data.CreditScore !== "" && data.CreditScore !== undefined) {


            //setTimeout(() => { setPage(19) }, 200);
            setTimeout(() => { navigate(Paths.driver1Accidents) }, 200);

        } else {
            setError(true);
        }
    }


    return (
        <div>
            <ProgressDetails percentage={35} savingsAmount={savingsAmount} cityName={cityName} />
            <PrimaryLabel label="What is your credit score?" />

            <div className="section-container">
                <div className="form-section">
                    <div className="options-container">

                        {/* <button className="option-button active-option-button">
                            2018
                        </button> */}

                        <button style={{ minWidth: "46%" }} className={data.CreditScore === "Poor" ? "option-button active-option-button" : "option-button"} onClick={() => { setCreditScore("Poor") }} >
                            Poor
                        </button>

                        <button style={{ minWidth: "46%" }} className={data.CreditScore === "Average" ? "option-button active-option-button" : "option-button"} onClick={() => { setCreditScore("Average") }} >
                            Average
                        </button>

                        <button style={{ minWidth: "46%" }} className={data.CreditScore === "Good" ? "option-button active-option-button" : "option-button"} onClick={() => { setCreditScore("Good") }} >
                            Good
                        </button>

                        <button style={{ minWidth: "46%" }} className={data.CreditScore === "Excellent" ? "option-button active-option-button" : "option-button"} onClick={() => { setCreditScore("Excellent") }} >
                            Excellent
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

