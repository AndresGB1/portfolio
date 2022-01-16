import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Slide from '@mui/material/Slide';


export default function CarouselResponsive() {
  
  return (
    <Carousel
      centerSlidePercentage={25}
      centerMode={true}
      width={3000}
      
    >
  
    </Carousel>
  );
}
