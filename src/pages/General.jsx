import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaIndustry, FaShieldAlt } from "react-icons/fa";

const General = () => {
  return (
    <main className="bg-graybg min-h-screen pb-20">
      <header className="bg-whitebg">
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-blacktext mb-4">General Insurance</h1>
            <p className="text-gray-700 mb-6">
              Protection for property and businesses. Our general insurance covers homes, small businesses, and assets
              against common risks so you can focus on what matters.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
  <Link
    to="/quote"
    className="bg-redbg text-whitetext px-6 py-3 rounded-md font-medium text-center"
  >
    Get a Quote
  </Link>
  <Link
    to="/covers"
    className="px-6 py-3 rounded-md border border-gray-300 text-blacktext text-center"
  >
    Back to Covers
  </Link>
</div>

          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
              alt="General insurance"
              className="w-full max-w-md rounded-2xl shadow-lg object-cover h-64 md:h-80"
            />
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 mt-8 grid md:grid-cols-3 gap-6">
        <article className="col-span-2 bg-whitebg rounded-2xl p-6 shadow">
          <h2 className="text-xl font-semibold text-blacktext mb-4">What we protect</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Home & contents</li>
            <li>Small & medium business property</li>
            <li>Equipment breakdown and business interruption</li>
            <li>Liability protection for customers and employees</li>
          </ul>
        </article>

        <aside className="bg-whitebg rounded-2xl p-6 shadow">
          <h3 className="text-lg font-semibold text-blacktext mb-3">Quick guide</h3>
          <p className="text-gray-700">We assess risk quickly and provide transparent cover options — no jargon.</p>
        </aside>
      </section>
    </main>
  );
};

export default General;
