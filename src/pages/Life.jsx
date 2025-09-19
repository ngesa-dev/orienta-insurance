import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaShieldAlt, FaPiggyBank } from "react-icons/fa";

const Life = () => {
  return (
    <main className="bg-graybg min-h-screen pb-20">
      <header className="bg-whitebg">
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-blacktext mb-4">
              Life Insurance
            </h1>
            <p className="text-gray-700 mb-6">
              Protect the people you love. Our life insurance plans provide compassionate financial support for your
              family when they need it most — clear, simple and affordable.
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-gray-800">
                <FaShieldAlt className="text-redbg mt-1" />
                <span><strong>Flexible cover</strong> — term and whole life options tailored to your needs.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-800">
                <FaPiggyBank className="text-redbg mt-1" />
                <span><strong>Cash value & savings</strong> available on select plans for long-term security.</span>
              </li>
            </ul>
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
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80"
              alt="Family protection"
              className="w-full max-w-md rounded-2xl shadow-lg object-cover h-64 md:h-80"
            />
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 mt-8 grid md:grid-cols-2 gap-8">
        {/* Features */}
        <article className="bg-whitebg rounded-2xl p-6 shadow">
          <h2 className="text-xl font-semibold text-blacktext mb-4">Why choose Orienta Life?</h2>
          <div className="space-y-4 text-gray-700">
            <p><FaCheckCircle className="inline text-redbg mr-2" /> Fast, fair claim settlements when it counts.</p>
            <p><FaCheckCircle className="inline text-redbg mr-2" /> Competitive premiums and flexible terms.</p>
            <p><FaCheckCircle className="inline text-redbg mr-2" /> Optional riders: critical illness, disability, waiver of premium.</p>
          </div>
        </article>

        {/* What’s covered */}
        <article className="bg-whitebg rounded-2xl p-6 shadow">
          <h2 className="text-xl font-semibold text-blacktext mb-4">What’s covered</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Death benefit to nominated beneficiaries</li>
            <li>Accidental death & dismemberment (optional)</li>
            <li>Critical illness payouts (where selected)</li>
            <li>Policy loan & cash value options (selected plans)</li>
          </ul>
        </article>
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-10">
        <article className="bg-whitebg rounded-2xl p-6 shadow text-gray-700">
          <h3 className="text-lg font-semibold mb-3">How it works</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Choose a plan (term or whole life).</li>
            <li>Get a tailored quote and agree on beneficiaries.</li>
            <li>Policy issue and ongoing support — quick claims when needed.</li>
          </ol>
        </article>
      </section>
    </main>
  );
};

export default Life;
