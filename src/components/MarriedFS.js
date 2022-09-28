/* 

 ** Page number -> 17

 ** Percentage -> 33

*/

import React, { useState } from "react";
import ProgressDetails from "./ProgressDetails";
import PrimaryLabel from "./PrimaryLabel";
import FormActionContainer from "./FormActionContainer";

import { useNavigate } from "react-router";
import { Paths } from "../constants/Constants";

import ErrorText from "./ErrorText";
import CallUsSection from "./CallUsSection";

export default function MarriedFS({
  data,
  setData,
  percentage,
  setPercentage,
  contactUsNumber,
  savingsAmount,
  cityName,
  setPage,
}) {
  let navigate = useNavigate();
  if (data.VehicleYear === "") {
    navigate(Paths.vehicle1Year);
  }

  //error
  const [error, setError] = useState(false);

  React.useEffect(() => {
    //scroll to top
    const progressContainer = document.querySelector(
      ".primary-label-container"
    );
    if (progressContainer !== null) {
      setTimeout(() => {
        progressContainer.scrollIntoViewIfNeeded();
      }, 300);
    }
  });

  //set HowManyDrivers
  function setMarried(value) {
    setData({ ...data, Married: value });
    setError(false);

    //setTimeout(() => { setPage(18) }, 200);

    setTimeout(() => {
      navigate(Paths.creditScore);
    }, 200);
  }

  //previous button click
  function previousButtonOnclick() {
    //setTimeout(() => { setPage(16) }, 200);
    setTimeout(() => {
      navigate(Paths.driver1Gender);
    }, 200);
  }

  //next button click
  function nextButtonOnclick() {
    if (
      data.Married != null &&
      data.Married !== "" &&
      data.Married !== undefined
    ) {
      //setTimeout(() => { setPage(18) }, 200);
      setTimeout(() => {
        navigate(Paths.creditScore);
      }, 200);
    } else {
      setError(true);
    }
  }

  return (
    <div>
      <ProgressDetails
        percentage={33}
        savingsAmount={savingsAmount}
        cityName={cityName}
      />
      <PrimaryLabel label="Are you married?" />

      <div className="section-container">
        <div className="form-section">
          <div className="options-container">
            {/* <button className="option-button active-option-button">
                            2018
                        </button> */}

            <button
              style={{ minWidth: "46%" }}
              className={
                data.Married === "Yes"
                  ? "option-button active-option-button"
                  : "option-button"
              }
              onClick={() => {
                setMarried("Yes");
              }}
            >
              Yes
            </button>

            <button
              style={{ minWidth: "46%" }}
              className={
                data.Married === "No"
                  ? "option-button active-option-button"
                  : "option-button"
              }
              onClick={() => {
                setMarried("No");
              }}
            >
              No
            </button>
          </div>
          {error ? <ErrorText /> : null}
        </div>
      </div>

      <FormActionContainer
        previousButtonVisibility={true}
        previousButtonOnclick={previousButtonOnclick}
        nextButtonVisibility={true}
        nextButtonOnclick={nextButtonOnclick}
      />

      <CallUsSection contactUsNumber={contactUsNumber} />
    </div>
  );
}
