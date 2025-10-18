import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";


const Footer = () => {



  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
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
            <FaFacebook size={30} />
            <FaInstagram size={30} />
            <FaTwitter size={30} />
            <FaLinkedin size={30} />
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
