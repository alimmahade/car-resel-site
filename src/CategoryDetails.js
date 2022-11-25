import React from "react";
import { useLoaderData } from "react-router-dom";

const CategoryDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      {data.map((catagory) => (
        <li>{catagory.name}</li>
      ))}
    </div>
  );
};

export default CategoryDetails;
