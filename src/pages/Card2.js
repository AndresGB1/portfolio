import * as React from "react";
import "./Card.css";
import "./Main.css";

export default function MediaCard(props) {
  return (
    <div className="card-projects">
      <a href="https://branch-ieee-ueb.netlify.app" target="_blank">
        <img
          className="img-card3"
          src={props.image}
          height={props.height}
          alt="Card  cap"
        />
      </a>
      <div className="img-over">
        <img
          className="img-card4"
          src={props.image2}
          height={props.height}
          alt="Card  cap"
        />

        <div className="text-over all-text">
          <p className="primary-text title-card">{props.title}</p>
          <p className=" primary-text description-card ">{props.description}</p>

          <div className="second-card row ">
            <div className="secondary-text col-md-9 align technologies-card">
              {props.technologies}
            </div>
            <div className="col-md-3 align">
              <img className="img" src={props.icon} alt="icon" height="20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
