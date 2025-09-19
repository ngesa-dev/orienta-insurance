import React from "react";
import { Link } from "react-router-dom";
import { FaCar, FaTools, FaShieldAlt } from "react-icons/fa";

const Motor = () => {
  return (
    <main className="bg-graybg min-h-screen pb-20">
      <header className="bg-whitebg">
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-blacktext mb-4">Motor Insurance</h1>
            <p className="text-gray-700 mb-6">
              Drive with confidence. Our motor insurance covers third-party liabilities, comprehensive protection and
              optional add-ons so you’re protected on every journey.
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
              src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80"
              alt="Car insurance"
              className="w-full max-w-md rounded-2xl shadow-lg object-cover h-64 md:h-80"
            />
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 mt-8 grid md:grid-cols-2 gap-8">
        <article className="bg-whitebg rounded-2xl p-6 shadow">
          <h2 className="text-xl font-semibold text-blacktext mb-4">Coverage options</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Third-party liability</li>
            <li>Comprehensive (own damage + third-party)</li>
            <li>Windshield & glass cover</li>
            <li>Roadside assistance & towing (optional)</li>
          </ul>
        </article>

        <aside className="bg-whitebg rounded-2xl p-6 shadow">
          <h3 className="text-lg font-semibold text-blacktext mb-3">Tips for lower premiums</h3>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Maintain a clean driving record</li>
            <li>Increase your voluntary excess if affordable</li>
            <li>Install approved anti-theft devices</li>
          </ol>
        </aside>
      </section>
    </main>
  );
};

export default Motor;
