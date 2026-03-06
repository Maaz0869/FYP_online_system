import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/uap-logo.png";

function Navbar() {
  return (
    <div>
      <nav className="bg-white shadow-lg fixed top-0 left-0 w-full">
        <div className="flex items-center justify-between py-3 px-32">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src={Logo} alt="UAP logo" className="h-10 w-auto" />
            </Link>
          </div>

          {/* Center: Links */}
          <div className="flex-1 flex justify-center items-center">
            <div className="flex items-center gap-5 text-black">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `py-1 px-3 text-xl font-bold text-black hover:text-yellow-300 rounded-2xl transition duration-300 border-t-4 ${
                    isActive ? "border-yellow-400" : "border-transparent"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `py-1 px-3 text-xl font-bold text-black hover:text-yellow-300 rounded-2xl transition duration-300 border-t-4 ${
                    isActive ? "border-yellow-400" : "border-transparent"
                  }`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/project"
                className={({ isActive }) =>
                  `py-1 px-3 text-xl font-bold text-black hover:text-yellow-300 rounded-2xl transition duration-300 border-t-4 ${
                    isActive ? "border-yellow-400" : "border-transparent"
                  }`
                }
              >
                Project
              </NavLink>
              <NavLink
                to="/form"
                className={({ isActive }) =>
                  `py-1 px-3 text-xl font-bold text-black hover:text-yellow-300 rounded-2xl transition duration-300 border-t-4 ${
                    isActive ? "border-yellow-400" : "border-transparent"
                  }`
                }
              >
                Form
              </NavLink>
            </div>
          </div>

          {/* Right: Buttons */}
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition">
              Login
            </button>
            <button className="px-4 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
