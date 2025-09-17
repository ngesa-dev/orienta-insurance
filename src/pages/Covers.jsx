// src/pages/Covers.jsx
import React from "react";
import { insuranceCovers } from "../constants";
import { Link } from "react-router-dom";

const Covers = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        {/* Intro */}
        <h2 className="text-4xl font-bold text-gray-900">
          Insurance Solutions Tailored to You
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At <span className="text-redbg font-semibold">Orienta Holdings</span>, we believe 
          insurance is more than a policy—it’s peace of mind. Explore our range of 
          comprehensive covers designed to protect your family, health, business, 
          and lifestyle so you can focus on living with confidence.
        </p>
      </div>

      {/* Covers Grid */}
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {insuranceCovers.map((cover, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            {/* Image */}
            <img
              src={cover.image}
              alt={cover.name}
              className="h-48 w-full object-cover"
            />

            {/* Content */}
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-redbg">{cover.name}</h3>
              <p className="text-gray-700">{cover.description}</p>
              <Link
                to={cover.path}
                className="inline-block bg-redbg text-whitetext px-5 py-2 rounded-md font-medium hover:opacity-90 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Covers;
