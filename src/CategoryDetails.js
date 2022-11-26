import React from "react";
import { useLoaderData } from "react-router-dom";

const CategoryDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      {data.map((catagory) => (
        <div key={catagory._id} catagory={catagory}>
          <div className="card card-compact w-96 bg-base-100 shadow-xl text-center">
            <div className="card-body align-middle">
              <figure>
                <img
                  src={catagory.img}
                  style={{ height: "100px", width: "200px" }}
                  alt=""
                />
              </figure>
              <h2 className="card-title text-secondary justify-center">
                {catagory.name}
              </h2>
              <p className="justify-center">Location: {catagory.location}</p>
              <p className="text-white">
                Orginal Price: ${catagory.orginalPrice}
              </p>
              <p className="text-white">Resell Price Only: ${catagory.price}</p>
              <p>Used Only: {catagory.usedYears}</p>
              <p>Seler Name: {catagory.location}</p>
              <p>Add Post on: {catagory.postDate}</p>
              <button className="btn btn-outline btn-secondary">
                {" "}
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryDetails;
