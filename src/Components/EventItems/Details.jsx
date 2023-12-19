import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";

const Details = () => {
  const [event, setEvent] = useState({});
  const { id } = useParams();

  const events = useLoaderData();

  useEffect(() => {
    const findEvent = events?.find((event) => event.id === id);
    setEvent(findEvent);
  }, [id, events]);

  console.log(event);

  return (
    <div>
      <DetailsCard />
    </div>
  );
};

export default Details;
