/*

 ** Page number -> 37

 ** Percentage -> 82

 
*/



import React, { useState } from 'react';
import ProgressDetails from './ProgressDetails';
import PrimaryLabel from './PrimaryLabel';
import FormActionContainer from './FormActionContainer';

import ErrorText from './ErrorText';
import CallUsSection from './CallUsSection';

import { useNavigate } from 'react-router';
import { Paths } from '../constants/Constants';

export default function ServedInMilitaryFS({ data, setData, percentage, setPercentage, contactUsNumber, savingsAmount, cityName, setPage }) {

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

    //set ServedInMilitary
    function setServedInMilitary(value) {
        setData({ ...data, ServedInMilitary: value });
        setError(false);

        // setTimeout(() => { setPage(38) }, 200);
        setTimeout(() => { navigate(Paths.driver1BirthDate) }, 200);
    }



    //previous button click
    function previousButtonOnclick() {

        if (data.OwnOrRentHome === "Own") {
            //setTimeout(() => { setPage(35) }, 200);
            setTimeout(() => { navigate(Paths.homeInsuranceQuote) }, 200);
        } else {
            //setTimeout(() => { setPage(36) }, 200);
            setTimeout(() => { navigate(Paths.renterInsuranceQuote) }, 200);
        }




    }

    //next button click
    function nextButtonOnclick() {
        if (data.ServedInMilitary != null && data.ServedInMilitary !== "" && data.ServedInMilitary !== undefined) {


            //setTimeout(() => { setPage(38) }, 200);
            setTimeout(() => { navigate(Paths.driver1BirthDate) }, 200);

        } else {
            setError(true);
        }
    }


    return (
        <div>
            <ProgressDetails percentage={82} savingsAmount={savingsAmount} cityName={cityName} />
            <PrimaryLabel label="Have you ever honorably served in the U.S. military?" />

            <div className="section-container">
                <div className="form-section">
                    <div className="options-container">

                        {/* <button className="option-button active-option-button">
                            2018
                        </button> */}

                        <button style={{ minWidth: "46%" }} className={data.ServedInMilitary === "Yes" ? "option-button active-option-button" : "option-button"} onClick={() => { setServedInMilitary("Yes") }} >
                            Yes
                        </button>

                        <button style={{ minWidth: "46%" }} className={data.ServedInMilitary === "No" ? "option-button active-option-button" : "option-button"} onClick={() => { setServedInMilitary("No") }} >
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

