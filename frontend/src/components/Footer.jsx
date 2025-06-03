import React from "react";
import logo2 from "../assets/logo2.png";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

function Footer() {
  return (
    <div className="pt-8 flex md:flex-row flex-col gap-2 items-center justify-between">
      <Link to="/" className="flex gap-2 items-center">
        <img
          src={logo2}
          alt="logo2"
          className="w-8 sm:w-10 transition-all duration-300 ease-in-out"
        />
        <h1 className="font-bold text-2xl md:text-3xl transition-all duration-300 ease-in-out">
          imagyn
        </h1>
      </Link>
      <div className="px-10 text-slate-600">
        All right reserved. Copyright @ imagyn 2025
      </div>
      <div>
        <div className="flex items-center justify-center gap-4 p-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>

          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
            aria-label="X (Twitter)"
          >
            <Twitter className="w-5 h-5" />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full hover:opacity-90 transition-opacity"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
