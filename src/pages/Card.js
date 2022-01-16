import * as React from "react";
import "./Card.css";
import "./Main.css";
export default function MediaCard(props) {
  const { minHeight, setMinHeight } = React.useState(500);
  const { background, setBackground } = React.useState(
    props.background ? props.background : "inherit"
  );
  const { title, setTitle } = React.useState(
    props.title ? props.title : "Title"
  );
  const { description, setDescription } = React.useState(
    props.description ? props.description : "Description"
  );
  const { image, setImage } = React.useState(
    props.image
      ? props.image
      : "https://i.pinimg.com/originals/17/d6/ce/17d6ced5b0a988e6df4879cd79793f73.jpg"
  );

  const { textAppear, setTextAppear } = React.useState(
    props.textAppear ? props.textAppear : false
  );

  const over = (e) => {
    if (isOver) {
      setBackground("inherit");

      textAppear(true);
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
    <div className="card-projects" width={props.width}>
      {props.num !== 0 ? (
        <div className="card-img-caption row align ">
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
          <div className="col-md-6 pad-card-text">
            <div>
            <p className="primary-text title-card">{props.title}</p>
            <p className=" secondary-text description-card p2">
              {props.description}
            </p>
            </div>
            <div className="second-card row">
              <p className=" secondary-text technologies-card">
                {props.technologies}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="card-img-caption row align ">
          <div className="col-md-6  pad-card-text">
            <p className="primary-text title-card">{props.title}</p>
            <p className=" secondary-text description-card p2">
              {props.description}
            </p>
            <p className=" secondary-text technologies-card">
              {props.technologies}
            </p>
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
