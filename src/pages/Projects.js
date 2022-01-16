import * as React from "react";
import "./Main.css";
import info from"./infoProjects.js";

import Card from "./Card";


  export default function Projects() {
  
  return (
    <div className="projects"> 

      <h1 className="primary-text title ">My Portfolio</h1>
      <Card title={info.ieeeWeb.title} description={info.ieeeWeb.description} image={info.ieeeWeb.image} technologies={info.ieeeWeb.technologies}/>
      <Card title={info.vetWeb.title} num ={0} description={info.vetWeb.description} image={info.vetWeb.image} technologies={info.vetWeb.technologies}/>
      <Card title={info.intraWeb.title} description={info.intraWeb.description} image={info.intraWeb.image} technologies={info.intraWeb.technologies}/>
      
    </div>
  );
}
