/* 

 ** Page number -> 7

 ** Percentage -> 10

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

import { useNavigate } from 'react-router';
import { Paths } from '../constants/Constants';

export default function SecondVehicleMakeFS({ data, setData, percentage, setPercentage, contactUsNumber, savingsAmount, cityName, setPage }) {

    //vehicle makes
    const [secondVehicleMakes, setSecondVehicleMakes] = useState([]);

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
    function setSecondVehicleMake(value) {

        setData({ ...data, SecondVehicleMake: value });
        setError(false);

        //setTimeout(() => { setPage(8) }, 200);
        setTimeout(() => { navigate(Paths.vehicle2Model) }, 200);
    }

    //fetch vehicle makes
    useEffect(() => {
        fetchVehicleMakes(setSecondVehicleMakes);
    }, []);

    //previous button click
    function previousButtonOnclick() {

        //setTimeout(() => { setPage(6); }, 200);
        setTimeout(() => { navigate(Paths.vehicle2Year) }, 200);
    }

    //next button click
    function nextButtonOnclick() {
        if (data.SecondVehicleMake != null && data.SecondVehicleMake !== "" && data.SecondVehicleMake !== undefined) {
            //setTimeout(() => { setPage(8); }, 200);
            setTimeout(() => { navigate(Paths.vehicle2Model) }, 200);

        } else {
            setError(true);
        }
    }


    return (
        <div>
            <ProgressDetails percentage={10} savingsAmount={savingsAmount} cityName={cityName} />
            <PrimaryLabel label="What is your second vehicle make?" />

            <div className="section-container">
                <div className="form-section">
                    <div className="options-container">

                        {/* <button className="option-button active-option-button">
                            2018
                        </button> */}
                        <button onClick={() => { setSecondVehicleMake("Buick") }} className="option-button">
                            <img className="vehicle-logo" src={Buick} alt="Buick" />
                            <div>Buick</div>
                        </button>
                        <button onClick={() => { setSecondVehicleMake("Chevrolet") }} className="option-button">
                            <img className="vehicle-logo" src={Chevrolet} alt="Chevrolet" />
                            <div>Chevrolet</div>
                        </button>
                        <button onClick={() => { setSecondVehicleMake("Chrysler") }} className="option-button">
                            <img className="vehicle-logo" src={Chrysler} alt="Chrysler" />
                            <div>Chrysler</div>
                        </button>
                        <button onClick={() => { setSecondVehicleMake("Dodge") }} className="option-button">
                            <img className="vehicle-logo" src={Dodge} alt="Dodge" />
                            <div>Dodge</div>
                        </button>
                        <button onClick={() => { setSecondVehicleMake("Ford") }} className="option-button">
                            <img className="vehicle-logo" src={Ford} alt="Ford" />
                            <div>Ford</div>
                        </button>
                        <button onClick={() => { setSecondVehicleMake("GMC") }} className="option-button">
                            <img className="vehicle-logo" src={GMC} alt="GMC" />
                            <div>GMC</div>
                        </button>
                        <button onClick={() => { setSecondVehicleMake("Honda") }} className="option-button">
                            <img className="vehicle-logo" src={Honda} alt="Honda" />
                            <div>Honda</div>
                        </button>
                        <button onClick={() => { setSecondVehicleMake("Hyundai") }} className="option-button">
                            <img className="vehicle-logo" src={Hyundai} alt="Hyundai" />
                            <div>Hyundai</div>
                        </button>
                        <button onClick={() => { setSecondVehicleMake("Jeep") }} className="option-button">
                            <img className="vehicle-logo" src={Jeep} alt="Jeep" />
                            <div>Jeep</div>
                        </button>
                        <button onClick={() => { setSecondVehicleMake("Kia") }} className="option-button">
                            <img className="vehicle-logo" src={Kia} alt="Kia" />
                            <div>Kia</div>
                        </button>
                        <button onClick={() => { setSecondVehicleMake("Nissan") }} className="option-button">
                            <img className="vehicle-logo" src={Nissan} alt="Nissane" />
                            <div>Nissan</div>
                        </button>
                        <button onClick={() => { setSecondVehicleMake("Toyota") }} className="option-button">
                            <img className="vehicle-logo" src={Toyota} alt="Toyota" />
                            <div>Toyota</div>
                        </button>

                    </div>
                    {error ? <ErrorText /> : null}
                </div>

            </div>

            <SelectField options={secondVehicleMakes} option={data.SecondVehicleMake} setOption={setSecondVehicleMake} label="Browse all makes" />
            <FormActionContainer previousButtonVisibility={true} previousButtonOnclick={previousButtonOnclick} nextButtonVisibility={true} nextButtonOnclick={nextButtonOnclick} />

            <CallUsSection contactUsNumber={contactUsNumber} />
        </div>
    )
}
