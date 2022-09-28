/*

 ** Page number -> 36

 ** Percentage -> 80

 export default function ReceiveRenterInsuranceQuotesFS() {
 
*/


import React, { useState } from 'react';
import ProgressDetails from './ProgressDetails';
import PrimaryLabel from './PrimaryLabel';
import FormActionContainer from './FormActionContainer';

import ErrorText from './ErrorText';
import CallUsSection from './CallUsSection';

import { useNavigate } from 'react-router';
import { Paths } from '../constants/Constants';

export default function ReceiveRenterInsuranceQuotesFS({ data, setData, percentage, setPercentage, contactUsNumber, savingsAmount, cityName, setPage }) {

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



    //set ReceiveRenterInsuranceQuotes
    function setReceiveRenterInsuranceQuotes(value) {
        setData({ ...data, ReceiveRenterInsuranceQuotes: value });
        setError(false);

        //setTimeout(() => { setPage(37) }, 200);
        setTimeout(() => { navigate(Paths.servedInMilitary) }, 200);
    }



    //previous button click
    function previousButtonOnclick() {


        //setTimeout(() => { setPage(34) }, 200);

        setTimeout(() => { navigate(Paths.ownOrRentHome) }, 200);



    }

    //next button click
    function nextButtonOnclick() {
        if (data.ReceiveRenterInsuranceQuotes != null && data.ReceiveRenterInsuranceQuotes !== "" && data.ReceiveRenterInsuranceQuotes !== undefined) {


            //setTimeout(() => { setPage(37) }, 200);
            setTimeout(() => { navigate(Paths.servedInMilitary) }, 200);
        } else {
            setError(true);
        }
    }


    return (
        <div>
            <ProgressDetails percentage={80} savingsAmount={savingsAmount} cityName={cityName} />
            <PrimaryLabel label="Would you like to also receive renter's insurance policy quotes?" />

            <div className="section-container">

                <div className="form-section">
                    <div className="info-text">You may be able to bundle and save even more on your auto policy.</div>
                    <div className="options-container">

                        {/* <button className="option-button active-option-button">
                            2018
                        </button> */}

                        <button style={{ minWidth: "46%" }} className={data.ReceiveRenterInsuranceQuotes === "Yes" ? "option-button active-option-button" : "option-button"} onClick={() => { setReceiveRenterInsuranceQuotes("Yes") }} >
                            Yes
                        </button>

                        <button style={{ minWidth: "46%" }} className={data.ReceiveRenterInsuranceQuotes === "No" ? "option-button active-option-button" : "option-button"} onClick={() => { setReceiveRenterInsuranceQuotes("No") }} >
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


