import React, { useState } from "react";
import bgImage from "../images/hero_bg.jpg";

import DoneIcon from "@mui/icons-material/Done";
import Logos from "./Logos";

import { useNavigate } from "react-router";
import { Paths } from "../constants/Constants";

export default function ZipcodeFormSection({
  data,
  setData,
  setPage,
  cityName,
  contactUsNumber,
}) {
  const [error, setError] = useState(false);

  let navigate = useNavigate();

  function zipCodeOnChange(event) {
    var value = event.target.value;
    const regex = /^[0-9]{0,8}$/;
    if (regex.test(value)) {
      setError(false);
      setData({ ...data, ZipCode: value });
    } else {
      setError(true);
    }
  }

  function onClickContinueButton(event) {
    if (!error) {
      const regex = /^[0-9]{5,8}$/;
      if (regex.test(data.ZipCode)) {
        //setTimeout(() => { setPage(2); }, 200);

        setTimeout(() => {
          navigate(Paths.vehicle1Year + window.location.search);
        }, 200);
      } else {
        setError(true);
      }
    }
  }

  return (
    <>
      <div
        style={{ background: `url(${bgImage})` }}
        className="zipcode-form-section-container"
      >
        <div className="zipcode-form-section-title">
          Let’s drop your rate in {cityName} today!
        </div>

        <div className="zipcode-form">
          <div className="zipcode-form-label">What is your ZIP Code?</div>
          <input
            className="zipcode-form-input"
            placeholder="Enter Your Zip"
            type="text"
            value={data.ZipCode}
            onChange={zipCodeOnChange}
          />
          {error ? (
            <>
              <span className="zipcode-error">
                Please enter a 5 digit zip code
              </span>{" "}
              <br />
            </>
          ) : null}
          <button
            className="zipcode-form-button"
            onClick={(e) => {
              onClickContinueButton(e);
            }}
          >
            {" "}
            <DoneIcon /> &nbsp; Continue
          </button>
          <div className="zipcode-form-contact-us-section">
            Speak to One of Our Talented Live Agents Right Now <br />
            Call <a href={"tel:" + contactUsNumber}>(844) 511-2363</a>&nbsp;
            Save Money Today
          </div>
        </div>
      </div>
      <Logos />
    </>
  );
}
