import * as React from "react";
import "./Card.css";
import "./Main.css";

export default function MediaCard(props) {
  
  const [uno,setUno] = React.useState("col1");
  const [dos,setDos] = React.useState("col2");
  const col2 = () =>{
    if(props.num===2){
      setUno("col3");
      setDos("col4");
    }
  }
  const link =props.link ? props.link : "https://github.com/AndresGB1";
  React.useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    col2();
  });

  return (
    
    <div className="card-projects">
      
        <div className="row1">
          <div className={uno}>
            <a href={link} target="_blank" rel="noreferrer">
              <img
                className="img-card2"
                src={props.image}
                height={props.height}
                alt="Card  cap"
              />
            </a>
          </div>
          <div className={dos+" img-over"}>
            <img
              className="img-card"
              src={props.image2}
              height={props.height}
              alt="Card  cap"
            />

            <div className="text-over all-text">
              <p className="primary-text title-card">{props.title}</p>
              <p className=" primary-text description-card ">
                {props.description}
              </p>

              <div className="second-card row ">
                <div className="secondary-text col-md-9 align technologies-card">
                  {props.technologies}
                </div>
                <div className="col-md-3 align">
                  <img
                    className="img"
                    src={props.icon}
                    alt="icon"
                    height="20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
