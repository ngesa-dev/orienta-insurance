import React from "react";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import CtaBanner from "../components/CtaBanner";

const Home = () => {
  return (
    <main>
      <Hero />
      <Stats/>
      <Services/>
      <WhyChooseUs/>
      <Testimonials/>
      <CtaBanner/>
      {/* More sections will go here later */}
    </main>
  );
};

export default Home;
