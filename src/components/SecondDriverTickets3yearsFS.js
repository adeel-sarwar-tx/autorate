/*

 ** Page number -> 25

 ** Percentage -> 56

*/


import React, { useState } from 'react';
import ProgressDetails from './ProgressDetails';
import PrimaryLabel from './PrimaryLabel';
import FormActionContainer from './FormActionContainer';

import ErrorText from './ErrorText';
import CallUsSection from './CallUsSection';

import { useNavigate } from 'react-router';
import { Paths } from '../constants/Constants';

export default function SecondDriverTickets3yearsFS({ data, setData, percentage, setPercentage, contactUsNumber, savingsAmount, cityName, setPage }) {

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



    //set SecondDriverTickets3years
    function setSecondDriverTickets3years(value) {
        setData({ ...data, SecondDriverTickets3years: value });
        setError(false);

        //setTimeout(() => { setPage(26) }, 200);
        setTimeout(() => { navigate(Paths.driver2DUI) }, 200);
    }



    //previous button click
    function previousButtonOnclick() {


        // setTimeout(() => { setPage(24) }, 200);
        setTimeout(() => { navigate(Paths.driver2Accidents) }, 200);

    }

    //next button click
    function nextButtonOnclick() {
        if (data.SecondDriverTickets3years != null && data.SecondDriverTickets3years !== "" && data.SecondDriverTickets3years !== undefined) {


            //setTimeout(() => { setPage(26) }, 200);
            setTimeout(() => { navigate(Paths.driver2DUI) }, 200);

        } else {
            setError(true);
        }
    }


    return (
        <div>
            <ProgressDetails percentage={56} savingsAmount={savingsAmount} cityName={cityName} />
            <PrimaryLabel label="How many tickets has your second driver had in the past three (3) years?" />

            <div className="section-container">
                <div className="form-section">
                    <div className="options-container">

                        {/* <button className="option-button active-option-button">
                            2018
                        </button> */}

                        <button className={data.SecondDriverTickets3years === "0" ? "option-button active-option-button" : "option-button"} onClick={() => { setSecondDriverTickets3years("0") }} >
                            0
                        </button>

                        <button className={data.SecondDriverTickets3years === "1" ? "option-button active-option-button" : "option-button"} onClick={() => { setSecondDriverTickets3years("1") }} >
                            1
                        </button>

                        <button className={data.SecondDriverTickets3years === "2" ? "option-button active-option-button" : "option-button"} onClick={() => { setSecondDriverTickets3years("2") }} >
                            2
                        </button>

                        <button className={data.SecondDriverTickets3years === "3+" ? "option-button active-option-button" : "option-button"} onClick={() => { setSecondDriverTickets3years("3+") }} >
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

