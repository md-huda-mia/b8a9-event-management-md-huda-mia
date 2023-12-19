import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";

const Details = () => {
  const [phone, setPhone] = useState({});

  const { id } = useParams();
  const phones = useLoaderData();
  console.log(phones);
  useEffect(() => {
    const findPhone = phones?.find((phone) => phone.id === id);
    setPhone(findPhone);
    console.log(findPhone);
  }, [id, phones]);

  console.log(phone);
  return (
    <div className="p-16 bg-[#f8f8f8]">
      <DetailsCard event={phone} />
    </div>
  );
};

export default Details;
