/* 

 ** Page number -> 2

 ** Percentage -> 0

*/

import React, { useState } from "react";
import ProgressDetails from "./ProgressDetails";
import PrimaryLabel from "./PrimaryLabel";
import FormActionContainer from "./FormActionContainer";
import SelectField from "./SelectField";
import ErrorText from "./ErrorText";
import CallUsSection from "./CallUsSection";

import { useNavigate } from "react-router";
import { Paths } from "../constants/Constants";

//import { storeUrlParameters } from './Util';

export default function VehicialeYearFormSection({
  data,
  setData,
  percentage,
  setPercentage,
  contactUsNumber,
  savingsAmount,
  cityName,
  setPage,
}) {
  //vehicle years list
  const currentYear = new Date().getFullYear();

  const startYear = 1981;
  const end = currentYear - 23;
  const end1 = currentYear - 24;
  var buttons = [...Array(currentYear - end + 1).keys()].map(
    (x) => (x - currentYear) * -1
  );
  var options = [...Array(end1 - startYear + 1).keys()].map((x) => {
    return { value: (x - end1) * -1, text: (x - end1) * -1 };
  });

  const [error, setError] = useState(false);

  let navigate = useNavigate();

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

  function vehicleYearOnChange(val) {
    //storeUrlParameters(data, setData, val);

    var url = new URL(window.location.href);
    if (url.searchParams.get("ss") != null) {
      // console.log("ss", url.searchParams.get("ss"));

      setData({
        ...data,
        ss: url.searchParams.get("ss") ?? "",
        sr: url.searchParams.get("sr") ?? "",
        src: url.searchParams.get("src") ?? "",
        sub1: url.searchParams.get("sub1") ?? "",
        sub2: url.searchParams.get("sub2") ?? "",
        sub3: url.searchParams.get("sub3") ?? "",
        sub4: url.searchParams.get("sub4") ?? "",
        sub5: url.searchParams.get("sub5") ?? "",
        TransactionID: url.searchParams.get("ss") ?? "",
        aff: url.searchParams.get("aff") ?? "",
        lp_subid1: url.searchParams.get("aff") ?? "",
        lp_subid2: url.searchParams.get("sub1") ?? "",
        VehicleYear: val,
      });
    } else {
      setData({ ...data, VehicleYear: val });
    }

    setError(false);
    //setTimeout(() => { /* setPage(3) */ history("/sform/vehicle-1-make") }, 200);
    setTimeout(() => {
      navigate(Paths.vehicle1Make);
    }, 200);
  }

  function setOption(value) {
    setData({ ...data, VehicleYear: value });
    setError(false);
    setTimeout(() => {
      navigate(Paths.vehicle1Make);
    }, 200);
  }

  //on next button click event
  function onNextButtonClick() {
    if (
      !error &&
      data.VehicleYear != null &&
      data.VehicleYear !== undefined &&
      data.VehicleYear !== ""
    ) {
      //storeUrlParameters(data, setData);
      //setTimeout(() => { /*setPage(3)*/  history("/sform/vehicle-1-make") }, 200);
      var url = new URL(window.location.href);
      if (url.searchParams.get("ss") != null) {
        console.log("ss", url.searchParams.get("ss"));

        setData({
          ...data,
          ss: url.searchParams.get("ss") ?? "",
          sr: url.searchParams.get("sr") ?? "",
          src: url.searchParams.get("src") ?? "",
          sub1: url.searchParams.get("sub1") ?? "",
          sub2: url.searchParams.get("sub2") ?? "",
          sub3: url.searchParams.get("sub3") ?? "",
          sub4: url.searchParams.get("sub4") ?? "",
          sub5: url.searchParams.get("sub5") ?? "",
          TransactionID: url.searchParams.get("ss") ?? "",
          aff: url.searchParams.get("aff") ?? "",
          lp_subid1: url.searchParams.get("aff") ?? "",
          lp_subid2: url.searchParams.get("sub1") ?? "",
        });
      }
      setTimeout(() => {
        navigate(Paths.vehicle1Make);
      }, 200);
    } else {
      setError(true);
    }
  }

  //storeUrlParameters(data, setData)

  return (
    <div>
      <ProgressDetails
        percentage={0}
        savingsAmount={savingsAmount}
        cityName={cityName}
      />
      <PrimaryLabel label="What is your vehicle year?" />

      <div className="section-container">
        <div className="form-section">
          <div className="options-container">
            {/* <button className="option-button active-option-button">
                            201
                        </button> */}
            {buttons.map((button) => {
              return (
                <button
                  onClick={(e) => {
                    vehicleYearOnChange(button);
                  }}
                  key={button}
                  className={
                    data.VehicleYear === button
                      ? "option-button active-option-button"
                      : "option-button"
                  }
                >
                  {button}
                </button>
              );
            })}
          </div>
          {error ? <ErrorText /> : null}
        </div>
      </div>

      <SelectField
        options={options}
        option={data.VehicleYear}
        setOption={setOption}
        label="Browse previous years"
      />
      <FormActionContainer
        previousButtonVisibility={false}
        nextButtonVisibility={true}
        nextButtonOnclick={onNextButtonClick}
      />

      <CallUsSection contactUsNumber={contactUsNumber} />
    </div>
  );
}
