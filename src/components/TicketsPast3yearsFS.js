/* 

 ** Page number -> 20

 ** Percentage -> 39

*/


import React, { useState } from 'react';
import ProgressDetails from './ProgressDetails';
import PrimaryLabel from './PrimaryLabel';
import FormActionContainer from './FormActionContainer';

import { useNavigate } from 'react-router';
import { Paths } from '../constants/Constants';

import ErrorText from './ErrorText';
import CallUsSection from './CallUsSection';

export default function TicketsPast3yearsFS({ data, setData, percentage, setPercentage, contactUsNumber, savingsAmount, cityName, setPage }) {

    let navigate = useNavigate();

    //error
    const [error, setError] = useState(false);

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

    //set TicketsPast3years
    function setTicketsPast3years(value) {
        setData({ ...data, TicketsPast3years: value });
        setError(false);

        //setTimeout(() => { setPage(21) }, 200);
        setTimeout(() => { navigate(Paths.driver1DUI) }, 200);
    }



    //previous button click
    function previousButtonOnclick() {


        //setTimeout(() => { setPage(19) }, 200);
        setTimeout(() => { navigate(Paths.driver1Accidents) }, 200);

    }

    //next button click
    function nextButtonOnclick() {
        if (data.TicketsPast3years != null && data.TicketsPast3years !== "" && data.TicketsPast3years !== undefined) {


            //setTimeout(() => { setPage(21) }, 200);
            setTimeout(() => { navigate(Paths.driver1DUI) }, 200);

        } else {
            setError(true);
        }
    }


    return (
        <div>
            <ProgressDetails percentage={39} savingsAmount={savingsAmount} cityName={cityName} />
            <PrimaryLabel label="How many tickets have you had in the past three (3) years?" />

            <div className="section-container">
                <div className="form-section">
                    <div className="options-container">

                        {/* <button className="option-button active-option-button">
                            2018
                        </button> */}

                        <button className={data.TicketsPast3years === "0" ? "option-button active-option-button" : "option-button"} onClick={() => { setTicketsPast3years("0") }} >
                            0
                        </button>

                        <button className={data.TicketsPast3years === "1" ? "option-button active-option-button" : "option-button"} onClick={() => { setTicketsPast3years("1") }} >
                            1
                        </button>

                        <button className={data.TicketsPast3years === "2" ? "option-button active-option-button" : "option-button"} onClick={() => { setTicketsPast3years("2") }} >
                            2
                        </button>

                        <button className={data.TicketsPast3years === "3+" ? "option-button active-option-button" : "option-button"} onClick={() => { setTicketsPast3years("3+") }} >
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

