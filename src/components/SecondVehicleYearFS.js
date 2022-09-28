/* 

 ** Page number -> 6

 ** Percentage -> 8

*/

import React, { useState } from 'react';
import ProgressDetails from './ProgressDetails';
import PrimaryLabel from './PrimaryLabel';
import FormActionContainer from './FormActionContainer';
import SelectField from './SelectField';
import ErrorText from './ErrorText';
import CallUsSection from './CallUsSection';

import { useNavigate } from 'react-router';
import { Paths } from '../constants/Constants';

export default function SecondVehicleYearFS({ data, setData, percentage, setPercentage, contactUsNumber, savingsAmount, cityName, setPage }) {
    //vehicle years list
    const currentYear = new Date().getFullYear();
    console.log(currentYear);
    const startYear = 1981;
    const end = currentYear - 23;
    const end1 = currentYear - 24;
    var buttons = [...Array(currentYear - end + 1).keys()].map(x => ((x - currentYear) * -1));
    var options = [...Array(end1 - startYear + 1).keys()].map(x => { return { value: ((x - end1) * -1), text: ((x - end1) * -1) } });


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

    function SecondVehicleYearOnChange(val) {
        setData({ ...data, SecondVehicleYear: val });
        setError(false);
        //setTimeout(() => { setPage(7) }, 200);

        setTimeout(() => { navigate(Paths.vehicle2Make) }, 200);

    }


    function setOption(value) {
        console.log(value);
        setData({ ...data, SecondVehicleYear: value });
        setError(false);
        setTimeout(() => { navigate(Paths.vehicle2Make) }, 200);
    }

    //on next button click event
    function onNextButtonClick() {
        if (!error && data.SecondVehicleYear != null && data.SecondVehicleYear !== undefined && data.SecondVehicleYear !== "") {

            //setTimeout(() => { setPage(7) }, 200);

            setTimeout(() => { navigate(Paths.vehicle2Make) }, 200);

        } else {
            setError(true);
        }
    }

    //previous button click

    function previousButtonOnclick() {
        //setTimeout(() => { setPage(5) }, 200);

        setTimeout(() => { navigate(Paths.addSecondVehicle) }, 200);
    }


    return (
        <div>
            <ProgressDetails percentage={8} savingsAmount={savingsAmount} cityName={cityName} />
            <PrimaryLabel label="What year is your second vehicle?" />

            <div className="section-container">
                <div className="form-section">
                    <div className="options-container">

                        {/* <button className="option-button active-option-button">
                            2018
                        </button> */}
                        {buttons.map(button => {
                            return (
                                <button onClick={(e) => { SecondVehicleYearOnChange(button) }} key={button} className={data.SecondVehicleYear === button ? "option-button active-option-button" : "option-button"}>
                                    {button}
                                </button>
                            )
                        })}

                    </div>
                    {error ? <ErrorText /> : null}
                </div>

            </div>

            <SelectField options={options} option={data.SecondVehicleYear} setOption={setOption} label="Browse previous years" />
            <FormActionContainer previousButtonVisibility={true} previousButtonOnclick={previousButtonOnclick} nextButtonVisibility={true} nextButtonOnclick={onNextButtonClick} />

            <CallUsSection contactUsNumber={contactUsNumber} />
        </div>
    )
}
