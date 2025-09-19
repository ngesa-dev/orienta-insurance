import React from "react";
import BlogCard from "../components/BlogCard";

const blogs = [
  {
    id: 1,
    title: "Understanding Life Insurance",
    excerpt:
      "Learn the basics of life insurance and why it matters for your family’s future...",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80", // family/life
  },
  {
    id: 2,
    title: "Smart Financial Planning",
    excerpt:
      "Discover how to plan your finances better and secure your tomorrow with simple steps...",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80", // finance
  },
  {
    id: 3,
    title: "Motor Insurance Explained",
    excerpt:
      "Everything you need to know about protecting your vehicle and getting quick claims...",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80", // car
  },
  {
    id: 4,
    title: "Health Insurance Basics",
    excerpt:
      "Understand how health insurance works and why it’s essential for managing medical expenses...",
    image:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhbHRofGVufDB8fDB8fHww", // hospital/health
  },
  {
    id: 5,
    title: "Retirement Planning 101",
    excerpt:
      "Start preparing for a financially secure retirement with smart saving and investment strategies...",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80", // older person/retirement
  },
  {
    id: 6,
    title: "Travel Insurance Explained",
    excerpt:
      "Ensure safe and stress-free journeys with travel insurance that covers unexpected events abroad...",
    image:
      "https://images.unsplash.com/photo-1526779259212-939e64788e3c?auto=format&fit=crop&w=800&q=80", // travel
  },
  {
    id: 7,
    title: "Home Insurance Guide",
    excerpt:
      "Protect your property and belongings with comprehensive home insurance coverage...",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80", // home
  },
  {
    id: 8,
    title: "Building Emergency Funds",
    excerpt:
      "Learn why an emergency fund is critical and how to build one step by step...",
    image:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // savings jar
  },
  {
    id: 9,
    title: "Business Insurance Essentials",
    excerpt:
      "Safeguard your business against risks with the right commercial insurance policies...",
    image:
      "https://images.unsplash.com/photo-1637763723578-79a4ca9225f7?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // business/office
  },
];


const Blog = () => {
  return (
    <>
      <header className="text-center py-10 bg-gray-100 dark:bg-gray-900">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">
          Insights on Insurance & Finance
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Stay informed with expert articles that simplify insurance and
          financial decisions.
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </main>
    </>
  );
};

export default Blog;
