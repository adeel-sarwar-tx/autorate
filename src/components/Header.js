import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import header_logo from "../images/ratenav_logo.png";

import PhoneIcon from "@mui/icons-material/Phone";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import ReatCallWomen from "../images/ratenav_callwoman.png";

export default function Header({ contactUsNumber }) {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "center",
          position: "initial",
          top: 0,
          zIndex: 2,
        }}
      >
        <AppBar position="static" className="header">
          <div
            style={{
              maxWidth: "1140px",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <img
              className="header-logo"
              src={header_logo}
              alt="Auto Insurance"
            />
            <div>
              <Stack
                className="contact-us-container"
                direction="column"
                sx={{ background: `url(${ReatCallWomen})` }}
              >
                <div className="contact-us-row-1">Call Us & Save Money!</div>
                <div className="contact-us-row-2">
                  <a href={"tel:" + contactUsNumber}>
                    <PhoneIcon className="phone-icon1" />
                    &nbsp; (844) 511-2363
                    {/* {contactUsNumber} */}
                  </a>
                </div>
                <div className="contact-us-row-3">
                  <FiberManualRecordIcon className="agent-status pulse" /> Agent
                  Status: Online
                </div>
              </Stack>
              <Stack className="contact-us-button">
                {/* <a href={"tel:" + contactUsNumber}> */}
                <a href={"tel:" + "(844) 511-2363"}>
                  <PhoneIcon className="phone-icon1" />
                  &nbsp; Call Us &amp; Save Money!
                </a>
              </Stack>
            </div>
          </div>
        </AppBar>
      </Box>
    </>
  );
}
