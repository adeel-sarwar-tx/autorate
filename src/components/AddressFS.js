/*

 ** Page number -> 42

 ** Percentage -> 92


*/

import React, { useState } from "react";
import ProgressDetails from "./ProgressDetails";
import PrimaryLabel from "./PrimaryLabel";
import FormActionContainer from "./FormActionContainer";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import PlacesAutocomplete, {
  geocodeByPlaceId,
} from "react-places-autocomplete";

import ErrorText from "./ErrorText";
import CallUsSection from "./CallUsSection";

import { useNavigate } from "react-router";
import { Paths } from "../constants/Constants";

export default function AddressFS({
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

  const [hiddenFieldsVisibility, setHiddenFieldsVisibility] =
    React.useState(true);
  /* 
        function setAddress(value) {
            // const regex = /^[a-zA-Z+ ]{0,20}$/;
            // if (regex.test(value)) {
    
            // }
            setError(false);
            setData({ ...data, Address: value });
        } */

  const state_list = [
    {
      name: "Alabama",
      abbreviation: "AL",
    },
    {
      name: "Alaska",
      abbreviation: "AK",
    },
    {
      name: "American Samoa",
      abbreviation: "AS",
    },
    {
      name: "Arizona",
      abbreviation: "AZ",
    },
    {
      name: "Arkansas",
      abbreviation: "AR",
    },
    {
      name: "California",
      abbreviation: "CA",
    },
    {
      name: "Colorado",
      abbreviation: "CO",
    },
    {
      name: "Connecticut",
      abbreviation: "CT",
    },
    {
      name: "Delaware",
      abbreviation: "DE",
    },
    {
      name: "District Of Columbia",
      abbreviation: "DC",
    },
    {
      name: "Federated States Of Micronesia",
      abbreviation: "FM",
    },
    {
      name: "Florida",
      abbreviation: "FL",
    },
    {
      name: "Georgia",
      abbreviation: "GA",
    },
    {
      name: "Guam",
      abbreviation: "GU",
    },
    {
      name: "Hawaii",
      abbreviation: "HI",
    },
    {
      name: "Idaho",
      abbreviation: "ID",
    },
    {
      name: "Illinois",
      abbreviation: "IL",
    },
    {
      name: "Indiana",
      abbreviation: "IN",
    },
    {
      name: "Iowa",
      abbreviation: "IA",
    },
    {
      name: "Kansas",
      abbreviation: "KS",
    },
    {
      name: "Kentucky",
      abbreviation: "KY",
    },
    {
      name: "Louisiana",
      abbreviation: "LA",
    },
    {
      name: "Maine",
      abbreviation: "ME",
    },
    {
      name: "Marshall Islands",
      abbreviation: "MH",
    },
    {
      name: "Maryland",
      abbreviation: "MD",
    },
    {
      name: "Massachusetts",
      abbreviation: "MA",
    },
    {
      name: "Michigan",
      abbreviation: "MI",
    },
    {
      name: "Minnesota",
      abbreviation: "MN",
    },
    {
      name: "Mississippi",
      abbreviation: "MS",
    },
    {
      name: "Missouri",
      abbreviation: "MO",
    },
    {
      name: "Montana",
      abbreviation: "MT",
    },
    {
      name: "Nebraska",
      abbreviation: "NE",
    },
    {
      name: "Nevada",
      abbreviation: "NV",
    },
    {
      name: "New Hampshire",
      abbreviation: "NH",
    },
    {
      name: "New Jersey",
      abbreviation: "NJ",
    },
    {
      name: "New Mexico",
      abbreviation: "NM",
    },
    {
      name: "New York",
      abbreviation: "NY",
    },
    {
      name: "North Carolina",
      abbreviation: "NC",
    },
    {
      name: "North Dakota",
      abbreviation: "ND",
    },
    {
      name: "Northern Mariana Islands",
      abbreviation: "MP",
    },
    {
      name: "Ohio",
      abbreviation: "OH",
    },
    {
      name: "Oklahoma",
      abbreviation: "OK",
    },
    {
      name: "Oregon",
      abbreviation: "OR",
    },
    {
      name: "Palau",
      abbreviation: "PW",
    },
    {
      name: "Pennsylvania",
      abbreviation: "PA",
    },
    {
      name: "Puerto Rico",
      abbreviation: "PR",
    },
    {
      name: "Rhode Island",
      abbreviation: "RI",
    },
    {
      name: "South Carolina",
      abbreviation: "SC",
    },
    {
      name: "South Dakota",
      abbreviation: "SD",
    },
    {
      name: "Tennessee",
      abbreviation: "TN",
    },
    {
      name: "Texas",
      abbreviation: "TX",
    },
    {
      name: "Utah",
      abbreviation: "UT",
    },
    {
      name: "Vermont",
      abbreviation: "VT",
    },
    {
      name: "Virgin Islands",
      abbreviation: "VI",
    },
    {
      name: "Virginia",
      abbreviation: "VA",
    },
    {
      name: "Washington",
      abbreviation: "WA",
    },
    {
      name: "West Virginia",
      abbreviation: "WV",
    },
    {
      name: "Wisconsin",
      abbreviation: "WI",
    },
    {
      name: "Wyoming",
      abbreviation: "WY",
    },
  ];

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

  //previous button click
  function previousButtonOnclick() {
    // setTimeout(() => { setPage(39) }, 200);
    setTimeout(() => {
      navigate(Paths.driverName);
    }, 200);
  }

  //next button click
  function nextButtonOnclick() {
    //setTimeout(() => { navigate(Paths.email) }, 200);
    if (
      data.Address != null &&
      data.Address !== "" &&
      data.Address !== undefined &&
      data.City !== "" &&
      data.State !== "" &&
      data.AddressZIP !== "" &&
      data.State.length === 2 &&
      data.AddressZIP.length === 5
    ) {
      // var address = "";
      // var addressField = document.querySelector('#address_field');
      // if (addressField !== null) {
      //     address = addressField.value;
      // }
      // if (address !== null && address !== "") {
      //     setData({ ...data, Address: address });
      // }

      //setTimeout(() => { setPage(43) }, 200);
      setTimeout(() => {
        navigate(Paths.email);
      }, 200);
    } else {
      if (data.Address !== "") {
        if (
          data.City === "" ||
          data.State === "" ||
          data.AddressZIP === "" ||
          data.City === null ||
          data.State === null ||
          data.AddressZIP === null ||
          data.City === undefined ||
          data.State === undefined ||
          data.AddressZIP === undefined ||
          data.State.length !== 2 ||
          data.AddressZIP.length !== 5
        ) {
          setHiddenFieldsVisibility(true);
        }
      }
      setError(true);
    }
  }

  /* autocomplete */
  const [address, setAddress1] = React.useState(data.Address);

  const handleSelect = async (value) => {
    // const results = await geocodeByAddress(value);
    // const latLng = await getLatLng(results[0]);
    setAddress1(value);
    setError(false);
    setData({
      ...data,
      Address: value,
      City: value.split(",")[1].trim(),
      State: value.split(",")[2].trim(),
    });
  };

  const cityOnChange = (value) => {
    const regex = /^[a-zA-Z ]{0,30}$/;
    if (regex.test(value) && value.trim() !== "") {
      setData({ ...data, City: value });
      //console.log("city", data);
    }
  };
  /* const stateOnChange = value => {
        const regex = /^[a-zA-Z]{0,2}$/;
        if (regex.test(value)) {
            setData({ ...data, State: value.toUpperCase() });
            //console.log("state", data);
        }
    } */
  const zipOnChange = (value) => {
    const regex = /^[0-9]{0,5}$/;
    if (regex.test(value)) {
      setData({ ...data, AddressZIP: value });
      //console.log("zip", data);
    }
  };

  const addressOnChange = (value) => {
    setData({ ...data, Address: value });
  };

  const customHandleSelect = async (suggestion) => {
    var value = suggestion.description;
    geocodeByPlaceId(suggestion.placeId)
      .then((results) => {
        //get postal code
        var components = results[0]["address_components"];
        var addZip = "";
        var state = "";
        var city = "";

        var street = "";
        var area = "";

        components.forEach((component) => {
          //zip code
          if (component.types[0] === "postal_code") {
            addZip = component["long_name"];
            //console.log(addZip);
          }
          //city
          if (component.types[0] === "locality") {
            city = component["long_name"];
            //console.log(city);
          }
          //state
          if (component.types[0] === "administrative_area_level_1") {
            state = component["short_name"];
            //console.log(state);
          }
          //street
          if (component.types[0] === "street_number") {
            street = component["long_name"];
            //console.log(street);
          }
          //area
          if (component.types[0] === "route") {
            area = component["long_name"];
            //console.log(area);
          }
        });

        console.log(results);
        if (street !== "" && area !== "") {
          value = street + " " + area;
          //console.log(value);
        }

        setData({
          ...data,
          AddressZIP: addZip,
          Address: value,
          City: city,
          State: state,
        });
        setAddress1(value);
        //setTimeout(() => { nextButtonOnclick(); }, 100);
        /*  setTimeout(() => {
                     if (street !== "" && area !== "") {
                         let addressField = document.querySelector('#address_field');
                         if (addressField !== null) {
                             addressField.value = street + ", " + area;
                         }
                     }
                 }, 100); */
      })
      .catch((error) => console.error("eror in geo zip code", error));
  };
  /* autocomplete */

  return (
    <div>
      <ProgressDetails
        percentage={93}
        savingsAmount={savingsAmount}
        cityName={cityName}
      />
      <PrimaryLabel label="What is your address?" />

      <div className="section-container">
        <div className="form-section">
          <div
            style={{ justifyContent: "center" }}
            className="options-container"
          >
            <input
              placeholder="e.g. 123 Main Street"
              className="input-field"
              type="text"
              value={data.Address}
              onChange={(element) => {
                addressOnChange(element.target.value);
              }}
              style={{ width: "90%", textAlign: "left" }}
            />

            {/* autocomplete */}

            {/* <PlacesAutocomplete
              value={data.Address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              onSelect={handleSelect}
              searchOptions={{ componentRestrictions: { country: ["us"] } }}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }) => (
                <div className="address-field-container">
                  <input
                    className="input-field address-field"
                    {...getInputProps({ placeholder: "e.g. 1 Main Street" })}
                    id="address_field"
                  />
                  
                  <div className="address-options-container">
                    {loading ? <div>...</div> : null}

                    {suggestions.map((suggestion) => {
                      const style = {
                        backgroundColor: suggestion.active
                          ? "#09bc8a54"
                          : "#fff",
                      };

                      return (
                        <div {...getSuggestionItemProps(suggestion, { style })}>
                          {suggestion.description}
                          <button
                            className="hidden-custom-button"
                            onClick={() => {
                              customHandleSelect(suggestion);
                            }}
                          ></button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete> */}
            {hiddenFieldsVisibility ? (
              <>
                <input
                  placeholder="City"
                  className="input-field"
                  type="text"
                  value={data.City}
                  style={{ minWidth: "5%", width: "42%", textAlign: "left" }}
                  id="city_hidden_field"
                  onChange={(element) => cityOnChange(element.target.value)}
                />

                {/*   <input placeholder="State (e.g. NY)" className="input-field" type="text" value={data.State} style={{ minWidth: "25%", width: "6%", textAlign: "left" }} id="state_hidden_field" onChange={(element) => stateOnChange(element.target.value)}
                                    /> */}

                <FormControl sx={{ margin: 0, height: "42px", width: "25%" }}>
                  <Select
                    className="select-field"
                    placeholder="State"
                    sx={{ margin: 0, height: "42px" }}
                    value={data.State || ""}
                    onChange={(e) => {
                      setData({ ...data, State: e.target.value });
                    }}
                    displayEmpty
                  >
                    <MenuItem sx={{ display: "none" }} hidden disabled value="">
                      State
                    </MenuItem>
                    {state_list.map((state, index) => {
                      return (
                        <MenuItem key={index} value={state.abbreviation}>
                          {state.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
                <input
                  placeholder="Zip Code"
                  className="input-field"
                  type="text"
                  value={data.AddressZIP}
                  style={{ minWidth: "20%", width: "20%", textAlign: "left" }}
                  id="zipcode_hidden_field"
                  onChange={(element) => zipOnChange(element.target.value)}
                />
              </>
            ) : null}
          </div>
          {/* autocomplete */}

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
