/* 

 ** Page number -> 24

 ** Percentage -> 54

*/


import React, { useState } from 'react';
import ProgressDetails from './ProgressDetails';
import PrimaryLabel from './PrimaryLabel';
import FormActionContainer from './FormActionContainer';

import { useNavigate } from 'react-router';
import { Paths } from '../constants/Constants';

import ErrorText from './ErrorText';
import CallUsSection from './CallUsSection';

export default function SecondDriverAccidents3yearsFS({ data, setData, percentage, setPercentage, contactUsNumber, savingsAmount, cityName, setPage }) {



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

    //set SecondDriverAccidents3years
    function setSecondDriverAccidents3years(value) {
        setData({ ...data, SecondDriverAccidents3years: value });
        setError(false);

        // setTimeout(() => { setPage(25) }, 200);

        setTimeout(() => { navigate(Paths.driver2Tickets) }, 200);
    }



    //previous button click
    function previousButtonOnclick() {


        //setTimeout(() => { setPage(23) }, 200);

        setTimeout(() => { navigate(Paths.driver2Married) }, 200);
    }

    //next button click
    function nextButtonOnclick() {
        if (data.SecondDriverAccidents3years != null && data.SecondDriverAccidents3years !== "" && data.SecondDriverAccidents3years !== undefined) {


            //setTimeout(() => { setPage(25) }, 200);
            setTimeout(() => { navigate(Paths.driver2Tickets) }, 200);

        } else {
            setError(true);
        }
    }


    return (
        <div>
            <ProgressDetails percentage={54} savingsAmount={savingsAmount} cityName={cityName} />
            <PrimaryLabel label="How many at-fault accidents had your second driver had in the past three (3) years?" />

            <div className="section-container">
                <div className="form-section">
                    <div className="options-container">

                        {/* <button className="option-button active-option-button">
                            2018
                        </button> */}

                        <button className={data.SecondDriverAccidents3years === "0" ? "option-button active-option-button" : "option-button"} onClick={() => { setSecondDriverAccidents3years("0") }} >
                            0
                        </button>

                        <button className={data.SecondDriverAccidents3years === "1" ? "option-button active-option-button" : "option-button"} onClick={() => { setSecondDriverAccidents3years("1") }} >
                            1
                        </button>

                        <button className={data.SecondDriverAccidents3years === "2" ? "option-button active-option-button" : "option-button"} onClick={() => { setSecondDriverAccidents3years("2") }} >
                            2
                        </button>

                        <button className={data.SecondDriverAccidents3years === "3+" ? "option-button active-option-button" : "option-button"} onClick={() => { setSecondDriverAccidents3years("3+") }} >
                            3+
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


