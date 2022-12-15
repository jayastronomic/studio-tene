import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const HomeGallery = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goRight = () => {
    currentIndex === slides.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
  };

  const goLeft = () => {
    currentIndex === 0
      ? setCurrentIndex(slides.length - 1)
      : setCurrentIndex(currentIndex - 1);
  };

  const jumpToPhoto = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="relative h-full ">
      <div className="absolute flex justify-between w-full px-2 top-1/2 opacity-75">
        <FontAwesomeIcon
          className="absolute text-white text-2xl -left-8 opacity-75 hover:opacity-100 transition cursor-pointer arrows"
          icon={solid("circle-arrow-left")}
          onClick={goLeft}
        />
        <FontAwesomeIcon
          className={
            "absolute text-white text-2xl -right-8 opacity-75 hover:opacity-100 transition cursor-pointer arrows"
          }
          icon={solid("circle-arrow-right")}
          onClick={goRight}
        />
      </div>
      <div
        className={`w-full h-full rounded-lg bg-cover bg-center`}
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      />
      <div className="flex justify-center space-x-4 w-full pt-4">
        {slides.map((slide, index) => {
          return (
            <FontAwesomeIcon
              className={`opacity-75 text-xs cursor-pointer hover:opacity-100 transition ${
                currentIndex == index ? "text-gray-300" : "text-gray-800"
              }`}
              icon={solid("circle")}
              onClick={() => jumpToPhoto(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomeGallery;
