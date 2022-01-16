import * as React from "react";
import Tilt from "react-parallax-tilt";
import "./Main.css";
import Slide from "@mui/material/Slide";
import VizSensor from "react-visibility-sensor";

export default function BannerSkills() {
  const [title, setTitle] = React.useState(false);
  const [firstRow, setFirstRow] = React.useState(false);
  const [secondRow, setSecondRow] = React.useState(false);
  const [thirdRow, setThirdRow] = React.useState(false);

  return (
    <div className="banner-skills">
      <div className="container pad">
        <VizSensor
          onChange={(isVisible) => {
            if (isVisible) {
              setTitle(isVisible);
            }
          }}
        >
          <div>
          <Slide direction="up" in={title} timeout={1000}>
            <h1 className="primary-text title">Skills</h1>
          </Slide>
          </div>
        </VizSensor>
        <VizSensor
          onChange={(isVisible) => {
            if (isVisible) {
              setFirstRow(isVisible);
            }
          }}
        >
          <div>
          <Slide direction="up" in={firstRow} timeout={1000}>
            <div className="row pad ">
              <div className="col-sm align">
                <div className=" left-bar"></div>
                <Tilt glareEnable={false} className="align skill-img back-img">
                  <img
                    className="logos"
                    src="../../assets/skills/back-logos.png"
                    alt="knowledge of java pyhon react  nodejs sql mysql postgresql heroku flask "
                    height="72%"
                    width="70%"
                  />
                </Tilt>
              </div>
              <div className="col-sm align">
                <p className="secondary-text p2 text-skills">
                  I like to develop back-end projects. I can help you develop
                  API's, logic programming.
                  <br />
                  <br />
                  The icons shown are technologies in which i work continuously,
                  some technologies escape me, however. ¡I am always learning
                  something new!
                </p>
              </div>
            </div>
          </Slide>
          </div>
        </VizSensor>
        <VizSensor
        
        
          onChange={(isVisible) => {
            if(isVisible){
            setSecondRow(isVisible);
            }
          }}
        >
          <div>
          <Slide
            direction="up"
            in={secondRow}
            timeout={1000}
          >
            <div className="row pad pad3">
              <div className="col-sm align">
                <p className="secondary-text p2 text-skills">
                  For the front-end, I know different technologies and I have
                  developed different projects, however it is not what I am most
                  passionate about, despite this web page I built it from
                  scratch{" "}
                </p>
              </div>

              <div className="col-sm align">
                <Tilt className="align skill-img front-img ">
                  <img
                    className="logos"
                    src="../../assets/skills/front-logos.png"
                    alt="knowledge of java pyhon react  nodejs sql mysql postgresql heroku flask "
                    height="70%"
                    width="68%"
                  />
                </Tilt>
                <div className=" right-bar"></div>
              </div>
            </div>
          </Slide>
          </div>
        </VizSensor>
        <VizSensor
          onChange={(isVisible) => {
            if(isVisible){
            setThirdRow(isVisible);
            }
          }}
        >
          <div>
          <Slide direction="up" in={thirdRow} timeout={1000}>
            <div className="row pad pad3">
              <div className="col-sm align">
                <div className=" left-bar"></div>
                <Tilt className="align skill-img other-img ">
                  <img
                    className="responsive-img logos"
                    src="../../assets/skills/other-logos.png"
                    alt="knowledge of java pyhon react  nodejs sql mysql postgresql heroku flask "
                    height="70%"
                    width="66%"
                  />
                </Tilt>
              </div>
              <div className="col-sm align">
                <p className="secondary-text p2 text-skills">
                  I am constantly learning about the crypto world I have created
                  some bots and I know part of the linux ecosystem
                </p>
              </div>
            </div>
          </Slide>
          </div>
        </VizSensor>
      </div>
      <hr className="hr3" />
    </div>
  );
}
