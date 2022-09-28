/* 

 ** Page number -> 4

 ** Percentage -> 4

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

export default function VehicleModelFS({ data, setData, percentage, setPercentage, contactUsNumber, savingsAmount, cityName, setPage }) {



    //vehicle Models
    const [vehicleModels, setvehicleModels] = useState([]);

    let navigate = useNavigate();

    if (data.VehicleYear === "") {
        navigate(Paths.vehicle1Year);
    }

    //error
    const [error, setError] = useState(false);

    //set vehicles make
    function setvehicleModel(value) {
        setData({ ...data, VehicleModel: value });
        setError(false);
        //setTimeout(() => { setPage(5) }, 200);
        setTimeout(() => { navigate(Paths.addSecondVehicle) }, 200);
    }

    //fetch vehicle makes
    useEffect(() => {

        fetchVehicleModels(data.VehicleYear, data.VehicleMake, setvehicleModels);

    }, [data]);

    React.useEffect(() => {
        //scroll to top
        const progressContainer = document.querySelector(".primary-label-container");
        if (progressContainer !== null) {
            setTimeout(() => { progressContainer.scrollIntoViewIfNeeded(); }, 300);
        }
    });

    //previous button click
    function previousButtonOnclick() {
        //setTimeout(() => { setPage(3) }, 100);
        setTimeout(() => { navigate(Paths.vehicle1Make) }, 200);
    }

    //next button click
    function nextButtonOnclick() {
        if (data.VehicleModel != null && data.VehicleModel !== "" && data.VehicleModel !== undefined) {
            //setTimeout(() => { setPage(5) }, 100);
            setTimeout(() => { navigate(Paths.addSecondVehicle) }, 200);

        } else {
            setError(true);
        }
    }


    return (
        <div>
            <ProgressDetails percentage={4} savingsAmount={savingsAmount} cityName={cityName} />
            <PrimaryLabel label="What is your vehicle model?" />

            <div className="section-container">
                <div className="form-section">
                    <div className="options-container">

                        {/* <button className="option-button active-option-button">
                            2018
                        </button> */}
                        {vehicleModels.map(d => (<button style={{ minWidth: "46%" }} key={d.value} onClick={() => { setvehicleModel(d.value) }} className={data.VehicleModel === d.value ? "option-button active-option-button" : "option-button"} >
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
