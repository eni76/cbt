import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { MdAccountCircle } from "react-icons/md";
import { PiUserCircleDashedBold } from "react-icons/pi";
import { IoIosMenu } from "react-icons/io";
import AuthContext from "../../context/AuthProvider";
export default function Header() {

  const nav = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthentify, setIsAuthentify] = useState(true);
  const handleLogout = () => {
    logout();
    nav("/login");
  };
  const { user } = useContext(AuthContext)
  return (
    <header className="sticky top-0 left-0 z-40 px-4 py-3 text-white shadow bg-lime-700 ">

      {/* Large screen */}
      <div className="hidden lg:block">
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-4">

            <Link to={"/"} className="bg-[url('/images/klaxonimage.png')] bg-cover bg-center w-12 h-12 rounded-full ">
            </Link>
            <Link to="/" className="text-lg font-bold "> KLAXON FORD CBT System</Link>

          </div>



          <div>
            <NavLink to="/about" className={({ isActive }) => ` nav  ${isActive ? "border-2 border-white rounded-md" : ""}`}>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) => ` nav  ${isActive ? "border-2 border-white rounded-md" : ""}`}>
              Contact
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => ` nav ${isActive ? "border-2 border-white rounded-md" : ""}`}>
              Services
            </NavLink>

          </div>

          <div className="flex items-center gap-4">
            {user ? (
              <>
         


                <NavLink to="/dash" className={({ isActive }) => ` nav ${isActive ? "border-2 border-white rounded-md" : ""}`}>
                  <PiUserCircleDashedBold className="w-6 h-6" />
                </NavLink>
              </>
            ) : (
              <>
                <Link to="/login" className="text-sm bg-white rounded-full hover:text-white text-lime-700 hover:bg-lime-700 hover:border-white"><MdAccountCircle className="w-6 h-6 transition-all duration-500 ease-in-out hover:bg-lime-700" /></Link>

                <NavLink to="/register" className={({ isActive }) => ` nav ${isActive ? "border-2 border-white rounded-md" : ""}`}>
                  Signup
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="block lg:hidden">
        <div className="relative flex items-center justify-between ">
          <div className="flex items-center gap-4">

            <Link to={"/"} className="bg-[url('/images/klaxonimage.png')] bg-cover bg-center w-12 h-12 rounded-full ">
            </Link>
            <Link to="/" className="text-lg font-bold ">CBT System</Link>

          </div>


          <span onClick={() => setIsMenuOpen(!isMenuOpen)} className="cursor-pointer">
            <IoIosMenu className="w-10 h-10" />
          </span>
        </div>

        <div className={` ${isMenuOpen ? "" : "hidden"} absolute left-0 top-[100%]  iltems-center flex flex-col z-50 bg-slate-500 w-full    p-2`}>
          <NavLink to="/about" className={({ isActive }) => ` nav  ${isActive ? "border-2 border-white rounded-md" : ""}`}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => ` nav  ${isActive ? "border-2 border-white rounded-md" : ""}`}>
            Contact
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => ` nav ${isActive ? "border-2 border-white rounded-md" : ""}`}>
            Services
          </NavLink>
          {user ? (
            <>
              <div className="text-sm">Hello, <span className="font-medium">{user.name || user.email}</span></div>
              <button onClick={handleLogout} className="px-3 py-1 text-sm rounded bg-primary"><PiUserCircleDashedBold className="w-6 h-6" /></button>
            </>
          ) : (
            <>


              <NavLink to="/login" className={({ isActive }) => ` nav ${isActive ? "border-2 border-white rounded-md" : ""}`}>

                Account
              </NavLink>
              <NavLink to="/register" className={({ isActive }) => ` nav ${isActive ? "border-2 border-white rounded-md" : ""}`}>
                Signup
              </NavLink>
            </>
          )}



        </div>

      </div>
    </header>
  );
}
