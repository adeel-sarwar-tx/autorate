import { Constants } from "../constants/Constants";
export default function Util() {
  return <div></div>;
}

//fetch contact number and savings amount
export async function fetchSettings(setContactNumber, setSavingsAmount) {
  var link = Constants.settings + `?_limit=1`;
  var result = await fetch(link);
  if (result.status === 200) {
    var resultObj = await result.json();
    if (resultObj.length > 0) {
      //set contact number
      if (
        resultObj[0]["ContactNumber"] != null &&
        resultObj[0]["ContactNumber"] !== ""
      ) {
        setContactNumber(resultObj[0]["ContactNumber"]);
      }
      //set savings amount
      if (resultObj[0]["YearlySavings"] != null) {
        setSavingsAmount(resultObj[0]["YearlySavings"]);
      }
    }
  }
}

export async function fetchVehicleMakes(setVehicleMakes) {
  var link = Constants.vehicle_makes;
  var result = await fetch(link);

  if (result.status === 200) {
    var resultObj = await result.json();
    if (resultObj.length > 0) {
      //set vehicle makes

      setVehicleMakes(
        resultObj.map((d) => ({ text: d.VehicleMake, value: d.VehicleMake }))
      );
    }
  }
}

//fetch vehicle models

export async function fetchVehicleModels(year, make, setVehicleModels) {
  var link = Constants.vehicles + `?Year=${year}&Make=${make}`;
  var result = await fetch(link);

  if (result.status === 200) {
    var resultObj = await result.json();
    if (resultObj.length > 0) {
      //set vehicle makes
      setVehicleModels(
        resultObj.map((d) => ({ text: d.Model, value: d.Model }))
      );
    }
  }
}

//submit data to lead prosper

export async function pushDataToLeadProsper(data) {
  console.log("Pushing data to cloud");

  //modify
  var married =
    data.Married === "Yes" ? "married" : data.Married === "No" ? "single" : "";
  var secondDriverMarried =
    data.SecondDriverMarried === "Yes"
      ? "married"
      : data.SecondDriverMarried === "No"
      ? "single"
      : "";
  var thirdDriverMarried =
    data.ThirdDriverMarried === "Yes"
      ? "married"
      : data.ThirdDriverMarried === "No"
      ? "single"
      : "";
  var autoInsure =
    data.AutoInsurancePast30days === "Yes"
      ? "true"
      : data.AutoInsurancePast30days === "No"
      ? "false"
      : "";

  var dui =
    data.DUIpast3years === "Yes"
      ? "true"
      : data.DUIpast3years === "No"
      ? "false"
      : "";

  var secondDriverDui =
    data.SecondDriverDUI3years === "Yes"
      ? "true"
      : data.SecondDriverDUI3years === "No"
      ? "false"
      : "";

  var thirdDriverDui =
    data.ThirdDriverDUI3years === "Yes"
      ? "true"
      : data.ThirdDriverDUI3years === "No"
      ? "false"
      : "";

  var link = Constants.leadProsperPostLink;
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      ...data,
      VehicleYear: data.VehicleYear.toString(),
      SecondVehicleYear: data.SecondVehicleYear.toString(),
      ThirdVehicleYear: data.ThirdVehicleYear.toString(),
      universal_leadid: window.universal_leadid,
      ZipCode: "",
      Married: married,
      SecondDriverMarried: secondDriverMarried,
      ThirdDriverMarried: thirdDriverMarried,
      DUIpast3years: dui,
      SecondDriverDUI3years: secondDriverDui,
      ThirdDriverDUI3years: thirdDriverDui,
      AutoInsurancePast30days: autoInsure,
      IpAddress: window.user_ip,
    }),
  };

  fetch(link, options).then((result) => {
    console.log(result.status);
    if (result.status === 200) {
      result.json().then((resultObj) => {
        const exdays = 3;
        const d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        let expires = "expires=" + d.toUTCString();
        document.cookie = `lpId=${resultObj.id};${expires};path=/;domain=.ratenavigators.com;`;
        document.cookie = `lpLeadId=${resultObj.lead_id};${expires};path=/;domain=.ratenavigators.com;`;
        document.cookie = `lpCode=${resultObj.code};${expires};path=/;domain=.ratenavigators.com;`;
      });
    }
  });

  // //post back
  let formData = new FormData();
  //formData.append('nid', 1343);
  formData.append("transaction_id", data.TransactionID);
  fetch(
    `https://www.yc56dzc.com/?nid=1343&transaction_id=${data.TransactionID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    }
  ).then((result) => {
    /* console.log(result) */
  });

  // if (data.TransactionID !== "" && data.TransactionID != null) {
  //     //post back
  //     let formData = new FormData();
  //     formData.append('transaction_id', data.TransactionID);
  //     var everFlowResult = await fetch(`https://auto.ratenavigators.com/EverflowPostback/`, {
  //         method: "POST",
  //         body: formData
  //     });
  //     var everFlowResultString = await everFlowResult.text();
  //     document.cookie = `everFlowResult=${everFlowResultString};path=/;domain=.ratenavigators.com;`;
  // } else {
  //     document.cookie = `everFlowResult=transaction_id_not_available;path=/;domain=.ratenavigators.com;`;
  // }

  // let formData = new FormData();
  // formData.append('transaction_id', data.TransactionID);
  // fetch(`https://auto.ratenavigators.com/EverflowPostback/`, {
  //     method: "POST",
  //     body: formData
  // });

  //post back
  // fetch(`https://www.yc56dzc.com/?nid=1343&transaction_id=${data.TransactionID}`).then((result) => { console.log(result) });

  //push date to strapi
  try {
    fetch(Constants.leads, options).then(() => {
      console.log("Data stored in strapi");
    });
  } catch (e) {}

  setTimeout(() => {
    window.location.href = `https://auto.ratenavigators.com/click/?sr=${data.sr}&ss=${data.ss}&sub1=${data.sub1}&sub2=${data.sub2}`;
  }, 300);

  //console.log(resultObj);
  //return result;
} //push data to lead prosper

//set auto data cookie
export function prepareAutoDate(data) {
  var autodata = {
    zip: "95014",
    currently_insured: "0",
    current_company: "",
    drivers: [],
    home_ownership: "",
    incidents: [
      {
        driver: 0,
      },
      {
        driver: 0,
      },
      {
        driver: 0,
      },
      {
        driver: 0,
      },
    ],
    vehicles: [],
  };
  //set zipcode

  autodata.zip = data.ZipCode;

  //check insured
  if (data.AutoInsurancePast30days === "Yes") {
    autodata.currently_insured = "1";
    autodata.current_company = data.CurrentInsurer;
  } else {
    autodata.currently_insured = "0";
    autodata.current_company = "";
  }

  //set driver
  if (data.HowManyDrivers === "3") {
    autodata.drivers = [
      {
        birth_date: `${data.DOBYear}-${data.DOBMonth}-${data.DOBDate}`,
        credit_rating: data.CreditScore,
        primary_vehicle: 0,
        sr_22: 0,
      },
      {
        birth_date: `${data.SecondDriverDOBYear}-${data.SecondDriverDOBMonth}-${data.SecondDriverDOBDate}`,
        sr_22: 0,
      },
      {
        birth_date: `${data.ThirdDriverDOBYear}-${data.ThirdDriverDOBMonth}-${data.ThirdDriverDriverDOBDate}`,
        sr_22: 0,
      },
    ];
  } else if (data.HowManyDrivers === "2") {
    autodata.drivers = [
      {
        birth_date: `${data.DOBYear}-${data.DOBMonth}-${data.DOBDate}`,
        credit_rating: data.CreditScore,
        primary_vehicle: 0,
        sr_22: 0,
      },
      {
        birth_date: `${data.SecondDriverDOBYear}-${data.SecondDriverDOBMonth}-${data.SecondDriverDOBDate}`,
        sr_22: 0,
      },
    ];
  } else {
    autodata.drivers = [
      {
        birth_date: `${data.DOBYear}-${data.DOBMonth}-${data.DOBDate}`,
        credit_rating: data.CreditScore,
        primary_vehicle: 0,
        sr_22: 0,
      },
    ];
  }

  //set home ownership

  if (data.OwnOrRentHome === "Own") {
    autodata.home_ownership = "1";
  } else {
    autodata.home_ownership = "0";
  }
  //set vehicles
  if (data.AddThirdVehicle === "yes") {
    autodata.vehicles = [
      {
        primary_driver: 0,
      },
      {
        primary_driver: 0,
      },
      {
        primary_driver: 0,
      },
    ];
  } else if (data.AddSecondVehicle === "Yes") {
    autodata.vehicles = [
      {
        primary_driver: 0,
      },
      {
        primary_driver: 0,
      },
    ];
  } else {
    autodata.vehicles = [
      {
        primary_driver: 0,
      },
    ];
  }

  //set cookie get
  var autodataBase64 = btoa(JSON.stringify(autodata));
  const exdays = 3;
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();

  //set cookie
  document.cookie = `autodata=${autodataBase64};${expires};path=/;domain=.ratenavigators.com;`;
}

//set auto data cookie
export function storeUrlParameters(data, setData) {
  var url = new URL(window.location.href);
  // var c = url.searchParams.get("ss");

  // let searchParams = new URLSearchParams(window.location.href);
  console.log("ss", url.searchParams.get("ss"));
  if (url.searchParams.get("ss") != null) {
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
    //console.log(url.searchParams.get("ss") ?? "", data);
  }
  //  else {
  //     //console.log(data);
  //     setData({ ...data, vehicleYear: vehicleYear });
  // }
}
