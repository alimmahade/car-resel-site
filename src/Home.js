import React from "react";
import banimg from "./asset/img/car.ccc8ff0.png";
import pic from "./asset/img/1.jpg";
import jic from "./asset/img/2.jpg";

const Home = () => {
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <h2 className="card-title text-4xl">
          SELL YOUR CAR FOR
          <br /> QUICK CASH
        </h2>
        <div className="card-body">
          <img src={banimg} alt="np" />
        </div>
      </div>
      <div>
        <h1 className="text-3xl m-6">Car Catagories</h1>
        <button className="m-6 btn btn-outline">Honda</button>
        <button className="m-6 btn btn-outline btn-primary">Toyota</button>
        <button className="m-6 btn btn-outline btn-secondary">Nissan</button>
      </div>
      <h1 className="text-3xl">Most Popular Car</h1>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={pic} alt="Movie" />
        </figure>
        <div className="card-body"></div>
        <figure>
          <img src={jic} alt="Movie" />
        </figure>
        <div className="card-body"></div>
        <figure>
          <img src={pic} alt="Movie" />
        </figure>
        <div className="card-body"></div>
      </div>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-3xl">Give Your Feedback</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="text"
                  placeholder="enter number"
                  className="input input-bordered"
                />
              </div>
              <textarea
                className="textarea"
                placeholder="Type Your feedback"
              ></textarea>
              <div className="form-control mt-6">
                <button className="btn btn-outline">Send Feedback</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
