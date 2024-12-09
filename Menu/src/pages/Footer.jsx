import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white p-6 mt-8">
      <div className="flex flex-col items-center md:flex-row justify-around mb-6">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">CONNECT WITH US</h3>
          <p className="text-sm">+91 9561843340</p>
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold">DEEP NET SOFT</h1>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">FIND US</h3>
          <p className="text-sm">
            First floor, Geo infopark, Infopark EXPY, Kakkanad
          </p>
        </div>
      </div>
      <footer className="text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Deepnetsoft Solutions. All rights
          reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link to="/terms" className="hover:text-blue-400">
            Terms & conditions
          </Link>
          <Link to="/privacy" className="hover:text-blue-400">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
