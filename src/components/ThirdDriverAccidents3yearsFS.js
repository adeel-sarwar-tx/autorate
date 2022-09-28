/*

 ** Page number -> 30

 ** Percentage -> 68

 
*/


import React, { useState } from 'react';
import ProgressDetails from './ProgressDetails';
import PrimaryLabel from './PrimaryLabel';
import FormActionContainer from './FormActionContainer';

import ErrorText from './ErrorText';
import CallUsSection from './CallUsSection';

import { useNavigate } from 'react-router';
import { Paths } from '../constants/Constants';

export default function ThirdDriverAccidents3yearsFS({ data, setData, percentage, setPercentage, contactUsNumber, savingsAmount, cityName, setPage }) {

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



    //set ThirdDriverAccidents3years
    function setThirdDriverAccidents3years(value) {
        setData({ ...data, ThirdDriverAccidents3years: value });
        setError(false);

        //setTimeout(() => { setPage(31) }, 200);
        setTimeout(() => { navigate(Paths.driver3Tickets) }, 200);
    }



    //previous button click
    function previousButtonOnclick() {


        //setTimeout(() => { setPage(30) }, 200);
        setTimeout(() => { navigate(Paths.driver3Married) }, 200);

    }

    //next button click
    function nextButtonOnclick() {
        if (data.ThirdDriverAccidents3years != null && data.ThirdDriverAccidents3years !== "" && data.ThirdDriverAccidents3years !== undefined) {


            //setTimeout(() => { setPage(31) }, 200);

            setTimeout(() => { navigate(Paths.driver3Tickets) }, 200);
        } else {
            setError(true);
        }
    }


    return (
        <div>
            <ProgressDetails percentage={68} savingsAmount={savingsAmount} cityName={cityName} />
            <PrimaryLabel label="How many at-fault accidents had your third driver had in the past three (3) years?" />

            <div className="section-container">
                <div className="form-section">
                    <div className="options-container">

                        {/* <button className="option-button active-option-button">
                            2018
                        </button> */}

                        <button className={data.ThirdDriverAccidents3years === "0" ? "option-button active-option-button" : "option-button"} onClick={() => { setThirdDriverAccidents3years("0") }} >
                            0
                        </button>

                        <button className={data.ThirdDriverAccidents3years === "1" ? "option-button active-option-button" : "option-button"} onClick={() => { setThirdDriverAccidents3years("1") }} >
                            1
                        </button>

                        <button className={data.ThirdDriverAccidents3years === "2" ? "option-button active-option-button" : "option-button"} onClick={() => { setThirdDriverAccidents3years("2") }} >
                            2
                        </button>

                        <button className={data.ThirdDriverAccidents3years === "3+" ? "option-button active-option-button" : "option-button"} onClick={() => { setThirdDriverAccidents3years("3+") }} >
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


