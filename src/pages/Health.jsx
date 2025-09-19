import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaHospital } from "react-icons/fa";

const Health = () => {
  return (
    <main className="bg-graybg min-h-screen pb-20">
      <header className="bg-whitebg">
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-blacktext mb-4">Health Insurance</h1>
            <p className="text-gray-700 mb-6">
              Quality healthcare without financial stress. Our health plans cover hospitalization, outpatient care, and
              preventive services — so you get care when you need it most.
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
              src="https://images.unsplash.com/photo-1580281657521-16f8aa85ffba?auto=format&fit=crop&w=1000&q=80"
              alt="Health care"
              className="w-full max-w-md rounded-2xl shadow-lg object-cover h-64 md:h-80"
            />
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 mt-8 grid md:grid-cols-3 gap-6">
        <article className="col-span-2 bg-whitebg rounded-2xl p-6 shadow">
          <h2 className="text-xl font-semibold text-blacktext mb-4">Plans built for your wellbeing</h2>
          <p className="text-gray-700 mb-4">
            Choose from individual, family and corporate health plans. Our network includes top hospitals and clinics,
            we negotiate competitive rates and provide fast pre-authorizations.
          </p>

          <h3 className="text-lg font-semibold mb-2">Key benefits</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Inpatient & outpatient coverage</li>
            <li>Maternity cover options</li>
            <li>Chronic disease management</li>
            <li>24/7 telemedicine support</li>
          </ul>
        </article>

        <aside className="bg-whitebg rounded-2xl p-6 shadow">
          <h3 className="text-lg font-semibold text-blacktext mb-3">Quick facts</h3>
          <ul className="text-gray-700 space-y-2">
            <li><strong>Network:</strong> Extensive hospital network</li>
            <li><strong>Waiting periods:</strong> Standard waiting periods apply</li>
            <li><strong>Claims:</strong> Fast online claims submission</li>
          </ul>
        </aside>
      </section>
    </main>
  );
};

export default Health;
