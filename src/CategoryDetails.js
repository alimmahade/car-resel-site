import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "./Context/AuthUserContext";

const CategoryDetails = () => {
  const { user } = useContext(AuthContext);
  const { email, displayName, uid } = user;
  console.log(displayName);
  const data = useLoaderData();

  return (
    <div className="lg:grid grid-cols-2 md:grid-cols-3">
      {data.map((catagory) => (
        <div key={catagory._id} catagory={catagory}>
          <div className="card card-compact shadow-xl text-center">
            <div className="card-body align-middle md:shrink-0">
              <figure>
                <img
                  className="w-full object-cover md:h-full md:w-48 max-w-full h-auto"
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
              {/* The button to open modal */}
              <label htmlFor="Booking-Modal" className="btn">
                Book Now
              </label>

              {/* Put this part before </body> tag */}
              <input
                type="checkbox"
                id="Booking-Modal"
                className="modal-toggle"
              />
              <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    readOnly
                    defaultValue={catagory.name}
                  />
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    readOnly
                    defaultValue={catagory.price}
                  />
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    readOnly
                    defaultValue={email}
                  />
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    readOnly
                    defaultValue={displayName || uid}
                  />
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="your phone number"
                  />
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="Metting Location"
                  />
                  <div className="modal-action">
                    <label htmlFor="Booking-Modal" className="btn">
                      Submit
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryDetails;
