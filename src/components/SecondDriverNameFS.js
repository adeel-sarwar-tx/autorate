/*

 ** Page number -> 40

 ** Percentage -> 88


*/

import React, { useState } from 'react';
import ProgressDetails from './ProgressDetails';
import PrimaryLabel from './PrimaryLabel';
import FormActionContainer from './FormActionContainer';


import ErrorText from './ErrorText';
import CallUsSection from './CallUsSection';

import { useNavigate } from 'react-router';
import { Paths } from '../constants/Constants';

export default function SecondDriverNameFS({ data, setData, percentage, setPercentage, contactUsNumber, savingsAmount, cityName, setPage }) {



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

    function setSecondDriverFirstName(value) {
        const regex = /^[a-zA-Z+ ]{0,20}$/;
        if (regex.test(value)) {
            setData({ ...data, SecondDriverFirstName: value });
        }
    }

    function setSecondDriverLastName(value) {
        const regex = /^[a-zA-Z ]{0,20}$/;
        if (regex.test(value)) {
            setData({ ...data, SecondDriverLastName: value });
        }
    }



    //previous button click
    function previousButtonOnclick() {
        //setTimeout(() => { setPage(39) }, 200);
        setTimeout(() => { navigate(Paths.driverName) }, 200);
    }

    //next button click
    function nextButtonOnclick() {
        if (data.SecondDriverFirstName != null && data.SecondDriverFirstName !== "" && data.SecondDriverFirstName !== undefined && data.SecondDriverLastName != null && data.SecondDriverLastName !== "" && data.SecondDriverLastName !== undefined) {

            if (data.HowManyDrivers === "2") {
                //setTimeout(() => { setPage(42) }, 200);
                setTimeout(() => { navigate(Paths.address) }, 200);
            } else {
                //setTimeout(() => { setPage(41) }, 200);
                setTimeout(() => { navigate(Paths.driver3Name) }, 200);
            }



        } else {
            setError(true);
        }
    }


    return (
        <div>
            <ProgressDetails percentage={88} savingsAmount={savingsAmount} cityName={cityName} />
            <PrimaryLabel label="What is your second driver's name?" />

            <div className="section-container">
                <div className="form-section">
                    <div className="options-container">





                        <input placeholder="First Name" className="input-field" type="text" value={data.SecondDriverFirstName} onChange={(e) => { setSecondDriverFirstName(e.target.value) }} style={{ width: "46%", textAlign: "left" }} />

                        <input placeholder="Last Name" className="input-field" type="text" value={data.SecondDriverLastName} onChange={(e) => { setSecondDriverLastName(e.target.value) }} style={{ width: "46%", textAlign: "left" }} />

                    </div>
                    {error ? <ErrorText /> : null}
                </div>

            </div>

            <FormActionContainer previousButtonVisibility={true} previousButtonOnclick={previousButtonOnclick} nextButtonVisibility={true} nextButtonOnclick={nextButtonOnclick} />

            <CallUsSection contactUsNumber={contactUsNumber} />
        </div>
    )
}

