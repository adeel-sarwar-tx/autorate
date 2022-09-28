/*

 ** Page number -> 26

 ** Percentage -> 60


*/



import React, { useState } from 'react';
import ProgressDetails from './ProgressDetails';
import PrimaryLabel from './PrimaryLabel';
import FormActionContainer from './FormActionContainer';

import ErrorText from './ErrorText';
import CallUsSection from './CallUsSection';

import { useNavigate } from 'react-router';
import { Paths } from '../constants/Constants';

export default function SecondDriverDUI3yearsFS({ data, setData, percentage, setPercentage, contactUsNumber, savingsAmount, cityName, setPage }) {

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

    //set SecondDriverDUI3years
    function setSecondDriverDUI3years(value) {
        setData({ ...data, SecondDriverDUI3years: value });
        setError(false);

        //setTimeout(() => { setPage(27) }, 200);
        setTimeout(() => { navigate(Paths.driver2BirthDate) }, 200);
    }



    //previous button click
    function previousButtonOnclick() {


        // setTimeout(() => { setPage(25) }, 200);
        setTimeout(() => { navigate(Paths.driver2Tickets) }, 200);

    }

    //next button click
    function nextButtonOnclick() {
        if (data.SecondDriverDUI3years != null && data.SecondDriverDUI3years !== "" && data.SecondDriverDUI3years !== undefined) {


            // setTimeout(() => { setPage(27) }, 200);
            setTimeout(() => { navigate(Paths.driver2BirthDate) }, 200);

        } else {
            setError(true);
        }
    }


    return (
        <div>
            <ProgressDetails percentage={60} savingsAmount={savingsAmount} cityName={cityName} />
            <PrimaryLabel label="Has your second driver has a DUI conviction in the past three (3) years or need an SR-22 form?" />

            <div className="section-container">
                <div className="form-section">
                    <div className="options-container">

                        {/* <button className="option-button active-option-button">
                            2018
                        </button> */}

                        <button style={{ minWidth: "46%" }} className={data.SecondDriverDUI3years === "Yes" ? "option-button active-option-button" : "option-button"} onClick={() => { setSecondDriverDUI3years("Yes") }} >
                            Yes
                        </button>

                        <button style={{ minWidth: "46%" }} className={data.SecondDriverDUI3years === "No" ? "option-button active-option-button" : "option-button"} onClick={() => { setSecondDriverDUI3years("No") }} >
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

