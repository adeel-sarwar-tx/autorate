/*

 ** Page number -> 28

 ** Percentage -> 64


*/


import React, { useState } from 'react';
import ProgressDetails from './ProgressDetails';
import PrimaryLabel from './PrimaryLabel';
import FormActionContainer from './FormActionContainer';

import ErrorText from './ErrorText';
import CallUsSection from './CallUsSection';

import { useNavigate } from 'react-router';
import { Paths } from '../constants/Constants';

export default function ThirdDriverGenderFS({ data, setData, percentage, setPercentage, contactUsNumber, savingsAmount, cityName, setPage }) {

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



    //set ThirdDriverGender
    function setThirdDriverGender(value) {
        setData({ ...data, ThirdDriverGender: value });
        setError(false);

        //setTimeout(() => { setPage(29) }, 200);
        setTimeout(() => { navigate(Paths.driver3Married) }, 200);
    }



    //previous button click
    function previousButtonOnclick() {


        //setTimeout(() => { setPage(27) }, 200);
        setTimeout(() => { navigate(Paths.driver2BirthDate) }, 200);

    }

    //next button click
    function nextButtonOnclick() {
        if (data.ThirdDriverGender != null && data.ThirdDriverGender !== "" && data.ThirdDriverGender !== undefined) {


            //setTimeout(() => { setPage(29) }, 200);
            setTimeout(() => { navigate(Paths.driver3Married) }, 200);
        } else {
            setError(true);
        }
    }


    return (
        <div>
            <ProgressDetails percentage={64} savingsAmount={savingsAmount} cityName={cityName} />
            <PrimaryLabel label="What is your third driver's gender?" />

            <div className="section-container">
                <div className="form-section">
                    <div className="options-container">

                        {/* <button className="option-button active-option-button">
                            2018
                        </button> */}

                        <button style={{ minWidth: "76%" }} className={data.ThirdDriverGender === "Male" ? "option-button active-option-button" : "option-button"} onClick={() => { setThirdDriverGender("Male") }} >
                            Male
                        </button>

                        <button style={{ minWidth: "76%" }} className={data.ThirdDriverGender === "female" ? "option-button active-option-button" : "option-button"} onClick={() => { setThirdDriverGender("female") }} >
                            female
                        </button>

                        <button style={{ minWidth: "76%" }} className={data.ThirdDriverGender === "non-binary" ? "option-button active-option-button" : "option-button"} onClick={() => { setThirdDriverGender("non-binary") }} >
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

