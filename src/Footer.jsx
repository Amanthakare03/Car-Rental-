import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {



  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">CarRent</h2>
          <p className="text-sm leading-6">
            Rent your dream car with ease and comfort. Reliable, affordable, and always on time.
          </p>
        </div>


        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white">FAQs</li>
            <li className="hover:text-white">Terms & Conditions</li>
            <li className="hover:text-white">Privacy Policy</li>
            <li className="hover:text-white">Help Center</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="text-sm">📍 Nehru Nagar, Bhopal, MP, India</p>
          <p className="text-sm">📞 +91 9021025090</p>
          <p className="text-sm">✉️ info@carrent.com</p>

        
        <div className="flex space-x-4 mt-4">
            <Link to="https://www.facebook.com/people/Aman-Thakare/pfbid02KHkae3q2vsitai2o1ADLrqXFN84vRo132RHs3s1ekwZU9zuc5J1cXgg9eUrRTY3Tl/?mibextid=rS40aB7S9Ucbxw6v"><FaFacebook size={30} /></Link>
            <Link to="https://www.instagram.com/amanthakare03/?utm_source=qr&igsh=MXQ3aW5haGtyemkxdA%3D%3D#"><FaInstagram size={30} /></Link>
            <Link to="https://www.linkedin.com/in/amanthakare03?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "><FaLinkedin size={30} /></Link>
        </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-700 pt-5">
        {new Date().getFullYear()} CarRent. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
