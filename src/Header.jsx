import React from "react";
import logo from "./assets/logo.png"
import { Routes, Route, Link } from "react-router-dom";
import App from "./App";
import About from "./About";
import VehichdeModel from "./VehichdeModel";
import Contact from "./Contact";



const Header = () =>{
    return(
        <>
        <nav className="flex items-center justify-between p-4 shadow-md bg-black text-white">
        <div className="logo flex items-center gap-3 w-40">
          <img src={logo} alt="logo" className="w-20 shadow-2xl"/>
          <span>CAR <b>Rental</b></span>
        </div>
        <ul className="flex gap-8 font-bold">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/VehicheModels">Vehiche-Models</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
        <div className="gap-3 flex">
          <button className="font-bold ">Sign In</button>
          <button className="bg-red-600 text-amber-50 p-3 font-bold shadow-2xl rounded-2xl">Register</button>
        </div>
      </nav>

      </>
    )
}
export default Header;