import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Main.css";
import "../index.css";
import "bootstrap";
import Typed from "react-typed";
import Slide from "@mui/material/Slide";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div>
              <Slide in={true} timeout={1500}>
                <div>
                  <h1 className="primary-text p1">Hi, I’m Andrés</h1>

                  <h1 className="primary-text p1">Back-end Developer</h1>
                </div>
              </Slide>
              <Slide direction="right" in={true} timeout={1500}>
                <div className="description">
                  <p className="secondary-text p2 justify">
                    I am a Systems Engineer, passionate about programming and
                    knowledge of different aspects among these
                    <Typed
                      strings={[
                        ": Crypto",
                        ": IA",
                        ": Web Development",
                        ": Chess",
                        ": Linux",
                      ]}
                      typeSpeed={40}
                      backSpeed={50}
                      loop
                    ></Typed>
                  </p>
                </div>
              </Slide>
            </div>
          </div>

          <div className="col-sm img-andres align">
            <Slide direction="left" in={true} timeout={1500}>
              <img
                 src={process.env.PUBLIC_URL + "/assets/profile.png"}
                alt="triangle with all three sides equal"
                height="200"
                width="200"
              />
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
}
