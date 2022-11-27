import React, { useContext, useState } from "react";
import { json, useLoaderData } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "./Context/AuthUserContext";
import { useForm } from "react-hook-form";

const CategoryDetails = () => {
  const { user } = useContext(AuthContext);
  const { email, displayName, uid } = user;
  console.log(displayName);
  const { register, handleSubmit } = useForm();
  const [orderData, setOrderData] = useState("");
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

              <form
                onSubmit={handleSubmit(
                  (data) => setOrderData(JSON.stringify(data))

                  // fetch("https://as-12-server.vercel.app/orderpost",{
                  //   method:"POST", headers:{
                  //     "content-type:application/json"
                  //   },body:json.stringify(orderData)
                  // })
                  // .then(res=>res.json())
                  // .then(data=>console.log(data))
                )}
              >
                <input
                  type="checkbox"
                  id="Booking-Modal"
                  className="modal-toggle"
                />
                <div className="modal modal-bottom sm:modal-middle">
                  <div className="modal-box">
                    <input
                      {...register("name")}
                      type="text"
                      className="input input-bordered w-full"
                      readOnly
                      defaultValue={catagory.name}
                    />
                    <input
                      {...register("price")}
                      type="text"
                      className="input input-bordered w-full"
                      readOnly
                      defaultValue={catagory.price}
                    />
                    <input
                      {...register("email")}
                      type="text"
                      className="input input-bordered w-full"
                      readOnly
                      defaultValue={email}
                    />
                    <input
                      {...register("displyName")}
                      type="text"
                      className="input input-bordered w-full"
                      readOnly
                      defaultValue={displayName || uid}
                    />
                    <input
                      {...register("phone")}
                      type="text"
                      className="input input-bordered w-full"
                      placeholder="your phone number"
                    />
                    <input
                      {...register("location")}
                      type="text"
                      className="input input-bordered w-full"
                      placeholder="Location"
                    />
                    {console.log(orderData)}
                    <div className="modal-action">
                      <label
                        htmlFor="Booking-Modal"
                        className="btn"
                        type="submit"
                      >
                        ok
                      </label>
                      <button className="btn btn-outline">Conform Buy</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryDetails;
