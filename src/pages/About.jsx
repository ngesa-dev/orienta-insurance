import React from "react";
import { Link } from "react-router-dom";
import Branches from "../components/Branches";

const About = () => {
  return (
    <section className="bg-graybg py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left - Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5zdXJhbmNlJTIwY29tcGFueXxlbnwwfHwwfHx8MA%3D%3D"
            alt="About Orienta Holdings"
            className="rounded-2xl shadow-lg w-full max-w-lg object-cover 
                       h-64 sm:h-72 md:h-[420px] lg:h-[500px]"
          />
        </div>

        {/* Right - About Story */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blacktext mb-6">
            About <span className="text-redbg">Orienta Holdings</span>
          </h2>

          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Founded in <span className="font-semibold">1985</span>, Orienta Holdings has grown 
            from a small insurance provider in Nairobi to a trusted regional partner in 
            risk management and financial protection. Over the years, we have earned the 
            confidence of thousands of clients across Kenya and East Africa through our 
            dedication to excellence and customer-first approach.
          </p>

          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Today, our portfolio spans <span className="font-semibold">life, health, motor, travel, 
            and general insurance solutions</span>, tailored to meet the needs of individuals, 
            families, and businesses. Each of our subsidiaries and divisions contributes to 
            our mission of making insurance accessible, affordable, and dependable.
          </p>

          <p className="text-gray-700 text-base leading-relaxed mb-4">
            We are proud of our reputation for <span className="font-semibold">financial stability, 
            transparent claims processing, and innovative products</span>. Our operations are 
            guided by global best practices, a strong risk management framework, and an 
            unwavering commitment to integrity and service excellence.
          </p>

          <p className="text-gray-700 text-base leading-relaxed">
            At Orienta, we believe in going beyond protection. Through our 
            <span className="italic"> "Secure Today, Prosper Tomorrow"</span> promise, we empower our 
            clients not just to insure, but to thrive — free from financial worries, and 
            confident in building a brighter future.
          </p>
        </div>
      </div>
      
      {/* Mission, Vision, Values Section */}
      <div className="max-w-6xl mx-auto px-6 mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Mission Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <img
            src="https://img.icons8.com/ios-filled/100/goal.png"
            alt="Our Mission"
            className="mx-auto mb-4 w-16 h-16"
          />
          <h3 className="text-xl font-semibold text-redbg mb-3">Our Mission</h3>
          <p className="text-gray-600 text-base leading-relaxed">
            To provide innovative, affordable, and reliable insurance solutions 
            that protect our clients and empower them to build a secure future.
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <img
            src="https://img.icons8.com/ios-filled/100/binoculars.png"
            alt="Our Vision"
            className="mx-auto mb-4 w-16 h-16"
          />
          <h3 className="text-xl font-semibold text-redbg mb-3">Our Vision</h3>
          <p className="text-gray-600 text-base leading-relaxed">
            To be the most trusted regional insurance partner, known for 
            financial stability, innovation, and outstanding customer service.
          </p>
        </div>

        {/* Values Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <img
            src="https://img.icons8.com/ios-filled/100/handshake.png"
            alt="Our Values"
            className="mx-auto mb-4 w-16 h-16"
          />
          <h3 className="text-xl font-semibold text-redbg mb-3">Our Values</h3>
          <p className="text-gray-600 text-base leading-relaxed">
            Integrity, excellence, and teamwork guide everything we do, 
            ensuring our clients’ trust and long-term success.
          </p>
        </div>
      </div>
      {/* Leadership & Governance Section */}
<div className="max-w-6xl mx-auto px-6 mt-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
  {/* Left - Leader Image */}
  <div className="flex justify-center md:justify-start">
    <img
      src="https://plus.unsplash.com/premium_photo-1661484754465-a186692d78a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGVhZGVyc2hpcCUyMHRlYW18ZW58MHx8MHx8fDA%3D"
      alt="Company Leadership"
      className="rounded-2xl shadow-lg w-full max-w-lg object-cover h-72 sm:h-80 md:h-[420px]"
    />
  </div>

  {/* Right - Text Content */}
  <div>
    <h2 className="text-3xl md:text-4xl font-bold text-redbg mb-4">
      Leadership & Governance
    </h2>
    <p className="text-gray-700 text-base leading-relaxed mb-6">
      Our leadership team forms the foundation of our corporate values —
      integrity, passion, teamwork, and excellence. Guided by seasoned
      professionals, Orienta Holdings continues to uphold the highest
      standards of governance, ensuring trust and transparency in everything
      we do.
    </p>
   <Link
  to="/leadership"
  className="inline-block bg-redbg text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition"
>
  Meet the Team
</Link>
  </div>
</div>
<Branches/>
    </section>
  );
};

export default About;
