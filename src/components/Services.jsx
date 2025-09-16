// src/components/Services.jsx
import React from "react";
import { Link } from "react-router-dom";
import { insuranceCovers } from "../constants";

const Services = () => {
  return (
    <section className="bg-graybg py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-blacktext text-center mb-10">
          Our <span className="text-redbg">Insurance Covers</span>
        </h2>

        {/* Grid of Covers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {insuranceCovers.map((cover) => {
            const Icon = cover.icon;
            return (
              <article
                key={cover.name}
                className="bg-whitebg shadow rounded-lg p-6 flex flex-col items-center text-center transition hover:text-redbg"
              >
                {/* Icon */}
                <Icon className="text-redbg text-4xl mb-3" />

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2">{cover.name}</h3>

                {/* Description */}
                <p className="text-sm text-blacktext mb-3">{cover.description}</p>

                {/* CTA */}
                <Link
                  to={cover.path}
                  className="mt-auto text-sm font-medium text-blacktext hover:text-redbg transition"
                >
                  Learn More →
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
