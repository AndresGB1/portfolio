import * as React from "react";
import "./Main.css";
import projectsInfo from "./infoProjects.js";
import infoGames from "./infoGames.js";
import Card from "./Card";
import Card2 from "./Card2";
import Box from "@mui/material/Box";
import { Carousel } from "react-responsive-carousel";

export default function Projects() {
  return (
    <div className="projects">
       <div className="primary-text title  ">My Portfolio</div>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <div className="button-projects">
          
          {projectsInfo.info.map((projectInfo, index) => (
            <div  key={index}>
              <Card
               
                index={index}
                num={1}
                title={projectInfo.title}
                description={projectInfo.description}
                image={projectInfo.image}
                image2={projectInfo.image2}
                technologies={projectInfo.technologies}
                icon={"../assets/icons/github.svg"}
              />
            </div>
          ))}
          <div className="row margin">
            {infoGames.info.map((gameInfo, index) => (
              <div className="col-md-6 align" key={index}>
                <Card
                  title={gameInfo.title}
                  num={2}
                  description={gameInfo.description}
                  image={gameInfo.image}
                  image2={gameInfo.image2}
                  technologies={gameInfo.technologies}
                  icon={"../assets/icons/github.svg"}
                />
              </div>
            ))}
          </div>
        </div>
      </Box>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <div>
        <Carousel
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}

        >
          {projectsInfo.info.map((projectInfo, index) => (
            <div  key={index}>
              <Card2
              
                index={index}
                num={1}
                title={projectInfo.title}
                description={projectInfo.description}
                image={projectInfo.image}
                image2={projectInfo.image2}
                technologies={projectInfo.technologies}
                icon={"../assets/icons/github.svg"}
              />
            </div>
          ))}
        </Carousel>
        <Carousel
          style={{ width: "80%" }}
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
        >
          
            {infoGames.info.map((gameInfo, index) => (
              <div key={index}>

                <Card
                  title={gameInfo.title}
                  num={2}
                  description={gameInfo.description}
                  image={gameInfo.image}
                  image2={gameInfo.image2}
                  technologies={gameInfo.technologies}
                  icon={"../assets/icons/github.svg"}
                />
              </div>
            ))}
          
        </Carousel>
        </div>
      </Box>
      <div className="button-projects align">
        <a
          className="primary-text margin3"
          href="https://github.com/AndresGB1 "
          rel="noreferrer"
          target="_blank"
        >
          <button className="btn btn-primary   align">More Here</button>
        </a>
      </div>
    </div>
  );
}
