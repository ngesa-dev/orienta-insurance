// src/components/WhyChooseUs.jsx
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const benefits = [
  {
    title: "Affordable Premiums",
    description: "Flexible plans that fit your budget without compromising coverage.",
  },
  {
    title: "Fast Claims",
    description: "Quick, hassle-free claim settlements when you need support most.",
  },
  {
    title: "24/7 Customer Support",
    description: "Round-the-clock assistance to answer your questions anytime, anywhere.",
  },
  {
    title: "Trusted Experience",
    description: "Years of service with a strong track record of customer satisfaction.",
  },
  {
    title: "Customized Solutions",
    description: "Tailored policies designed to match your lifestyle and needs.",
  },
  {
    title: "Reliable Protection",
    description: "Peace of mind knowing you’re backed by a certified provider.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-whitebg py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blacktext mb-12">
          Why <span className="text-redbg">Choose Us</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex flex-col items-center text-center p-6 bg-graybg rounded-xl shadow-sm hover:shadow-md transition"
            >
              <FaCheckCircle className="text-redbg text-3xl mb-3" />
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-blacktext">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
