import * as React from "react";

export default function Footer(props) {
  return (
    <div className="footer  ">
      <div className="row icons">
        <div className="col-md-3 align">
        <a href="https://github.com/AndresGB1" target="_blank" rel="">
          <img src="../assets/icons/github.svg" alt="github" height="40" />
        </a>
        </div>
        <div className="col-md-3 align">
        <a href="https://linkedin.com/in/andrés-gb-b0b3661b0
" target="_blank" rel="">
            <img src="../assets/icons/linkedin.svg" alt="linkedin" height="40" />
            </a>
        </div>
        <div className="col-md-3 align">
            <a href="https://twitter.com/Andres_GB0" target="_blank" rel="">
          <img src="../assets/icons/twitter.svg" alt="twitter" height="40" />
            </a>
        </div>
        <div className="col-md-3 align">
          <img src="../assets/icons/gmail.svg" alt="gmail" height="40" />
        </div>
      </div>
      <div className="align">
        <div>
          <div className="footer-text">Copyright ©2021 All rights reserved</div>
          <div className="footer-text">Made with &lt;3 in react</div>
        </div>
      </div>
    </div>
  );
}
