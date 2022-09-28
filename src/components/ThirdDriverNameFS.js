/*

 ** Page number -> 41

 ** Percentage -> 90


*/


import React, { useState } from 'react';
import ProgressDetails from './ProgressDetails';
import PrimaryLabel from './PrimaryLabel';
import FormActionContainer from './FormActionContainer';

import { useNavigate } from 'react-router';
import { Paths } from '../constants/Constants';

import ErrorText from './ErrorText';
import CallUsSection from './CallUsSection';

export default function ThirdDriverNameFS({ data, setData, percentage, setPercentage, contactUsNumber, savingsAmount, cityName, setPage }) {

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



    function setThirdDriverFirstName(value) {
        const regex = /^[a-zA-Z+ ]{0,20}$/;
        if (regex.test(value)) {
            setData({ ...data, ThirdDriverFirstName: value });
        }
    }

    function setThirdDriverLastName(value) {
        const regex = /^[a-zA-Z ]{0,20}$/;
        if (regex.test(value)) {
            setData({ ...data, ThirdDriverLastName: value });
        }
    }



    //previous button click
    function previousButtonOnclick() {
        //setTimeout(() => { setPage(40) }, 200);
        setTimeout(() => { navigate(Paths.driver2Name) }, 200);
    }

    //next button click
    function nextButtonOnclick() {
        if (data.ThirdDriverFirstName != null && data.ThirdDriverFirstName !== "" && data.ThirdDriverFirstName !== undefined && data.ThirdDriverLastName != null && data.ThirdDriverLastName !== "" && data.ThirdDriverLastName !== undefined) {


            //setTimeout(() => { setPage(42) }, 200);


            setTimeout(() => { navigate(Paths.address) }, 200);

        } else {
            setError(true);
        }
    }


    return (
        <div>
            <ProgressDetails percentage={90} savingsAmount={savingsAmount} cityName={cityName} />
            <PrimaryLabel label="What is your third driver's name?" />

            <div className="section-container">
                <div className="form-section">
                    <div className="options-container">





                        <input placeholder="First Name" className="input-field" type="text" value={data.ThirdDriverFirstName} onChange={(e) => { setThirdDriverFirstName(e.target.value) }} style={{ width: "46%", textAlign: "left" }} />

                        <input placeholder="Last Name" className="input-field" type="text" value={data.ThirdDriverLastName} onChange={(e) => { setThirdDriverLastName(e.target.value) }} style={{ width: "46%", textAlign: "left" }} />

                    </div>
                    {error ? <ErrorText /> : null}
                </div>

            </div>

            <FormActionContainer previousButtonVisibility={true} previousButtonOnclick={previousButtonOnclick} nextButtonVisibility={true} nextButtonOnclick={nextButtonOnclick} />

            <CallUsSection contactUsNumber={contactUsNumber} />
        </div>
    )
}

