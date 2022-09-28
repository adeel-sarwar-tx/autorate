/* 

 ** Page number -> 12

 ** Percentage -> 22

*/


import React, { useState, useEffect } from 'react';
import { fetchVehicleModels } from './Util';
import ProgressDetails from './ProgressDetails';
import PrimaryLabel from './PrimaryLabel';
import FormActionContainer from './FormActionContainer';

import ErrorText from './ErrorText';
import CallUsSection from './CallUsSection';

import { useNavigate } from 'react-router';
import { Paths } from '../constants/Constants';

export default function ThirdVehicleModelFS({ data, setData, percentage, setPercentage, contactUsNumber, savingsAmount, cityName, setPage }) {

    //vehicle Models
    const [thirdVehicleModels, setThirdVehicleModels] = useState([]);

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

    //set vehicles make
    function setThirdVehicleModel(value) {
        setData({ ...data, ThirdVehicleModel: value });
        setError(false);

        //setTimeout(() => { setPage(13) }, 200);

        setTimeout(() => { navigate(Paths.autoInsurance) }, 200);
    }

    //fetch vehicle makes
    useEffect(() => {
        fetchVehicleModels(data.ThirdVehicleYear, data.ThirdVehicleMake, setThirdVehicleModels);
    }, [data]);

    //previous button click
    function previousButtonOnclick() {

        // setTimeout(() => { setPage(11) }, 200);

        setTimeout(() => { navigate(Paths.vehicle3Make) }, 200);
    }

    //next button click
    function nextButtonOnclick() {
        if (data.ThirdVehicleModel != null && data.ThirdVehicleModel !== "" && data.ThirdVehicleModel !== undefined) {
            // setTimeout(() => { setPage(13) }, 200);

            setTimeout(() => { navigate(Paths.autoInsurance) }, 200);

        } else {
            setError(true);
        }
    }


    return (
        <div>
            <ProgressDetails percentage={22} savingsAmount={savingsAmount} cityName={cityName} />
            <PrimaryLabel label="What is your third vehicle model?" />

            <div className="section-container">
                <div className="form-section">
                    <div className="options-container">

                        {/* <button className="option-button active-option-button">
                            2018
                        </button> */}
                        {thirdVehicleModels.map(d => (<button style={{ minWidth: "46%" }} key={d.value} onClick={() => { setThirdVehicleModel(d.value) }} className={data.ThirdVehicleModel === d.value ? "option-button active-option-button" : "option-button"} >
                            {d.value}
                        </button>))}

                    </div>
                    {error ? <ErrorText /> : null}
                </div>

            </div>

            <FormActionContainer previousButtonVisibility={true} previousButtonOnclick={previousButtonOnclick} nextButtonVisibility={true} nextButtonOnclick={nextButtonOnclick} />

            <CallUsSection contactUsNumber={contactUsNumber} />
        </div>
    )
}
