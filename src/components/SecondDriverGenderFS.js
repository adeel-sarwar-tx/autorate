/* 

 ** Page number -> 22

 ** Percentage -> 48

*/


import React, { useState } from 'react';
import ProgressDetails from './ProgressDetails';
import PrimaryLabel from './PrimaryLabel';
import FormActionContainer from './FormActionContainer';

import ErrorText from './ErrorText';
import CallUsSection from './CallUsSection';

import { useNavigate } from 'react-router';
import { Paths } from '../constants/Constants';

export default function SecondDriverGenderFS({ data, setData, percentage, setPercentage, contactUsNumber, savingsAmount, cityName, setPage }) {


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

    //set SecondDriver
    function setSecondDriverGender(value) {
        setData({ ...data, SecondDriverGender: value });
        setError(false);

        //setTimeout(() => { setPage(23) }, 200);
        setTimeout(() => { navigate(Paths.driver2Married) }, 200);
    }



    //previous button click
    function previousButtonOnclick() {


        //setTimeout(() => { setPage(21) }, 200);
        setTimeout(() => { navigate(Paths.driver1DUI) }, 200);

    }

    //next button click
    function nextButtonOnclick() {
        if (data.SecondDriverGender != null && data.SecondDriverGender !== "" && data.SecondDriverGender !== undefined) {


            // setTimeout(() => { setPage(23) }, 200);
            setTimeout(() => { navigate(Paths.driver2Married) }, 200);

        } else {
            setError(true);
        }
    }


    return (
        <div>
            <ProgressDetails percentage={48} savingsAmount={savingsAmount} cityName={cityName} />
            <PrimaryLabel label="What is your second driver's gender?" />

            <div className="section-container">
                <div className="form-section">
                    <div className="options-container">

                        {/* <button className="option-button active-option-button">
                            2018
                        </button> */}

                        <button style={{ minWidth: "76%" }} className={data.SecondDriverGender === "Male" ? "option-button active-option-button" : "option-button"} onClick={() => { setSecondDriverGender("Male") }} >
                            Male
                        </button>

                        <button style={{ minWidth: "76%" }} className={data.SecondDriverGender === "female" ? "option-button active-option-button" : "option-button"} onClick={() => { setSecondDriverGender("female") }} >
                            female
                        </button>

                        <button style={{ minWidth: "76%" }} className={data.SecondDriverGender === "non-binary" ? "option-button active-option-button" : "option-button"} onClick={() => { setSecondDriverGender("non-binary") }} >
                            non-binary
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

