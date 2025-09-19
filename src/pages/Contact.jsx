import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Branches from "../components/Branches";

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center px-6 py-12">
      {/* Page Header */}
      <div className="max-w-3xl text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Get in Touch
        </h1>
        <p className="text-gray-600">
          Have a question, need help, or just want to connect? We’d love to hear from you. 
          Fill out the form below or reach us through our contact details.
        </p>
      </div>

      {/* Contact Section */}
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl w-full">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-redbg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-redbg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-redbg"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-redbg hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-redbg rounded-2xl shadow-md p-8 text-white flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="w-5 h-5" />
              <p>+254 700 000 000</p>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="w-5 h-5" />
              <p>info@orienta.com</p>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="w-5 h-5" />
              <p>UpperHill, Nairobi, Kenya</p>
            </div>
          </div>

          {/* Socials */}
          <div className="mt-8">
            <h3 className="text-lg font-medium mb-3">Connect With Us</h3>
            <div className="flex gap-4 text-2xl">
              <a href="#" className="hover:text-gray-200 transition">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-gray-200 transition">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-gray-200 transition">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-gray-200 transition">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Branches/>
    </div>
  );
};

export default Contact;
