import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import mediConnectImage from "../../public/assets/Mediconnect1.png";
import advanceImage from "../../public/assets/Advance 1.png";
import krstlImage from "../../public/assets/Krstl 1.png";
import fertilitySolutionsImage from "../../public/assets/Fertility Solutions 1.png";
import Image from "next/image";

const HealthInstitutions = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleArrowClick = (index: React.SetStateAction<number>) => {
    setSlideIndex(index);
  };

  return (
    <div className="bg-gray-300 p-4">
      <style>
        {`
          .fertility-image {
            transform: scale(0.6); /* Reduce the size of the fertility image by 60% */
          }
        `}
      </style>
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={50}
        className="carousel-container"
      >
        <div className="h-auto w-80 pt-10">
          <Image   
            src={mediConnectImage.src}
            alt="MediConnect Logo"
            className="carousel-image"
          />
        </div>
        <div className="h-auto w-80 pt-16">
          <Image   
            src={advanceImage.src}
            alt="Advance"
            className="carousel-image"
          />
        </div>
        <div className="h-auto w-80 pt-10">
          <Image    src={krstlImage.src} alt="Krystal" className="carousel-image" />
        </div>
        <div className="h-auto w-80">
          <Image   
            src={fertilitySolutionsImage.src}
            alt="Fertility Solutions"
            className="carousel-image fertility-image h-4 w-auto" 
          />
        </div>
      </Carousel>
    </div>
  );
};

export default HealthInstitutions;
