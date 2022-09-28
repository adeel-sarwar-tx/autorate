/*

 ** Page number -> 43

 ** Percentage -> 95


*/



import React, { useState } from 'react';
import ProgressDetails from './ProgressDetails';
import PrimaryLabel from './PrimaryLabel';
import FormActionContainer from './FormActionContainer';

import { useNavigate } from 'react-router';
import { Paths } from '../constants/Constants';


import ErrorText from './ErrorText';
import CallUsSection from './CallUsSection';

export default function EmailFS({ data, setData, percentage, setPercentage, contactUsNumber, savingsAmount, cityName, setPage }) {



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



    function setEmail(value) {
        /* const regex = /^[a-zA-Z+ ]{0,20}$/;
        if (regex.test(value)) {
            setError(false);
            setData({ ...data, Email: value });
        } */

        setError(false);
        setData({ ...data, Email: value });


    }

    function setReceiveEmailRates(event) {
        if (event.target.checked) {
            setData({ ...data, ReceiveEmailRates: "Yes" });
        } else {
            setData({ ...data, ReceiveEmailRates: "No" });
        }

    }





    function onPressEnter(event) {
        if (event.charCode === 13) {
            nextButtonOnclick();
        }
    }

    //previous button click
    function previousButtonOnclick() {


        //setTimeout(() => { setPage(42) }, 200);
        setTimeout(() => { navigate(Paths.address) }, 200);

    }

    //next button click
    function nextButtonOnclick() {
        if (data.Email != null && data.Email !== "" && data.Email !== undefined) {
            if (window.document.querySelector("#email_address").checkValidity()) {

                //setTimeout(() => { setPage(44) }, 200);
                setTimeout(() => { navigate(Paths.phoneNumber) }, 200);


            } else {
                setError(true);
            }

        } else {
            setError(true);
        }
    }


    return (
        <div>
            <ProgressDetails percentage={95} savingsAmount={savingsAmount} cityName={cityName} />
            <PrimaryLabel label="What is your email address?" />

            <div className="section-container">
                <div className="form-section">
                    <div style={{ justifyContent: "center" }} className="options-container">


                        <input placeholder="example@gmail.com" className="input-field" type="email" id="email_address" value={data.Email} onChange={(e) => { setEmail(e.target.value) }} style={{ width: "90%", textAlign: "left" }} onKeyPress={(e) => { onPressEnter(e) }} />
                        <label style={{ fontSize: "15px", userSelect: "none", cursor: "pointer", fontFamily: '"Roboto","Lucida Grande","Lucida Sans Unicode",Tahoma,sans-serif!important"' }} >  <input onChange={(e) => { setReceiveEmailRates(e) }} style={{ marginRight: "10px", display: "none" }} checked={data.ReceiveEmailRates === "Yes" ? true : false} type="checkbox" />
                      Sign up to receive these rates via email. Some of the best rates are only available by email.
                      </label>
                    </div>
                    {error ? <ErrorText /> : null}
                </div>

            </div>

            <FormActionContainer previousButtonVisibility={true} previousButtonOnclick={previousButtonOnclick} nextButtonVisibility={true} nextButtonOnclick={nextButtonOnclick} />

            <CallUsSection contactUsNumber={contactUsNumber} />
        </div>
    )
}

