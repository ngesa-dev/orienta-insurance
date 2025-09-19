import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
            Protect What Matters Most with Orienta Holdings
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Comprehensive insurance solutions for your health, life, motor, and
            more — tailored to secure your future.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/quote"
              className="bg-redbg text-whitetext px-6 py-3 rounded-md font-semibold hover:opacity-90 transition"
            >
              Get a Quote
            </Link>
            <Link
              to="/about"
              className="border border-redbg text-redbg px-6 py-3 rounded-md font-semibold hover:bg-redbg hover:text-whitetext transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Content - Unsplash Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://plus.unsplash.com/premium_photo-1661776260388-f5d1b14ce8a2?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Insurance protection illustration"
            className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
