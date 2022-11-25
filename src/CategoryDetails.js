import React from "react";
import { useLoaderData } from "react-router-dom";

const CategoryDetails = () => {
  const categories = useLoaderData();
  console.log(categories);
  return (
    <div>
      {categories.map((category) => (
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={category.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{category.name}</h2>
              <p>{category.location}</p>
              <p>Resell Price: ${category.price}</p>
              <p>New Price: ${category.orginalPrice}</p>
              <p>Post Date: {category.postDate}</p>
              <p>Used: {category.usedYears}</p>
              <p>Seler Name: {category.name}</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryDetails;
