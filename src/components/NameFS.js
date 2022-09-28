/*

 ** Page number -> 39

 ** Percentage -> 86


*/
import React, { useState } from 'react';
import ProgressDetails from './ProgressDetails';
import PrimaryLabel from './PrimaryLabel';
import FormActionContainer from './FormActionContainer';


import ErrorText from './ErrorText';
import CallUsSection from './CallUsSection';

import { useNavigate } from 'react-router';
import { Paths } from '../constants/Constants';

import CustomErrorText from './CustomErrorText'

export default function NameFS({ data, setData, percentage, setPercentage, contactUsNumber, savingsAmount, cityName, setPage }) {


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
    const [error1, setError1] = useState(false);

    const [error2, setError2] = useState(false);

    const [error3, setError3] = useState(false);

    const [validateError1, setValidateError1] = useState(false);

    const [validateError2, setValidateError2] = useState(false);

    const [validateError3, setValidateError3] = useState(false);


    function setFirstName(value) {
        setError1(false);

        const regex = /^[a-zA-Z+ ]{0,20}$/;
        if (regex.test(value)) {
            setValidateError1(false);
            setData({ ...data, FirstName: value });
        } else {
            setValidateError1(true);
        }
    }

    function setLastName(value) {
        setError1(false);
        const regex = /^[a-zA-Z ]{0,20}$/;
        if (regex.test(value)) {
            setValidateError1(false);
            setData({ ...data, LastName: value });
        }
        else {
            setValidateError1(true);
        }
    }

    //second driver
    function setSecondDriverFirstName(value) {
        setError2(false);
        const regex = /^[a-zA-Z+ ]{0,20}$/;
        if (regex.test(value)) {
            setValidateError2(false);
            setData({ ...data, SecondDriverFirstName: value });
        } else {
            setValidateError2(true);
        }
    }

    function setSecondDriverLastName(value) {
        setError2(false);
        const regex = /^[a-zA-Z ]{0,20}$/;
        if (regex.test(value)) {
            setValidateError2(false);
            setData({ ...data, SecondDriverLastName: value });
        } else {
            setValidateError2(true);
        }
    }




    //third driver

    function setThirdDriverFirstName(value) {
        setError3(false);
        const regex = /^[a-zA-Z+ ]{0,20}$/;
        if (regex.test(value)) {
            setValidateError3(false);
            setData({ ...data, ThirdDriverFirstName: value });
        } else {
            setValidateError3(true);
        }
    }

    function setThirdDriverLastName(value) {
        setError3(false);
        const regex = /^[a-zA-Z ]{0,20}$/;
        if (regex.test(value)) {
            setValidateError3(false);
            setData({ ...data, ThirdDriverLastName: value });
        } else {
            setValidateError3(true);
        }
    }

    //enter key press event
    function onPressEnterInDriver1FirstName(event) {
        if (event.charCode === 13) {
            document.querySelector("#driver_1_last_name").focus();
        }
    }

    function onPressEnterInDriver2FirstName(event) {
        if (event.charCode === 13) {
            document.querySelector("#driver_2_last_name").focus();
        }
    }

    function onPressEnterInDriver3FirstName(event) {
        if (event.charCode === 13) {
            document.querySelector("#driver_3_last_name").focus();
        }
    }

    function onPressEnterInDriver1LastName(event) {
        if (event.charCode === 13) {
            if (data.HowManyDrivers === "2" || data.HowManyDrivers === "3") {
                document.querySelector("#driver_2_first_name").focus();
            } else if (data.HowManyDrivers === "1") {
                nextButtonOnclick();
            }
        }
    }

    function onPressEnterInDriver2LastName(event) {
        if (event.charCode === 13) {
            if (data.HowManyDrivers === "3") {
                document.querySelector("#driver_3_first_name").focus();
            } else {
                nextButtonOnclick();
            }
        }
    }

    function onPressEnterInDriver3LastName(event) {
        if (event.charCode === 13) {
            nextButtonOnclick();
        }
    }

    //previous button click
    function previousButtonOnclick() {
        //setTimeout(() => { setPage(38) }, 200);
        setTimeout(() => { navigate(Paths.driver1BirthDate) }, 200);
    }

    //next button click
    function nextButtonOnclick() {
        //three driver
        if (data.HowManyDrivers === "3") {
            if (data.FirstName != null && data.FirstName !== "" && data.FirstName !== undefined && data.LastName != null && data.LastName !== "" && data.LastName !== undefined && data.SecondDriverFirstName != null && data.SecondDriverFirstName !== "" && data.SecondDriverFirstName !== undefined && data.SecondDriverLastName != null && data.SecondDriverLastName !== "" && data.SecondDriverLastName !== undefined && data.ThirdDriverFirstName != null && data.ThirdDriverFirstName !== "" && data.ThirdDriverFirstName !== undefined && data.ThirdDriverLastName != null && data.ThirdDriverLastName !== "" && data.ThirdDriverLastName !== undefined && data.FirstName.length > 1 && data.LastName.length > 1 && data.SecondDriverFirstName.length > 1 && data.SecondDriverLastName.length > 1 && data.ThirdDriverFirstName.length > 1 && data.ThirdDriverLastName.length > 1) {



                //setTimeout(() => { setPage(42) }, 200);
                setTimeout(() => { navigate(Paths.address) }, 200);

            } else {


                if (data.FirstName === "" || data.LastName === "" || data.FirstName.length < 2 || data.LastName.length < 2) {
                    setError1(true);
                }

                if (data.SecondDriverFirstName === "" || data.SecondDriverLastName === "" || data.SecondDriverFirstName.length < 2 || data.SecondDriverLastName.length < 2) {
                    setError2(true);
                }

                if (data.ThirdDriverFirstName === "" || data.ThirdDriverLastName === "" || data.ThirdDriverFirstName.length < 2 || data.ThirdDriverLastName.length < 2) {
                    setError3(true);
                }
            }
        }


        //two driver
        else if (data.HowManyDrivers === "2") {
            if (data.FirstName != null && data.FirstName !== "" && data.FirstName !== undefined && data.LastName != null && data.LastName !== "" && data.LastName !== undefined && data.SecondDriverFirstName != null && data.SecondDriverFirstName !== "" && data.SecondDriverFirstName !== undefined && data.SecondDriverLastName != null && data.SecondDriverLastName !== "" && data.SecondDriverLastName !== undefined && data.FirstName.length > 1 && data.LastName.length > 1 && data.SecondDriverFirstName.length > 1 && data.SecondDriverLastName.length > 1) {



                //setTimeout(() => { setPage(42) }, 200);
                setTimeout(() => { navigate(Paths.address) }, 200);

            } else {
                if (data.FirstName === "" || data.LastName === "" || data.FirstName.length < 2 || data.LastName.length < 2) {
                    setError1(true);
                }

                if (data.SecondDriverFirstName === "" || data.SecondDriverLastName === "" || data.SecondDriverFirstName.length < 2 || data.SecondDriverLastName.length < 2) {
                    setError2(true);
                }


            }
        }//one driver
        else {
            if (data.FirstName != null && data.FirstName !== "" && data.FirstName !== undefined && data.LastName != null && data.LastName !== "" && data.LastName !== undefined && data.FirstName.length > 1 && data.LastName.length > 1) {



                //setTimeout(() => { setPage(42) }, 200);
                setTimeout(() => { navigate(Paths.address) }, 200);

            } else {
                if (data.FirstName === "" || data.LastName === "" || data.FirstName.length < 2 || data.LastName.length < 2) {
                    setError1(true);
                }


            }
        }

    }
    return (
        <div>
            <ProgressDetails percentage={86} savingsAmount={savingsAmount} cityName={cityName} />
            <PrimaryLabel label="What is your name?" />

            <div className="section-container">
                <div className="form-section">
                    <div className="options-container">





                        <input placeholder="First Name" className="input-field" type="text" value={data.FirstName} onChange={(e) => { setFirstName(e.target.value) }} style={{ width: "46%", textAlign: "left" }} id="driver_1_first_name" onKeyPress={(e) => { onPressEnterInDriver1FirstName(e) }} />

                        <input placeholder="Last Name" className="input-field" type="text" value={data.LastName} onChange={(e) => { setLastName(e.target.value) }} style={{ width: "46%", textAlign: "left" }} id="driver_1_last_name" onKeyPress={(e) => { onPressEnterInDriver1LastName(e) }} />

                    </div>
                    {error1 ? <ErrorText /> : null}
                    {validateError1 ? <CustomErrorText text="Invalid value" /> : null}
                </div>

            </div>
            {/* second driver name */}
            {data.HowManyDrivers === "2" || data.HowManyDrivers === "3" ? (<>
                <PrimaryLabel label="What is your second driver's name?" />

                <div className="section-container">
                    <div className="form-section">
                        <div className="options-container">





                            <input placeholder="First Name" className="input-field" type="text" value={data.SecondDriverFirstName} onChange={(e) => { setSecondDriverFirstName(e.target.value) }} style={{ width: "46%", textAlign: "left" }} id="driver_2_first_name" onKeyPress={(e) => { onPressEnterInDriver2FirstName(e) }} />

                            <input placeholder="Last Name" className="input-field" type="text" value={data.SecondDriverLastName} onChange={(e) => { setSecondDriverLastName(e.target.value) }} style={{ width: "46%", textAlign: "left" }}
                                id="driver_2_last_name" onKeyPress={(e) => { onPressEnterInDriver2LastName(e) }} />

                        </div>
                        {error2 ? <ErrorText /> : null}
                        {validateError2 ? <CustomErrorText text="Invalid value" /> : null}
                    </div>

                </div>
            </>) : null}

            {/* third driver name */}

            {data.HowManyDrivers === "3" ? (<>
                <PrimaryLabel label="What is your third driver's name?" />

                <div className="section-container">
                    <div className="form-section">
                        <div className="options-container">





                            <input placeholder="First Name" className="input-field" type="text" value={data.ThirdDriverFirstName} onChange={(e) => { setThirdDriverFirstName(e.target.value) }} style={{ width: "46%", textAlign: "left" }}
                                id="driver_3_first_name" onKeyPress={(e) => { onPressEnterInDriver3FirstName(e) }}
                            />

                            <input placeholder="Last Name" className="input-field" type="text" value={data.ThirdDriverLastName} onChange={(e) => { setThirdDriverLastName(e.target.value) }} style={{ width: "46%", textAlign: "left" }}
                                id="driver_3_last_name" onKeyPress={(e) => { onPressEnterInDriver3LastName(e) }}
                            />

                        </div>
                        {error3 ? <ErrorText /> : null}
                        {validateError3 ? <CustomErrorText text="Invalid value" /> : null}
                    </div>

                </div>
            </>) : null}



            <FormActionContainer previousButtonVisibility={true} previousButtonOnclick={previousButtonOnclick} nextButtonVisibility={true} nextButtonOnclick={nextButtonOnclick} />

            <CallUsSection contactUsNumber={contactUsNumber} />
        </div>
    )
}

