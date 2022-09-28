/* 

 ** Page number -> 19

 ** Percentage -> 37

*/


import React, { useState } from 'react';
import ProgressDetails from './ProgressDetails';
import PrimaryLabel from './PrimaryLabel';
import FormActionContainer from './FormActionContainer';

import { useNavigate } from 'react-router';
import { Paths } from '../constants/Constants';

import ErrorText from './ErrorText';
import CallUsSection from './CallUsSection';

export default function AtFaultAccidentsPast3yearsFS({ data, setData, percentage, setPercentage, contactUsNumber, savingsAmount, cityName, setPage }) {

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

    //set AtFaultAccidentsPast3years
    function setAtFaultAccidentsPast3years(value) {
        setData({ ...data, AtFaultAccidentsPast3years: value });
        setError(false);

        //setTimeout(() => { setPage(20) }, 200);
        setTimeout(() => { navigate(Paths.driver1Tickets) }, 200);
    }



    //previous button click
    function previousButtonOnclick() {


        //setTimeout(() => { setPage(18) }, 200);

        setTimeout(() => { navigate(Paths.creditScore) }, 200);
    }

    //next button click
    function nextButtonOnclick() {
        if (data.AtFaultAccidentsPast3years != null && data.AtFaultAccidentsPast3years !== "" && data.AtFaultAccidentsPast3years !== undefined) {


            //setTimeout(() => { setPage(20) }, 200);
            setTimeout(() => { navigate(Paths.driver1Tickets) }, 200);
        } else {
            setError(true);
        }
    }


    return (
        <div>
            <ProgressDetails percentage={37} savingsAmount={savingsAmount} cityName={cityName} />
            <PrimaryLabel label="How many at-fault accidents have you had in the past three (3) years?" />

            <div className="section-container">
                <div className="form-section">
                    <div className="options-container">

                        {/* <button className="option-button active-option-button">
                            2018
                        </button> */}

                        <button className={data.AtFaultAccidentsPast3years === "0" ? "option-button active-option-button" : "option-button"} onClick={() => { setAtFaultAccidentsPast3years("0") }} >
                            0
                        </button>

                        <button className={data.AtFaultAccidentsPast3years === "1" ? "option-button active-option-button" : "option-button"} onClick={() => { setAtFaultAccidentsPast3years("1") }} >
                            1
                        </button>

                        <button className={data.AtFaultAccidentsPast3years === "2" ? "option-button active-option-button" : "option-button"} onClick={() => { setAtFaultAccidentsPast3years("2") }} >
                            2
                        </button>

                        <button className={data.AtFaultAccidentsPast3years === "3+" ? "option-button active-option-button" : "option-button"} onClick={() => { setAtFaultAccidentsPast3years("3+") }} >
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

