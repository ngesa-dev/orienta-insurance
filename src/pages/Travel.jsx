import React from "react";
import { Link } from "react-router-dom";
import { FaPlane, FaPassport, FaHeartbeat } from "react-icons/fa";

const Travel = () => {
  return (
    <main className="bg-graybg min-h-screen pb-20">
      <header className="bg-whitebg">
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-blacktext mb-4">Travel Insurance</h1>
            <p className="text-gray-700 mb-6">
              Travel the world with confidence. Our travel plans cover medical emergencies, cancellations, baggage loss,
              and travel assistance — so your trip stays a memorable one for the right reasons.
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
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80"
              alt="Travel insurance"
              className="w-full max-w-md rounded-2xl shadow-lg object-cover h-64 md:h-80"
            />
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 mt-8 grid md:grid-cols-2 gap-8">
        <article className="bg-whitebg rounded-2xl p-6 shadow">
          <h2 className="text-xl font-semibold text-blacktext mb-4">What’s included</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Emergency medical expenses abroad</li>
            <li>Trip cancellation or interruption</li>
            <li>Lost or delayed baggage coverage</li>
            <li>24/7 emergency assistance & evacuation</li>
          </ul>
        </article>

        <aside className="bg-whitebg rounded-2xl p-6 shadow">
          <h3 className="text-lg font-semibold text-blacktext mb-3">Travel tips</h3>
          <p className="text-gray-700">Buy cover immediately after booking for maximum protection. Keep policy & emergency numbers handy.</p>
        </aside>
      </section>
    </main>
  );
};

export default Travel;
