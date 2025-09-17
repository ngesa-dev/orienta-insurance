import React from "react";
import { motion } from "framer-motion";
import { marqueeVariants } from "../motion";

const testimonials = [
  {
    id: 1,
    name: "Jane Mwangi",
    role: "Business Owner",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "Orienta made getting insured so easy. The claims process was fast and stress-free!",
  },
  {
    id: 2,
    name: "John Kamau",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    quote:
      "I’ve never felt more supported. Their 24/7 support team really lives up to the promise.",
  },
  {
    id: 3,
    name: "Mary Atieno",
    role: "Travel Blogger",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    quote:
      "Their travel insurance gave me peace of mind during my Europe tour. Highly recommend Orienta!",
  },
  {
    id: 4,
    name: "Peter Otieno",
    role: "Logistics Manager",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
    quote:
      "Affordable premiums without hidden costs. Truly customer-first service.",
  },
];

const Testimonials = () => {
  // Duplicate testimonials array for seamless loop
  const loopedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="bg-graybg py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-blacktext mb-12">
          What Our <span className="text-redbg">Clients Say</span>
        </h2>

        {/* Scrolling Row */}
        <motion.div
          className="flex gap-6"
          variants={marqueeVariants}
          animate="animate"
        >
          {loopedTestimonials.map((t) => (
            <div
              key={t.id + Math.random()} // avoid key conflicts with duplicates
              className="min-w-[280px] max-w-sm bg-whitebg shadow-lg rounded-xl p-6 flex flex-col items-center text-center"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-redbg"
              />
              <p className="text-blacktext italic mb-4">"{t.quote}"</p>
              <h4 className="font-semibold text-redbg">{t.name}</h4>
              <span className="text-sm text-gray-600">{t.role}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
