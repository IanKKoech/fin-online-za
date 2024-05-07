import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const testimonialData = [
  {
    message:
      "Fin Medical Loans has changed my life! I have always trained and diet like a crazy person but there is just something one can not out train or out diet! I desperately needed to get a few cosmetic things done like a tummy tuck, lipo and breast reduction. All these treatments are unaffordable but Fin Medical Loans came to the rescue and approved me for a loan. My dreams came true and Fin Medical Loans and Dr Paul Mcgarr Changed my life and I am now the person with the body I have always wanted the world to see! I most defiantly recommend Fin Medical Loans to anyone who needs financial help when it comes to cosmetic surgery.",
    name: "Cherise",
  },
  {
    message:
      "I've done some comparisons between well-known loan providers... Fin Medical Loans offered me the lowest rate. Thank you for your speedy service",
    name: "Mishke",
  },
  {
    message: "Thank you so much for your excellent service and assistance.",
    name: "Lauren",
  },
  {
    message: "Many thanks for all your help it's much appreciated.",
    name: "Viruschka",
  },
  {
    message:
      "Thank you for getting this done so quickly and painlessly, it has been greatly appreciated.",
    name: "Lee-Anne",
  },
  {
    message: "Thank you very much for your kind assistance Angelique!",
    name: "Lars",
  },
  {
    message: "Thanks for the excellent service.",
    name: "Bonolo",
  },
  {
    message:
      "Thank you again for your excellent service. It has been a pleasure dealing with you and I will certainly recommend Fin Medical Loans to others.",
    name: "Jane",
  },
  {
    message: "Thank you for the fantastic service! much appreciated.",
    name: "",
  },
];

const Testimonials = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleDotClick = (index: React.SetStateAction<number>) => {
    setSlideIndex(index);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="relative">
        <Carousel
          selectedItem={slideIndex}
          onChange={(index) => setSlideIndex(index)}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          showArrows={false}
          showIndicators={false}
          centerMode={true}
          centerSlidePercentage={100 / 3}
          emulateTouch={true}
          swipeable={true}
          className="carousel-slider"
        >
          {testimonialData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md border border-gray-400 my-4 mx-4 gap-10 overflow-hidden"
            >
              <div className="p-6 h-40 overflow-y-auto">
                <p className="text-gray-700">{testimonial.message}</p>
              </div>
              <div className="px-6 py-3">
                <div className="border-t border-gray-400"></div>
                <p className="text-gray-500 mt-3">- {testimonial.name}</p>
              </div>
            </div>
          ))}
        </Carousel>
        <br></br>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          {testimonialData.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
                slideIndex === index ? "bg-black" : "bg-gray-300"
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
