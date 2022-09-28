/* 

 ** Page number -> 8

 ** Percentage -> 12

*/

import React, { useState, useEffect } from 'react';
import { fetchVehicleModels } from './Util';
import ProgressDetails from './ProgressDetails';
import PrimaryLabel from './PrimaryLabel';
import FormActionContainer from './FormActionContainer';

import { useNavigate } from 'react-router';
import { Paths } from '../constants/Constants';

import ErrorText from './ErrorText';
import CallUsSection from './CallUsSection';

export default function SecondVehicleModelFS({ data, setData, percentage, setPercentage, contactUsNumber, savingsAmount, cityName, setPage }) {

    //vehicle Models
    const [secondVehicleModels, setSecondVehicleModels] = useState([]);

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
    function setSecondVehicleModel(value) {
        setData({ ...data, SecondVehicleModel: value });
        setError(false);
        //setTimeout(() => { setPage(9) }, 200);
        setTimeout(() => { navigate(Paths.addThirdVehicle) }, 200);
    }

    //fetch vehicle makes
    useEffect(() => {
        fetchVehicleModels(data.SecondVehicleYear, data.SecondVehicleMake, setSecondVehicleModels);
    }, [data]);

    //previous button click
    function previousButtonOnclick() {
        //setTimeout(() => { setPage(7) }, 200);
        setTimeout(() => { navigate(Paths.vehicle2Make) }, 200);
    }

    //next button click
    function nextButtonOnclick() {
        if (data.SecondVehicleModel != null && data.SecondVehicleModel !== "" && data.SecondVehicleModel !== undefined) {
            //setTimeout(() => { setPage(9) }, 200);
            setTimeout(() => { navigate(Paths.addThirdVehicle) }, 200);
        } else {
            setError(true);
        }
    }


    return (
        <div>
            <ProgressDetails percentage={12} savingsAmount={savingsAmount} cityName={cityName} />
            <PrimaryLabel label="What is your second vehicle model?" />

            <div className="section-container">
                <div className="form-section">
                    <div className="options-container">

                        {/* <button className="option-button active-option-button">
                            2018
                        </button> */}
                        {secondVehicleModels.map(d => (<button style={{ minWidth: "46%" }} key={d.value} onClick={() => { setSecondVehicleModel(d.value) }} className={data.SecondVehicleModel === d.value ? "option-button active-option-button" : "option-button"} >
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
