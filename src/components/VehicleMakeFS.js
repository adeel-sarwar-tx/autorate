/* 

 ** Page number -> 3

 ** Percentage -> 1

*/

import React, { useState, useEffect } from 'react';
import { fetchVehicleMakes } from './Util';
import ProgressDetails from './ProgressDetails';
import PrimaryLabel from './PrimaryLabel';
import FormActionContainer from './FormActionContainer';
import SelectField from './SelectField';
import ErrorText from './ErrorText';
import CallUsSection from './CallUsSection';

import Buick from "../images/vehicleMakeImages/Buick.svg";
import Chevrolet from "../images/vehicleMakeImages/Chevrolet.svg";
import Chrysler from "../images/vehicleMakeImages/Chrysler.svg";
import Dodge from "../images/vehicleMakeImages/Dodge.svg";
import Ford from "../images/vehicleMakeImages/Ford.svg";
import GMC from "../images/vehicleMakeImages/GMC.svg";
import Honda from "../images/vehicleMakeImages/Honda.svg";
import Hyundai from "../images/vehicleMakeImages/Hyundai.svg";
import Jeep from "../images/vehicleMakeImages/Jeep.svg";
import Kia from "../images/vehicleMakeImages/Kia.svg";
import Nissan from "../images/vehicleMakeImages/Nissan.svg";
import Toyota from "../images/vehicleMakeImages/Toyota.svg";

import { useNavigate } from 'react-router-dom';
import { Paths } from '../constants/Constants';

export default function VehicleMakeFS({ data, setData, percentage, setPercentage, contactUsNumber, savingsAmount, cityName, setPage }) {

    //vehicle makes
    const [vehicleMakes, setvehicleMakes] = useState([]);

    //error
    const [error, setError] = useState(false);
    let navigate = useNavigate();

    if (data.VehicleYear === "") {
        navigate(Paths.vehicle1Year);
    }
    //set vehicles make
    function setvehicleMake(value) {

        setData({ ...data, VehicleMake: value });
        setError(false);

        //setTimeout(() => { setPage(4) }, 200);
        setTimeout(() => { navigate(Paths.vehicle1Model) }, 200);
    }

    React.useEffect(() => {
        //scroll to top
        const progressContainer = document.querySelector(".primary-label-container");
        if (progressContainer !== null) {
            setTimeout(() => { progressContainer.scrollIntoViewIfNeeded(); }, 300);
        }
    });

    //fetch vehicle makes
    useEffect(() => {
        fetchVehicleMakes(setvehicleMakes);


    }, []);





    //previous button click
    function previousButtonOnclick() {

        //setTimeout(() => { /* setPage(2) */history("/sform/vehicle-1-year") }, 100);
        setTimeout(() => { navigate(Paths.vehicle1Year) }, 200);

    }

    //next button click
    function nextButtonOnclick() {
        if (data.VehicleMake != null && data.VehicleMake !== "" && data.VehicleMake !== undefined) {
            // setTimeout(() => { setPage(4) }, 200);

            setTimeout(() => { navigate(Paths.vehicle1Model) }, 200);

        } else {
            setError(true);
        }
    }


    return (
        <div>
            <ProgressDetails percentage={2} savingsAmount={savingsAmount} cityName={cityName} />
            <PrimaryLabel label="What is your vehicle make?" />

            <div className="section-container">
                <div className="form-section">
                    <div className="options-container">

                        {/* <button className="option-button active-option-button">
                            2018
                        </button> */}
                        <button onClick={() => { setvehicleMake("Buick") }} className="option-button">
                            <img className="vehicle-logo" src={Buick} alt="Buick" />
                            <div>Buick</div>
                        </button>
                        <button onClick={() => { setvehicleMake("Chevrolet") }} className="option-button">
                            <img className="vehicle-logo" src={Chevrolet} alt="Chevrolet" />
                            <div>Chevrolet</div>
                        </button>
                        <button onClick={() => { setvehicleMake("Chrysler") }} className="option-button">
                            <img className="vehicle-logo" src={Chrysler} alt="Chrysler" />
                            <div>Chrysler</div>
                        </button>
                        <button onClick={() => { setvehicleMake("Dodge") }} className="option-button">
                            <img className="vehicle-logo" src={Dodge} alt="Dodge" />
                            <div>Dodge</div>
                        </button>
                        <button onClick={() => { setvehicleMake("Ford") }} className="option-button">
                            <img className="vehicle-logo" src={Ford} alt="Ford" />
                            <div>Ford</div>
                        </button>
                        <button onClick={() => { setvehicleMake("GMC") }} className="option-button">
                            <img className="vehicle-logo" src={GMC} alt="GMC" />
                            <div>GMC</div>
                        </button>
                        <button onClick={() => { setvehicleMake("Honda") }} className="option-button">
                            <img className="vehicle-logo" src={Honda} alt="Honda" />
                            <div>Honda</div>
                        </button>
                        <button onClick={() => { setvehicleMake("Hyundai") }} className="option-button">
                            <img className="vehicle-logo" src={Hyundai} alt="Hyundai" />
                            <div>Hyundai</div>
                        </button>
                        <button onClick={() => { setvehicleMake("Jeep") }} className="option-button">
                            <img className="vehicle-logo" src={Jeep} alt="Jeep" />
                            <div>Jeep</div>
                        </button>
                        <button onClick={() => { setvehicleMake("Kia") }} className="option-button">
                            <img className="vehicle-logo" src={Kia} alt="Kia" />
                            <div>Kia</div>
                        </button>
                        <button onClick={() => { setvehicleMake("Nissan") }} className="option-button">
                            <img className="vehicle-logo" src={Nissan} alt="Nissane" />
                            <div>Nissan</div>
                        </button>
                        <button onClick={() => { setvehicleMake("Toyota") }} className="option-button">
                            <img className="vehicle-logo" src={Toyota} alt="Toyota" />
                            <div>Toyota</div>
                        </button>

                    </div>
                    {error ? <ErrorText /> : null}
                </div>

            </div>

            <SelectField options={vehicleMakes} option={data.VehicleMake} setOption={setvehicleMake} label="Browse all makes" />
            <FormActionContainer previousButtonVisibility={true} previousButtonOnclick={previousButtonOnclick} nextButtonVisibility={true} nextButtonOnclick={nextButtonOnclick} />

            <CallUsSection contactUsNumber={contactUsNumber} />
        </div>
    )
}
