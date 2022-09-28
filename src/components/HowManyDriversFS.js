/* 

 ** Page number -> 15

 ** Percentage -> 30

*/


import React, { useState } from 'react';
import ProgressDetails from './ProgressDetails';
import PrimaryLabel from './PrimaryLabel';
import FormActionContainer from './FormActionContainer';

import { useNavigate } from 'react-router';
import { Paths } from '../constants/Constants';

import ErrorText from './ErrorText';
import CallUsSection from './CallUsSection';

export default function HowManyDriversFS({ data, setData, percentage, setPercentage, contactUsNumber, savingsAmount, cityName, setPage }) {

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

    //set HowManyDrivers
    function setHowManyDrivers(value) {
        setData({ ...data, HowManyDrivers: value });
        setError(false);

        //setTimeout(() => { setPage(16) }, 200);
        setTimeout(() => { navigate(Paths.driver1Gender) }, 200);
    }



    //previous button click
    function previousButtonOnclick() {

        if (data.AutoInsurancePast30days === "Yes") {
            // setTimeout(() => { setPage(14) }, 200);
            setTimeout(() => { navigate(Paths.currentInsurer) }, 200);
        } else {
            //setTimeout(() => { setPage(13) }, 200);
            setTimeout(() => { navigate(Paths.autoInsurance) }, 200);
        }

    }

    //next button click
    function nextButtonOnclick() {
        if (data.HowManyDrivers != null && data.HowManyDrivers !== "" && data.HowManyDrivers !== undefined) {


            //setTimeout(() => { setPage(16) }, 200);
            setTimeout(() => { navigate(Paths.driver1Gender) }, 200);

        } else {
            setError(true);
        }
    }


    return (
        <div>
            <ProgressDetails percentage={30} savingsAmount={savingsAmount} cityName={cityName} />
            <PrimaryLabel label="How many drivers will be on your policy?" />

            <div className="section-container">
                <div className="form-section">
                    <div className="options-container">

                        {/* <button className="option-button active-option-button">
                            2018
                        </button> */}

                        <button className={data.HowManyDrivers === "1" ? "option-button active-option-button" : "option-button"} onClick={() => { setHowManyDrivers("1") }} >
                            1
                        </button>

                        <button className={data.HowManyDrivers === "2" ? "option-button active-option-button" : "option-button"} onClick={() => { setHowManyDrivers("2") }} >
                            2
                        </button>

                        <button className={data.HowManyDrivers === "3" ? "option-button active-option-button" : "option-button"} onClick={() => { setHowManyDrivers("3") }} >
                            3
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

