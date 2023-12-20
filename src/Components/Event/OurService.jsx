import React from "react";
import image1 from "../../assets/service/event.jpg";
import image2 from "../../assets/service/artis7.jpg";
import image3 from "../../assets/service/birthday-12.jpg";
import image4 from "../../assets/service/Brand5.jpg";
import image5 from "../../assets/service/Concert8.jpg";
import image6 from "../../assets/service/fashion9.jpg";

const OurService = () => {
  return (
    <div className="mt-16 grid grid-cols-1  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 items-center justify-space-around w-full">
      <div className="grid items-center justify-center mb-10">
        <img className="rounded rounded-[50%]" src={image1} alt="" />
        <h2 className="text-center text-2xl font-semibold py-3 hover:text-red-600 hover:cursor-pointer">
          CONFERENCE
        </h2>
      </div>
      <div className="second grid items-center justify-center mb-10">
        <img className="rounded rounded-[50%]" src={image2} alt="" />
        <h2 className="text-center text-2xl font-semibold py-3 hover:text-red-600 hover:cursor-pointer">
          ARTIST MANAGEMENT
        </h2>
      </div>
      <div className="second grid items-center justify-center mb-10">
        <img className="rounded rounded-[50%]" src={image3} alt="" />
        <h2 className="text-center text-2xl font-semibold py-3 hover:text-red-600 hover:cursor-pointer">
          BIRTHDAY EVENT
        </h2>
      </div>
      <div className="second grid items-center justify-center mb-10">
        <img className="rounded rounded-[50%]" src={image4} alt="" />
        <h2 className="text-center text-2xl font-semibold py-3 hover:text-red-600 hover:cursor-pointer">
          BIRTHDAY EVENT
        </h2>
      </div>
      <div className="second grid items-center justify-center mb-10">
        <img className="rounded rounded-[50%]" src={image5} alt="" />
        <h2 className="text-center text-2xl font-semibold py-3 hover:text-red-600 hover:cursor-pointer">
          BIRTHDAY EVENT
        </h2>
      </div>
      <div className="second grid items-center justify-center mb-10">
        <img className="rounded rounded-[50%]" src={image6} alt="" />
        <h2 className="text-center text-2xl font-semibold py-3 hover:text-red-600 hover:cursor-pointer">
          BIRTHDAY EVENT
        </h2>
      </div>
    </div>
  );
};

export default OurService;
