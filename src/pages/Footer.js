import * as React from "react";
import './Main.css'

export default function Footer(props) {
  return (
    <div className="footer  ">
      <div className=" icons row1 align">
        <div className="align col-footer">
          <a href="https://github.com/AndresGB1" target="_blank" rel="noreferrer">
            <img
              className="icon"
              src="../assets/icons/github.svg"
              alt="github"
            />
          </a>
        </div>
        <div className="align col-footer">
          <a
            href="https://linkedin.com/in/andrés-gb-b0b3661b0"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="../assets/icons/linkedin.svg"
              alt="linkedin"
              className="icon"
            />
          </a>
        </div>
        <div className="align col-footer">
          <a href="https://twitter.com/Andres_GB0" target="_blank"rel="noreferrer">
            <img
              src="../assets/icons/twitter.svg"
              alt="twitter"
              className="icon"
            />
          </a>
        </div>
        <div className="align col-footer">
          <img src="../assets/icons/gmail.svg" alt="gmail" className="icon" />
        </div>
      </div>
      <div className="align">
        <div>
          <div className="footer-text">Copyright ©2022 All rights reserved</div>
          <div className="footer-text">
            Made with &lt;3{" "}
            <img src="../assets/icons/react.svg" height="16" alt="react" />
          </div>
        </div>
      </div>
    </div>
  );
}
