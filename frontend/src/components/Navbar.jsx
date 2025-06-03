import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { HandIcon, Star, User2 } from "lucide-react";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";

function Navbar() {
  const { user, setUser, credits } = useContext(AppContext);
  const { setShowLoginDialog } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      setUser(true);
    }
  }, []);

  return (
    <div className="flex items-center justify-between py-4">
      <Link to="/" className="flex gap-2 items-center">
        <img
          src={logo}
          alt="logo"
          className="w-8 sm:w-10 transition-all duration-300 ease-in-out"
        />
        <h1 className="font-bold text-2xl md:text-3xl transition-all duration-300 ease-in-out">
          imagyn
        </h1>
      </Link>
      <div>
        {user ? (
          <div className="flex items-center gap-2 sm:gap-5">
            <button
              onClick={() => navigate("/pricing")}
              className="flex items-center justify-center gap-2 bg-blue-100 border border-blue-300 px-4 sm:px-6 py-2 rounded-3xl hover:scale-105 transform transition-all ease-in-out duration-300"
            >
              <div>
                <Star
                  size={25}
                  className="text-yellow-700 bg-yellow-400 rounded-full p-1 flex justify-center items-center"
                />
              </div>
              <p>Credits left : {credits}</p>
            </button>
            <button className="flex items-center justify-center gap-2 bg-rose-100 border border-rose-300 px-4 sm:px-6 py-2 rounded-3xl ">
              <div>
                <HandIcon className="text-rose-600" />
              </div>
              <p>Hey! {user.name}</p>
            </button>
            <div className="relative group">
              <div className="p-2 bg-white rounded-full drop-shadow">
                <User2 />
              </div>
              <div className="absolute hidden bg-white group-hover:block top-[100%] -right-5 z-10 text-rose-600 rounded px-4 py-2 cursor-pointer">
                <button
                  onClick={() => {
                    localStorage.clear();
                    setUser(null);
                    toast("Logged out!", {
                      position: "bottom-right",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    });
                  }}
                  className="cursor-pointer"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-5">
            <p onClick={() => navigate("/pricing")} className="cursor-pointer">
              Pricing
            </p>
            <button
              onClick={() => setShowLoginDialog(true)}
              className="bg-zinc-800 text-white px-6 py-2 sm:px-10 rounded-3xl"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
