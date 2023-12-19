import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ item }) => {
  const { title, image, price, shortDescription, id } = item || {};
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="h-52 w-full" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{shortDescription}</p>
        <div className="card-actions justify-end">
          <Link to={`/details/${id}`}>
            <button className="btn ">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
