import React from "react";
import { Link } from "react-router-dom";

const CtaBanner = () => {
  return (
    <section className="bg-redbg py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left - Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src="https://plus.unsplash.com/premium_photo-1661771719168-449af6de4e8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdXJhbmNlJTIwYnVzaW5lc3N8ZW58MHx8MHx8fDA%3D"
            alt="Family Insurance"
            className="rounded-2xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm max-h-72 object-cover"
          />
        </div>

        {/* Right - Content */}
        <div className="text-whitetext text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 leading-snug">
            Secure Your Future with <span className="underline">Orienta Holdings</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-4">
            With <span className="font-semibold">over a decade of trusted service</span>, 
            Orienta Holdings has protected thousands of families and businesses.  
            We deliver <span className="italic">affordable, reliable, and fast insurance solutions</span>.
          </p>
          <p className="text-sm sm:text-base md:text-lg mb-6">
            Don’t leave your future to chance — partner with an insurer that puts 
            <span className="font-semibold"> your security first</span>.
          </p>
          <Link
            to="/quote"
            className="inline-block bg-whitetext text-redbg font-semibold px-6 sm:px-8 py-3 rounded-md shadow hover:bg-graybg hover:text-blacktext transition text-sm sm:text-base"
          >
            Get Your Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
