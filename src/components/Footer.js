import { Stack } from "@mui/material";
import React from "react";
import ImgCloudFlare from "../images/footer-cloudflare.png";
import ImgSSL from "../images/footer-ssl.png";
import ImgWordFence from "../images/footer-wordfence.png";

import PhoneIcon from "@mui/icons-material/Phone";

export default function Footer({ contactUsNumber }) {
  return (
    <div>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-top-wrapper">
            <div className="footer-top-section1">
              <Stack direction="row">
                <div className="footer-logo-container">
                  <img className="footer-logo" src={ImgCloudFlare} alt="" />
                </div>
                <div className="footer-logo-container">
                  <img className="footer-logo" src={ImgSSL} alt="" />
                </div>
                <div className="footer-logo-container">
                  <img className="footer-logo" src={ImgWordFence} alt="" />
                </div>
              </Stack>
              <Stack direction="column">
                <p style={{ textAlign: "center", fontSize: "22px" }}>
                  <strong>Call Us &amp; Save Money</strong>
                  <br />
                  <strong>
                    <a
                      style={{
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      href={"tel:" + contactUsNumber}
                    >
                      <PhoneIcon sx={{ fontSize: "30px" }} /> &nbsp;{" "}
                      {/* {contactUsNumber} */}
                      (844) 511-2363
                    </a>
                  </strong>
                </p>
              </Stack>
            </div>
            <div className="footer-top-section2">
              <p>
                Insurance Savings is a top online insurance marketplace that
                connects consumers with multiple insurance companies and local
                agents across the United States. The specified use of this site
                is to accurately match users to the auto insurance companies to
                best meet their needs. We do not provide insurance coverage and
                we do not represent any specific insurance provider or
                automobile makes and/or models. If you do not receive a quote
                from a specific company you were searching for, we recommend
                contacting that company directly so you can compare the quotes
                you receive from us with one from them. All trademarks and
                copyrights are the property of their respective owners.
              </p>

              <p>
                By using this site, you acknowledge that you have read and agree
                to the Privacy Policy and Terms &amp; Conditions.
              </p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            <span className="footer-copyright">
              © Copyright Insurance Savings 2021. All Rights Reserved.
            </span>{" "}
            |{" "}
            <a
              href="https://insurance-savings.org/terms-conditions/"
              target="_blank"
              rel="noopener"
            >
              Terms &amp; Conditions
            </a>{" "}
            |{" "}
            <a
              href="https://insurance-savings.org/privacy-policy/"
              target="_blank"
              rel="noopener"
            >
              Privacy Policy&nbsp;|{" "}
            </a>
            <a
              href="https://insurance-savings.org/privacy-policy/#California"
              target="_blank"
              rel="noopener"
            >
              Your California Privacy Rights
            </a>{" "}
            |{" "}
            <a
              href="https://insurance-savings.org/personal-data/"
              target="_blank"
              rel="noopener"
            >
              Personal Data Request
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
