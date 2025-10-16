import React from "react";
import "./App.css";
import Header from "./Header";
import bgpic from "./assets/bgcar.png"

function App() {
  return (
    <div className="min-h-screen font-poppins, sans-serif box-border">

    <Header />
    <br />
    <br />
    <section className="flex justify-between items-center px-20">
      <div className="max-w-[600px]">
        <p className="font-bold text-2xl">Plan your trip now</p>
        <h1 className="font-bold text-5xl my-4 m-{15px}">
            Save <span className="text-red-600">big</span> with our <br /> Car Rental
          </h1>
          <p className="description">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
          <div className="buttons">
            <button className="book">Book Ride</button>
            <button className="learn">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/car.png" alt="car" />
        </div>
      </section>
    
    </div>
  );
}

export default App;

