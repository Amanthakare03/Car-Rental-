import React from "react";
import "./App.css";
import Header from "./Header";
import maincar from "./assets/main-car.png";
import Footer from "./Footer";
import About from "./About";



function App() {
  return (
    <>
    <div className="min-h-screen font-poppins, sans-serif box-border ">

    <Header />
    <br />
    <br />
    <section className="flex justify-between items-center px-20">
      <div className="max-w-[600px]">
        <p className="font-bold text-2xl">Plan your trip now</p>
        <h1 className="font-bold text-5xl my-4 m-{15px}">
            Save <span className="text-red-600">big</span> with our <br /> Car Rental
          </h1>
          <p className="text-gray-600 mb-6 text-lg">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
          <div className="flex gap-4">
            <button className="bg-red-600 w-30  text-white font-bold rounded-4xl p-3 shadow-2xl ">Book Ride</button>
            <button className="bg-black text-white p-3 rounded-4xl w-30">Learn More</button>
          </div>
        </div>
        <div className="w-400">
          <img src={maincar} alt="car" />
        </div>
      </section>
      </div>
      <About/>
      <Footer/>
      </>    
  );
}

export default App;

