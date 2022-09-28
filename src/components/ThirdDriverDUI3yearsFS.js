/*

 ** Page number -> 32

 ** Percentage -> 72

 
*/



import React, { useState } from 'react';
import ProgressDetails from './ProgressDetails';
import PrimaryLabel from './PrimaryLabel';
import FormActionContainer from './FormActionContainer';

import ErrorText from './ErrorText';
import CallUsSection from './CallUsSection';

import { useNavigate } from 'react-router';
import { Paths } from '../constants/Constants';

export default function ThirdDriverDUI3yearsFS({ data, setData, percentage, setPercentage, contactUsNumber, savingsAmount, cityName, setPage }) {


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



    //set ThirdDriverDUI3years
    function setThirdDriverDUI3years(value) {
        setData({ ...data, ThirdDriverDUI3years: value });
        setError(false);

        //setTimeout(() => { setPage(33) }, 200);
        setTimeout(() => { navigate(Paths.driver3BirthDate) }, 200);
    }



    //previous button click
    function previousButtonOnclick() {


        //setTimeout(() => { setPage(31) }, 200);
        setTimeout(() => { navigate(Paths.driver3Tickets) }, 200);

    }

    //next button click
    function nextButtonOnclick() {
        if (data.ThirdDriverDUI3years != null && data.ThirdDriverDUI3years !== "" && data.ThirdDriverDUI3years !== undefined) {


            //setTimeout(() => { setPage(33) }, 200);
            setTimeout(() => { navigate(Paths.driver3BirthDate) }, 200);

        } else {
            setError(true);
        }
    }


    return (
        <div>
            <ProgressDetails percentage={72} savingsAmount={savingsAmount} cityName={cityName} />
            <PrimaryLabel label="Has your third driver had a DUI conviction in the past three (3) years or need an SR-22 form?" />

            <div className="section-container">
                <div className="form-section">
                    <div className="options-container">

                        {/* <button className="option-button active-option-button">
                            2018
                        </button> */}

                        <button style={{ minWidth: "46%" }} className={data.ThirdDriverDUI3years === "Yes" ? "option-button active-option-button" : "option-button"} onClick={() => { setThirdDriverDUI3years("Yes") }} >
                            Yes
                        </button>

                        <button style={{ minWidth: "46%" }} className={data.ThirdDriverDUI3years === "No" ? "option-button active-option-button" : "option-button"} onClick={() => { setThirdDriverDUI3years("No") }} >
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

