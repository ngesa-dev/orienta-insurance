import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* HELP LINKS */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">HELP</h3>
          <ul className="space-y-2">
            <li><Link to="/blog" className="hover:text-redbg transition">Blog</Link></li>
            <li><Link to="/faqs" className="hover:text-redbg transition">FAQs</Link></li>
            <li><Link to="/downloads" className="hover:text-redbg transition">Downloads</Link></li>
            <li><Link to="/privacy" className="hover:text-redbg transition">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">CONTACT</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <FaLocationDot className="text-redbg" />
              <span>Upper Hill, Nairobi</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-redbg" />
              <span>+254 700 000 000</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-redbg" />
              <span>info@orienta.com</span>
            </li>
          </ul>
        </div>

        {/* SOCIALS */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">FOLLOW US</h3>
          <div className="flex gap-4">
            <a href="#" className="bg-gray-800 hover:bg-redbg p-3 rounded-full transition">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-gray-800 hover:bg-redbg p-3 rounded-full transition">
              <FaTwitter />
            </a>
            <a href="#" className="bg-gray-800 hover:bg-redbg p-3 rounded-full transition">
              <FaInstagram />
            </a>
            <a href="#" className="bg-gray-800 hover:bg-redbg p-3 rounded-full transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Orienta Holdings. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
