import React from "react";

const DetailsCard = ({ event }) => {
  console.log(event);
  const { title, image, price, shortDescription } = event || {};
  return (
    <div className="">
      <div className="bg-[#fff] p-12 shadow">
        <h1 className="text-3xl font-bold my-5">{title}</h1>
        <img className="w-full" src={image} alt="" />
        <div className="py-8">
          <p className="text-xl">{shortDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
