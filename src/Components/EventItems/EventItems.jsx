import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";

const EventItems = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="mt-28">
      <h1 className="text-3xl text-center  font-bold mb-12">
        OUR POPULAR EVENT ITEMS
      </h1>
      <div className="grid grid-cols-3 gap-8">
        {data?.map((item) => (
          <EventCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default EventItems;
