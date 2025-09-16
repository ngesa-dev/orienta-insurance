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

        {/* Right Content (Illustration placeholder) */}
        <div className="flex justify-center md:justify-end">
          <div className="w-64 h-64 md:w-96 md:h-96 bg-whitebg rounded-2xl shadow-lg flex items-center justify-center text-redbg font-bold">
            [Insurance Illustration<br />640×640 px]
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
