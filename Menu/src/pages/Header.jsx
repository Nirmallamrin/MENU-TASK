import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Header = () => {
  return (
    <header className="bg-slate-950 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-blue-400">
          <Link to="/">DeepNetSoft</Link>
        </div>

        <nav className="space-x-6 text-lg">
          <Link to="/" className="hover:text-cyan-600 transition-colors">
            Home
          </Link>
          <Link to="/menu" className="hover:text-cyan-600 transition-colors">
            Menu
          </Link>
          <Link
            to="/manage-menu"
            className="hover:text-cyan-600 transition-colors"
          >
            Menu Manager
          </Link>
          <Link
            to="/registration"
            className="hover:text-cyan-600 transition-colors"
          >
            Make a Registration
          </Link>
          <Link to="/contact" className="hover:text-cyan-600 transition-colors">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
