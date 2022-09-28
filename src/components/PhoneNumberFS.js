/*

 ** Page number -> 44

 ** Percentage -> 98


*/



import React, { useState } from 'react';
import ProgressDetails from './ProgressDetails';
import PrimaryLabel from './PrimaryLabel';
import FormActionContainer from './FormActionContainer';

import { useNavigate } from 'react-router';
import { Paths } from '../constants/Constants';

import ErrorText from './ErrorText';
import CallUsSection from './CallUsSection';

import { pushDataToLeadProsper, prepareAutoDate } from './Util';

import CircularProgress from '@mui/material/CircularProgress';

export default function PhoneNumberFS({ data, setData, percentage, setPercentage, contactUsNumber, savingsAmount, cityName, setPage }) {

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

    const [showLoading, setShowLoading] = useState(false);

    function setPhoneNumber(value, event) {
        if (value !== '' && value !== " ") {
            const regex = /^[0-9-]{0,14}$/;
            //validate
            if (regex.test(value)) {
                var filteredValue = value.replaceAll('-', '');
                if (parseInt(filteredValue.substr(0, 1)) === 1) {
                    filteredValue = filteredValue.slice(1);
                }
                var preparedValue = "";
                if (filteredValue.length <= 3) {
                    preparedValue = `${filteredValue.substr(0, 3)}`;
                } else if (filteredValue.length <= 6) {
                    preparedValue = `${filteredValue.substr(0, 3)}-${filteredValue.substr(3, 3)}`;
                } else {
                    preparedValue = `${filteredValue.substr(0, 3)}-${filteredValue.substr(3, 3)}-${filteredValue.substr(6, 4)}`;
                }

                setError(false);
                setData({ ...data, PhoneNumber: preparedValue });



            }
        } else if (value === '' || value === " ") {
            setError(false);
            setData({ ...data, PhoneNumber: value });
        }


    }




    function onPressEnter(event) {

        if (event.charCode === 13) {
            nextButtonOnclick();
        }
    }

    //previous button click
    function previousButtonOnclick() {
        console.log(data);

        //setTimeout(() => { setPage(43) }, 200);
        setTimeout(() => { navigate(Paths.email) }, 200);

    }

    //next button click
    function nextButtonOnclick() {
        if (data.PhoneNumber != null && data.PhoneNumber !== "" && data.PhoneNumber !== undefined && data.PhoneNumber.length === 12) {
            //disable field
            document.querySelector("#phone_number_field").disabled = true;
            document.querySelector("#final_submit_button").disabled = true;
            document.querySelector("#final_submit_button").style.cursor = "no-drop";
            setShowLoading(true);
            //setTimeout(() => { setPage(44) }, 100);
            prepareAutoDate(data);
            pushDataToLeadProsper(data);



        } else {
            setError(true);
        }
    }


    return (
        <div>
            <ProgressDetails percentage={98} savingsAmount={savingsAmount} cityName={cityName} />
            <PrimaryLabel label="Final Step! What is your phone number?" />

            <div className="section-container">
                {/*   {showLoading === true ? <><div className="loading-icon-container">
                    <CircularProgress />
                </div></> : null} */}

                <div className="form-section">
                    <div style={{ justifyContent: "center" }} className="options-container">







                        <label className="phone-number-label">  <input id="phone_number_field" placeholder="e.g. 999-999-9999" className="input-field" type="text" value={data.PhoneNumber} onChange={(e) => { setPhoneNumber(e.target.value, e) }} style={{ width: "100%", textAlign: "left", marginBottom: 0, paddingLeft: "45px" }} pattern="\(\d\d\d\)\d\d\d-\d\d\d\d$" onKeyPress={(e) => { onPressEnter(e) }} /> </label>

                        {error ? <ErrorText /> : null}
                        <button id="final_submit_button" className="form-action-button form-final-button" onClick={nextButtonOnclick}>{showLoading === true ? <CircularProgress style={{ color: "white" }} /> : "Show My Quotes >>"}</button>

                        <div className="terms-and-conditions">
                            By clicking Show My Quotes and submitting this form, I am providing express written consent to being contacted by you or by one or more agents or brokers of your Marketing Partners which companies I agree may reach me to discuss my interest, including offers of insurance, at the phone number and/or email address I have provided to you in submitting this form and/or additional information obtained. I consent by electronic signature to being contacted by telephone (via call and/or text) for marketing/telemarketing purposes at the phone number I provided in this form, even if my phone number is listed on a Do Not Call Registry, and I agree that such contact may be made using an automatic telephone dialing system and/or an artificial or prerecorded voice (standard call, text message, and data rates apply). I can revoke my consent at any time. I also understand that my agreement to be contacted is not a condition of purchasing any property, goods or services, and that I may email support@ratenavigators.com to request an insurance quote. By clicking Show My Quotes and submitting this form, I affirm that I have read and agree to this website’s <a href="https://ratenavigators.com/privacy-policy/" target="_blank" rel="noreferrer">Privacy Policy</a> and <a href="https://ratenavigators.com/terms-conditions/" target="_blank" rel="noreferrer">Terms of Use</a>, including the arbitration provision and the <a href="https://ratenavigators.com/terms-conditions/#esign" target="_blank" rel="noreferrer">E-SIGN Consent</a>.
                        </div>
                    </div>

                </div>

            </div>

            { showLoading ? null : <FormActionContainer previousButtonVisibility={true} previousButtonOnclick={previousButtonOnclick} nextButtonVisibility={false} />}

            <CallUsSection contactUsNumber={contactUsNumber} />
        </div>
    )
}

