import "./App.css";
import "./styles/Header.css";
import "./styles/Footer.css";
import "./styles/ProgressDetails.css";
import "./styles/CallUsSection.css";
import "./styles/Logos.css";
import "./styles/PrimaryLabel.css";
import "./styles/Form.css";
import "./styles/FormActionContainer.css";
import "./styles/ZipcodeFormSection.css";
import "./styles/SelectField.css";
import "./styles/ErrorText.css";

import React, { useState, useEffect } from "react";

import Paths from "./components/Paths";

import Header from "./components/Header";
import Footer from "./components/Footer";
//import PageRoute from './components/PageRoute';
import Data from "./components/Data";

import { fetchSettings } from "./components/Util";

function App() {
  const [page, setPage] = useState(1);
  const [percentage, setPercentage] = useState(0);
  const [contactUsNumber, setContactUsNumber] = useState("-");
  const [savingsAmount, setSavingsAmount] = useState("0");
  const [cityName, setCityName] = useState("your area");

  const [data, setData] = useState(Data);
  //console.log(page, data);

  //scroll to top
  // const progressContainer = document.querySelector(".primary-label-container");
  // if (progressContainer !== null) {
  //   progressContainer.scrollIntoViewIfNeeded()
  // }

  useEffect(() => {
    console.log("...");
    //fetch contact number and savings amount from local db
    fetchSettings(setContactUsNumber, setSavingsAmount);

    window.geoip2.city(
      (s) => {
        setCityName(s.city.names.en);

        if (data.ZipCode === "" && data.IpAddress === "") {
          if (s.traits.ip_address !== null) {
            setData({
              ...data,
              ZipCode: s.postal.code,
              IpAddress: s.traits.ip_address,
            });
          } else {
            setData({ ...data, ZipCode: s.postal.code });
          }
        } else if (data.IpAddress === "") {
          if (s.traits.ip_address !== null) {
            setData({ ...data, IpAddress: s.traits.ip_address });
          }
        } else if (data.ZipCode === "") {
          setData({ ...data, ZipCode: s.postal.code });
        }
      },
      (e) => {
        console.log(e);
      }
    );
  });
  //
  return (
    <>
      <Header contactUsNumber={contactUsNumber} />

      <Paths
        page={page}
        setPage={setPage}
        data={data}
        setData={setData}
        percentage={percentage}
        setPercentage={setPercentage}
        contactUsNumber={contactUsNumber}
        savingsAmount={savingsAmount}
        cityName={cityName}
      />
      <Footer contactUsNumber={contactUsNumber} />
    </>
  );
}

export default App;
