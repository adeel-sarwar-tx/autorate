/* 

 ** Page number -> 14

 ** Percentage -> 26

*/


import React, { useState } from 'react';
import ProgressDetails from './ProgressDetails';
import PrimaryLabel from './PrimaryLabel';
import FormActionContainer from './FormActionContainer';

import { useNavigate } from 'react-router';
import { Paths } from '../constants/Constants';

import ErrorText from './ErrorText';
import CallUsSection from './CallUsSection';

export default function CurrentInsurerFS({ data, setData, percentage, setPercentage, contactUsNumber, savingsAmount, cityName, setPage }) {


    let navigate = useNavigate();
    if (data.VehicleYear === "") {
        navigate(Paths.vehicle1Year);
    }

    //error
    const [error, setError] = useState(false);


    React.useEffect(() => {
        //scroll to top
        const progressContainer = document.querySelector(".primary-label-container");
        if (progressContainer !== null) {
            setTimeout(() => { progressContainer.scrollIntoViewIfNeeded(); }, 300);
        }
    });
    //set CurrentInsurer
    function setCurrentInsurer(value) {
        setData({ ...data, CurrentInsurer: value });
        setError(false);

        //setTimeout(() => { setPage(15) }, 200);
        setTimeout(() => { navigate(Paths.driversCount) }, 200);
    }



    //previous button click
    function previousButtonOnclick() {

        //setTimeout(() => { setPage(13) }, 200);
        setTimeout(() => { navigate(Paths.autoInsurance) }, 200);

    }

    //next button click
    function nextButtonOnclick() {
        if (data.CurrentInsurer != null && data.CurrentInsurer !== "" && data.CurrentInsurer !== undefined) {


            //setTimeout(() => { setPage(15) }, 200);
            setTimeout(() => { navigate(Paths.driversCount) }, 200);

        } else {
            setError(true);
        }
    }


    return (
        <div>
            <ProgressDetails percentage={24} savingsAmount={savingsAmount} cityName={cityName} />
            <PrimaryLabel label="Who is your current insurer?" />

            <div className="section-container">
                <div className="form-section">
                    <div className="options-container">

                        {/* <button className="option-button active-option-button">
                            2018
                        </button> */}

                        <button style={{ minWidth: "46%" }} className={data.CurrentInsurer === "AAA / Auto Club" ? "option-button active-option-button" : "option-button"} onClick={() => { setCurrentInsurer("AAA / Auto Club") }} >
                            AAA / Auto Club
                        </button>

                        <button style={{ minWidth: "46%" }} className={data.CurrentInsurer === "Allstate" ? "option-button active-option-button" : "option-button"} onClick={() => { setCurrentInsurer("Allstate") }} >
                            Allstate
                        </button>

                        <button style={{ minWidth: "46%" }} className={data.CurrentInsurer === "Farm Bureau" ? "option-button active-option-button" : "option-button"} onClick={() => { setCurrentInsurer("Farm Bureau") }} >
                            Farm Bureau
                        </button>

                        <button style={{ minWidth: "46%" }} className={data.CurrentInsurer === "Farmers" ? "option-button active-option-button" : "option-button"} onClick={() => { setCurrentInsurer("Farmers") }} >
                            Farmers
                        </button>

                        <button style={{ minWidth: "46%" }} className={data.CurrentInsurer === "GEICO" ? "option-button active-option-button" : "option-button"} onClick={() => { setCurrentInsurer("GEICO") }} >
                            GEICO
                        </button>

                        <button style={{ minWidth: "46%" }} className={data.CurrentInsurer === "Liberty Mutual" ? "option-button active-option-button" : "option-button"} onClick={() => { setCurrentInsurer("Liberty Mutual") }} >
                            Liberty Mutual
                        </button>

                        <button style={{ minWidth: "46%" }} className={data.CurrentInsurer === "Nationwide" ? "option-button active-option-button" : "option-button"} onClick={() => { setCurrentInsurer("Nationwide") }} >
                            Nationwide
                        </button>

                        <button style={{ minWidth: "46%" }} className={data.CurrentInsurer === "Progressive" ? "option-button active-option-button" : "option-button"} onClick={() => { setCurrentInsurer("Progressive") }} >
                            Progressive
                        </button>

                        <button style={{ minWidth: "46%" }} className={data.CurrentInsurer === "Safeco" ? "option-button active-option-button" : "option-button"} onClick={() => { setCurrentInsurer("Safeco") }} >
                            Safeco
                        </button>

                        <button style={{ minWidth: "46%" }} className={data.CurrentInsurer === "State Farm" ? "option-button active-option-button" : "option-button"} onClick={() => { setCurrentInsurer("State Farm") }} >
                            State Farm
                        </button>

                        <button style={{ minWidth: "46%" }} className={data.CurrentInsurer === "The Hartford" ? "option-button active-option-button" : "option-button"} onClick={() => { setCurrentInsurer("The Hartford") }} >
                            The Hartford
                        </button>

                        <button style={{ minWidth: "46%" }} className={data.CurrentInsurer === "USAA" ? "option-button active-option-button" : "option-button"} onClick={() => { setCurrentInsurer("USAA") }} >
                            USAA
                        </button>

                        <button style={{ minWidth: "46%" }} className={data.CurrentInsurer === "Other" ? "option-button active-option-button" : "option-button"} onClick={() => { setCurrentInsurer("Other") }} >
                            Other
                        </button>

                    </div>
                    {error ? <ErrorText /> : null}
                </div>

            </div>

            <FormActionContainer previousButtonVisibility={true} previousButtonOnclick={previousButtonOnclick} nextButtonVisibility={true} nextButtonOnclick={nextButtonOnclick} />

            <CallUsSection contactUsNumber={contactUsNumber} />
        </div>
    )
}
