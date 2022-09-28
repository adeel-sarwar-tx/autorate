/* 

 ** Page number -> 16

 ** Percentage -> 32

*/


import React, { useState } from 'react';
import ProgressDetails from './ProgressDetails';
import PrimaryLabel from './PrimaryLabel';
import FormActionContainer from './FormActionContainer';

import ErrorText from './ErrorText';
import CallUsSection from './CallUsSection';

import { useNavigate } from 'react-router';
import { Paths } from '../constants/Constants';

export default function GenderFS({ data, setData, percentage, setPercentage, contactUsNumber, savingsAmount, cityName, setPage }) {



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

    //set HowManyDrivers
    function setGender(value) {
        setData({ ...data, Gender: value });
        setError(false);

        //setTimeout(() => { setPage(17) }, 200);
        setTimeout(() => { navigate(Paths.driver1Married) }, 200);
    }



    //previous button click
    function previousButtonOnclick() {


        // setTimeout(() => { setPage(15) }, 200);

        setTimeout(() => { navigate(Paths.driversCount) }, 200);
    }

    //next button click
    function nextButtonOnclick() {
        if (data.Gender != null && data.Gender !== "" && data.Gender !== undefined) {


            //setTimeout(() => { setPage(17) }, 200);
            setTimeout(() => { navigate(Paths.driver1Married) }, 200);

        } else {
            setError(true);
        }
    }


    return (
        <div>
            <ProgressDetails percentage={32} savingsAmount={savingsAmount} cityName={cityName} />
            <PrimaryLabel label="What is your gender?" />

            <div className="section-container">
                <div className="form-section">
                    <div className="options-container">

                        {/* <button className="option-button active-option-button">
                            2018
                        </button> */}

                        <button style={{ minWidth: "76%" }} className={data.Gender === "Male" ? "option-button active-option-button" : "option-button"} onClick={() => { setGender("Male") }} >
                            Male
                        </button>

                        <button style={{ minWidth: "76%" }} className={data.Gender === "female" ? "option-button active-option-button" : "option-button"} onClick={() => { setGender("female") }} >
                            female
                        </button>

                        <button style={{ minWidth: "76%" }} className={data.Gender === "non-binary" ? "option-button active-option-button" : "option-button"} onClick={() => { setGender("non-binary") }} >
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

