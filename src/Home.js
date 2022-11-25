import React from "react";
import banimg from "./asset/img/car.ccc8ff0.png";

const Home = () => {
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <h2 className="card-title text-4xl">SELL YOUR CAR FOR QUICK CASH</h2>
        <div className="card-body">
          <img src={banimg} alt="np" />
        </div>
      </div>
      <div>
        <h1 className="text-3xl m-6">Car Catagories</h1>
        <button className="m-6 btn btn-outline">Microbus</button>
        <button className="m-6 btn btn-outline btn-primary">Elite Car</button>
        <button className="m-6 btn btn-outline btn-secondary">Fuel Car</button>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://placeimg.com/400/225/arch"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
