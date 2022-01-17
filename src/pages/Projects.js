import * as React from "react";
import "./Main.css";
import info from "./infoProjects.js";

import Card from "./Card";

export default function Projects() {
  return (
    <div className="projects">
      <div className="button-projects">
      <h1 className="primary-text title ">My Portfolio</h1>
      <Card
        title={info.ieeeWeb.title}
        description={info.ieeeWeb.description}
        image={info.ieeeWeb.image}
        technologies={info.ieeeWeb.technologies}
        icon={"../assets/icons/github.svg"}
        width={500}
      />
      <Card
        title={info.vetWeb.title}
        num={0}
        description={info.vetWeb.description}
        image={info.vetWeb.image}
        technologies={info.vetWeb.technologies}
        icon={"../assets/icons/github.svg"}
      />
      <Card
        title={info.intraWeb.title}
        description={info.intraWeb.description}
        image={info.intraWeb.image}
        technologies={info.intraWeb.technologies}
        icon={"../assets/icons/github.svg"}
      />
      <div className="row margin">
        <div className="col-md-6 align">
          <Card
            title={info.unityGame.title}
            height={310}
            width={290}
            description={info.unityGame.description}
            image={info.unityGame.image}
            technologies={info.unityGame.technologies}
            icon={"../assets/icons/github.svg"}
          />
        </div>
        <div className="col-md-6 align">
          <Card
            title={info.brickBreakerGame.title}
            num={0}
            height={310}
            width={190}
            description={info.brickBreakerGame.description}
            image={info.brickBreakerGame.image}
            technologies={info.brickBreakerGame.technologies}
            icon={"../assets/icons/github.svg"}
          />
        </div>
      </div>
      </div>
      <div className="button-projects">
      <button className="btn btn-primary  align">
      <a className="primary-text"href="https://github.com/AndresGB1 " target="_blank" >
        More Here
      </a>
      </button>
    </div>
    </div>
  );
}
