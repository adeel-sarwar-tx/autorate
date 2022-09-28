/* 

 ** Page number -> 10

 ** Percentage -> 18

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

export default function ThirdVehicleYearFS({ data, setData, percentage, setPercentage, contactUsNumber, savingsAmount, cityName, setPage }) {
    //vehicle years list
    const currentYear = new Date().getFullYear();
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

    function thirdVehicleYearOnChange(val) {

        setData({ ...data, ThirdVehicleYear: val });
        setError(false);
        //setTimeout(() => { setPage(11) }, 200);
        setTimeout(() => { navigate(Paths.vehicle3Make) }, 200);
    }


    function setOption(value) {

        setData({ ...data, ThirdVehicleYear: value });
        setError(false);
        setTimeout(() => { navigate(Paths.vehicle3Make) }, 200);
    }

    //on next button click event
    function onNextButtonClick() {
        if (!error && data.ThirdVehicleYear != null && data.ThirdVehicleYear !== undefined && data.ThirdVehicleYear !== "") {



            //setTimeout(() => { setPage(11) }, 200);
            setTimeout(() => { navigate(Paths.vehicle3Make) }, 200);
        } else {
            setError(true);
        }
    }

    //previous button click

    function previousButtonOnclick() {

        //setTimeout(() => { setPage(9) }, 200);
        setTimeout(() => { navigate(Paths.addThirdVehicle) }, 200);
    }


    return (
        <div>
            <ProgressDetails percentage={18} savingsAmount={savingsAmount} cityName={cityName} />
            <PrimaryLabel label="What year is your third vehicle?" />

            <div className="section-container">
                <div className="form-section">
                    <div className="options-container">

                        {/* <button className="option-button active-option-button">
                            2018
                        </button> */}
                        {buttons.map(button => {
                            return (
                                <button onClick={(e) => { thirdVehicleYearOnChange(button) }} key={button} className={data.ThirdVehicleYear === button ? "option-button active-option-button" : "option-button"}>
                                    {button}
                                </button>
                            )
                        })}

                    </div>
                    {error ? <ErrorText /> : null}
                </div>

            </div>

            <SelectField options={options} option={data.ThirdVehicleYear} setOption={setOption} label="Browse previous years" />
            <FormActionContainer previousButtonVisibility={true} previousButtonOnclick={previousButtonOnclick} nextButtonVisibility={true} nextButtonOnclick={onNextButtonClick} />

            <CallUsSection contactUsNumber={contactUsNumber} />
        </div>
    )
}
