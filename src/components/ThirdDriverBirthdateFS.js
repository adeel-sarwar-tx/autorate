
/*

 ** Page number -> 33

 ** Percentage -> 74

 
*/

import React, { useState } from 'react';
import ProgressDetails from './ProgressDetails';
import PrimaryLabel from './PrimaryLabel';
import FormActionContainer from './FormActionContainer';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import ErrorText from './ErrorText';
import CallUsSection from './CallUsSection';

import CustomErrorText from './CustomErrorText'

import { useNavigate } from 'react-router';
import { Paths } from '../constants/Constants';

export default function ThirdDriverBirthdateFS({ data, setData, percentage, setPercentage, contactUsNumber, savingsAmount, cityName, setPage }) {

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

    const [validateError, setValidateError] = useState(false);

    // const startYear = "1920";
    // const endYear = new Date().getFullYear() - 16;

    // const dateOptions = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "29", "30", "31"];

    const dateOptions = [{ text: "Date", value: "" }, { text: "01", value: "01" }, { text: "02", value: "02" }, { text: "03", value: "03" }, { text: "04", value: "04" }, { text: "05", value: "05" }, { text: "06", value: "06" }, { text: "07", value: "07" }, { text: "08", value: "08" }, { text: "09", value: "09" }, { text: "10", value: "10" }, { text: "11", value: "11" }, { text: "12", value: "12" }, { text: "13", value: "13" }, { text: "14", value: "14" }, { text: "15", value: "15" }, { text: "16", value: "16" }, { text: "17", value: "17" }, { text: "18", value: "18" }, { text: "19", value: "19" }, { text: "20", value: "20" }, { text: "21", value: "21" }, { text: "22", value: "22" }, { text: "23", value: "23" }, { text: "24", value: "24" }, { text: "25", value: "25" }, { text: "26", value: "26" }, { text: "27", value: "27" }, { text: "28", value: "28" }, { text: "29", value: "29" }, { text: "30", value: "30" }, { text: "31", value: "31" }];

    const monthOptions = [{ text: "Month", value: "" }, { text: "January", value: "01" }, { text: "February", value: "02" }, { text: "March", value: "03" }, { text: "April", value: "04" }, { text: "May", value: "05" }, { text: "June", value: "06" }, { text: "July", value: "07" }, { text: "August", value: "08" }, { text: "September", value: "09" }, { text: "October", value: "10" }, { text: "November", value: "11" }, { text: "December", value: "12" }]




    function setThirdDriverDOBDate(value) {
        setData({ ...data, ThirdDriverDOBDate: value });
    }

    function setThirdDriverDOBMonth(value) {
        setData({ ...data, ThirdDriverDOBMonth: value });
    }

    function setThirdDriverDOBYear(value) {
        setError(false);
        setValidateError(false);
        const regex = /^[0-9]{0,4}$/;
        if (regex.test(value)) {
            setData({ ...data, ThirdDriverDOBYear: value });
        }
    }

    function validateBirthDate(birthYear) {
        if (birthYear === '') {
            return false;
        }
        var currentYear = new Date().getFullYear();
        var year = parseInt(birthYear);

        if (year < currentYear - 16 && year > currentYear - 100) {
            return true;
        } else {
            //enter valid value
            return false;
        }
    }

    function onPressEnterInYearField(event) {
        if (event.charCode === 13) {
            nextButtonOnclick();
        }
    }

    //previous button click
    function previousButtonOnclick() {
        //setTimeout(() => { setPage(32) }, 200);
        setTimeout(() => { navigate(Paths.driver3DUI) }, 200);
    }

    //next button click
    function nextButtonOnclick() {
        if (data.ThirdDriverDOBDate != null && data.ThirdDriverDOBDate !== "" && data.ThirdDriverDOBDate !== undefined && data.ThirdDriverDOBYear != null && data.ThirdDriverDOBYear !== "" && data.ThirdDriverDOBYear !== undefined && data.ThirdDriverDOBMonth != null && data.ThirdDriverDOBMonth !== "" && data.ThirdDriverDOBMonth !== undefined) {
            if (validateBirthDate(document.querySelector("#third_driver_birth_date_field").value)) {
                setData({ ...data, ThirdDriverBirthdate: `${data.ThirdDriverDOBYear}-${data.ThirdDriverDOBMonth}-${data.ThirdDriverDOBDate}` });


                //setTimeout(() => { setPage(34) }, 200);
                setTimeout(() => { navigate(Paths.ownOrRentHome) }, 200);
            } else {
                //enter valid value

                setValidateError(true);
            }

        } else {
            setError(true);
        }
    }


    return (
        <div>
            <ProgressDetails percentage={72} savingsAmount={savingsAmount} cityName={cityName} />
            <PrimaryLabel label="What is your third driver's birth date?" />

            <div className="section-container">
                <div className="form-section">
                    <div className="options-container">



                        <FormControl sx={{ margin: 0, height: "42px", minWidth: "30%" }} >
                            <Select
                                className="select-field"
                                sx={{ margin: 0, height: "42px", }}
                                value={data.ThirdDriverDOBMonth}
                                onChange={(e) => { setThirdDriverDOBMonth(e.target.value) }}
                                displayEmpty
                                placeholder="Month"
                            >
                                {monthOptions.map((op) => { return (<MenuItem key={op.text + "s"} value={op.value}>{op.text}</MenuItem>) })}
                            </Select>
                        </FormControl>

                        <FormControl sx={{ margin: 0, height: "42px", minWidth: "30%" }} >
                            <Select
                                className="select-field"
                                sx={{ margin: 0, height: "42px", }}
                                value={data.ThirdDriverDOBDate}
                                onChange={(e) => { setThirdDriverDOBDate(e.target.value) }}
                                placeholder="Date"
                                displayEmpty
                            >
                                {dateOptions.map((op) => { return (<MenuItem key={op.value + "s"} value={op.value}>{op.text}</MenuItem>) })}
                            </Select>
                        </FormControl>

                        <input placeholder="Year" className="input-field" type="text" value={data.ThirdDriverDOBYear} onChange={(e) => { setThirdDriverDOBYear(e.target.value) }} style={{ width: "30%", textAlign: "left", marginBottom: 0 }} id="third_driver_birth_date_field" onKeyPress={(e) => { onPressEnterInYearField(e) }} />

                    </div>
                    {error ? <ErrorText /> : null}
                    {validateError ? <CustomErrorText text="Enter valid year" /> : null}
                </div>

            </div>

            <FormActionContainer previousButtonVisibility={true} previousButtonOnclick={previousButtonOnclick} nextButtonVisibility={true} nextButtonOnclick={nextButtonOnclick} />

            <CallUsSection contactUsNumber={contactUsNumber} />
        </div>
    )
}

