import * as React from "react";
import "./Card.css";
import "./Main.css";
export default function MediaCard(props) {
  

  const over = (e) => {
    if (isOver) {
   
    }
  };
  const [changes, setChanges] = React.useState("0");

  const isOver = () => {
    setChanges("1");
  };
  const notOver = () => {
    setChanges("0");
  };
  return (
    <div className="card-projects" height={props.width}>
      {props.num !== 0 ? (
        <div className="card-img-caption row align ">
          <div className="col-md-6">
            <img
              className="card-img-top"
              src={props.image}
              background={"transparent"}
              height={props.height}
              alt="Card  cap"
            />
          </div>
          <div className="col-md-6 pad-card-text">
            <div>
              <p className="primary-text title-card">{props.title}</p>
              <p className=" secondary-text description-card ">
                {props.description}
              </p>
            </div>
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
      ) : (
        <div className="card-img-caption row align ">
          <div className="col-md-6 pad-card-text">
            <div>
              <p className="primary-text title-card ">{props.title}</p>
              <p className=" secondary-text description-card  ">
                {props.description}
              </p>
            </div>
            <div className="second-card row align">
              <div className="col-md-8 align secondary-text  technologies-card">
                
                  {props.technologies}
                
              </div>
              <div className="col-md-4 align">
                <img className="img" src={props.icon} alt="icon" height="20" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img
              className="card-img-top"
              src={props.image}
              background={"transparent"}
              height={props.height}
              width={props.width}
              alt="Card  cap"
            />
          </div>
        </div>
      )}
    </div>
  );
}
