import * as React from "react";
import Tilt from "react-parallax-tilt";
import "./Main.css";
import Slide from "@mui/material/Slide";
import VizSensor from "react-visibility-sensor";
import Box from "@mui/material/Box";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function BannerSkills() {
  const [title, setTitle] = React.useState(false);
  const [firstRow, setFirstRow] = React.useState(false);
  const [secondRow, setSecondRow] = React.useState(false);
  const [thirdRow, setThirdRow] = React.useState(false);
  const direction = ["back", "front", "other"];

  return (
    <div className="banner-skills">
      <div className="container pad">
        <div className="title-margin-skills">
          <VizSensor
            onChange={(isVisible) => {
              if (isVisible) {
                setTitle(isVisible);
              }
            }}
          >
            <div>
              <Slide direction="up" in={title} timeout={1000}>
                <div className="primary-text title">Skills</div>
              </Slide>
            </div>
          </VizSensor>
        </div>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <div className="container pad">
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
                      <Tilt
                        glareEnable={false}
                        className="align skill-img back-img"
                      >
                        <img
                          className="logos"
                          src="../../assets/skills/back-logos.png"
                          alt="knowledge of java pyhon react  nodejs sql mysql postgresql heroku flask "
                        />
                      </Tilt>
                    </div>
                    <div className="col-sm align ">
                      <p className="secondary-text p2 text-skills-right">
                        The icons shown are technologies I work on. ¡I am always
                        learning something new!
                        <br />
                        I'm highly qualified in the management of Back-end
                        projects. I'm constantly working on API's RESTful,
                        databases, and logical programming.
                        </p>
                    </div>
                  </div>
                </Slide>
              </div>
            </VizSensor>
            <VizSensor
              onChange={(isVisible) => {
                if (isVisible) {
                  setSecondRow(isVisible);
                }
              }}
            >
              <div>
                <Slide direction="up" in={secondRow} timeout={1000}>
                  <div className="row pad pad3">
                    <div className="col-sm align">
                    <p className="secondary-text p2 text-skills-left">
                        Furthermore I'm also capable to develop Front-end
                        projects. For example, this portfolio website. 
                      </p>
                    </div>
                    <div className="col-sm align">
                      <Tilt className="align skill-img front-img ">
                        <img
                          className="logos"
                          src="../../assets/skills/front-logos.png"
                          alt="knowledge of java pyhon react  nodejs sql mysql postgresql heroku flask "
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
                if (isVisible) {
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
                        />
                      </Tilt>
                    </div>
                    <div className="col-sm align">
                    <p className="secondary-text p2 text-skills-right">
                        My hobbies include  constant learning of IA, crypto, linux and chess.
                        </p>                        
                    </div>
                  </div>
                </Slide>
              </div>
            </VizSensor>
          </div>
        </Box>
      </div>

      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <div className="pad2">
          <Carousel
            style={{ width: "80%" }}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
          >
            {direction.map((item, index) => (
              <div key={index}>
                <div>
                  <Tilt className={" " + item + "-img "}>
                    <div>
                      <img
                        className="logo"
                        style={{ padding: "3%" }}
                        src={"../../assets/skills/" + item + "-logos.png"}
                        alt="knowledge of java pyhon react  nodejs sql mysql postgresql heroku flask "
                      />

                      <div className="legend margin-legend"> {item}</div>
                    </div>
                  </Tilt>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </Box>

      <hr className="hr3" />
    </div>
  );
}
