// src/components/Stats.jsx
import React from "react";

const stats = [
  { id: 1, value: "20+", label: "Years of Experience" },
  { id: 2, value: "100K+", label: "Clients Served" },
  { id: 3, value: "24/7", label: "Customer Support" },
  { id: 4, value: "500+", label: "Corporate Partners" },
  { id: 5, value: "ISO", label: "Certified & Trusted" },
];

const Stats = () => {
  return (
    <section className="bg-graybg py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Strong, Confident Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-blacktext mb-12">
          Proven Track Record You Can <span className="text-redbg">Rely On</span>
        </h2>

        {/* Inline Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center">
              <span className="text-redbg text-3xl md:text-4xl font-extrabold">
                {stat.value}
              </span>
              <p className="text-blacktext text-sm md:text-base font-medium mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
