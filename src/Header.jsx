import React from "react";
import pic from "./assets/car rent logo.jpg";
import pic1 from "./assets/carrent.jpg";
import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <>
        <nav className="flex items-center justify-between p-4 shadow-md bg-black text-white">
        <div className="logo flex items-center gap-3 w-40">
          <img src={pic1} alt="logo" className="w-15 shadow-2xl"/>
          <span>CAR <b>Rental</b></span>
        </div>
        <ul className="flex gap-8 font-bold">
          <li><Link to="/">Home</Link></li>
          <li>About</li>
          <li>Vehicle Models</li>
          <li>Contact</li>
        </ul>
        <div className="gap-3 flex">
          <button className="font-bold ">Sign In</button>
          <button className="bg-red-600 text-amber-50 font-bold shadow-md border-2">Register</button>
        </div>
      </nav>
        </>
    )
}
export default Header;