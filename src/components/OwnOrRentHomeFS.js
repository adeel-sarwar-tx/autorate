/*

 ** Page number -> 34

 ** Percentage -> 76

 
*/


import React, { useState } from 'react';
import ProgressDetails from './ProgressDetails';
import PrimaryLabel from './PrimaryLabel';
import FormActionContainer from './FormActionContainer';

import { useNavigate } from 'react-router';
import { Paths } from '../constants/Constants';

import ErrorText from './ErrorText';
import CallUsSection from './CallUsSection';

export default function OwnOrRentHomeFS({ data, setData, percentage, setPercentage, contactUsNumber, savingsAmount, cityName, setPage }) {



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

    //set OwnOrRentHome
    function setOwnOrRentHome(value) {
        setData({ ...data, OwnOrRentHome: value });
        setError(false);

        if (value === "Own") {
            //setTimeout(() => { setPage(35) }, 200);
            setTimeout(() => { navigate(Paths.homeInsuranceQuote) }, 200);
        } else {
            //setTimeout(() => { setPage(36) }, 200);
            setTimeout(() => { navigate(Paths.renterInsuranceQuote) }, 200);
        }



    }



    //previous button click
    function previousButtonOnclick() {

        if (data.HowManyDrivers === "1") {
            //setTimeout(() => { setPage(21) }, 200);
            setTimeout(() => { navigate(Paths.driver1DUI) }, 200);
        } else if (data.HowManyDrivers === "2") {
            //setTimeout(() => { setPage(27) }, 200);
            setTimeout(() => { navigate(Paths.driver2BirthDate) }, 200);
        } else {
            //setTimeout(() => { setPage(33) }, 200);
            setTimeout(() => { navigate(Paths.driver3BirthDate) }, 200);
        }


    }

    //next button click
    function nextButtonOnclick() {
        if (data.OwnOrRentHome != null && data.OwnOrRentHome !== "" && data.OwnOrRentHome !== undefined) {


            if (data.OwnOrRentHome === "Own") {
                //setTimeout(() => { setPage(35) }, 200);
                setTimeout(() => { navigate(Paths.homeInsuranceQuote) }, 200);
            } else {
                //setTimeout(() => { setPage(36) }, 200);
                setTimeout(() => { navigate(Paths.renterInsuranceQuote) }, 200);
            }


        } else {
            setError(true);
        }
    }


    return (
        <div>
            <ProgressDetails percentage={76} savingsAmount={savingsAmount} cityName={cityName} />
            <PrimaryLabel label="Do you own or rent your home?" />

            <div className="section-container">
                <div className="form-section">
                    <div className="options-container">

                        {/* <button className="option-button active-option-button">
                            2018
                        </button> */}

                        <button style={{ minWidth: "46%" }} className={data.OwnOrRentHome === "Own" ? "option-button active-option-button" : "option-button"} onClick={() => { setOwnOrRentHome("Own") }} >
                            Own
                        </button>

                        <button style={{ minWidth: "46%" }} className={data.OwnOrRentHome === "Rent" ? "option-button active-option-button" : "option-button"} onClick={() => { setOwnOrRentHome("Rent") }} >
                            Rent
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

