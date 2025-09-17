import React from "react";

const leaders = [
  {
    name: "John Mwangi",
    title: "Chief Executive Officer",
    img: "https://images.unsplash.com/photo-1603415526960-f7e0328b5a07?q=80&w=800&auto=format&fit=crop",
    bio: "With over 20 years in the insurance sector, John leads Orienta with a vision for innovation, growth, and financial stability."
  },
  {
    name: "Grace Achieng",
    title: "Chief Financial Officer",
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800&auto=format&fit=crop",
    bio: "Grace ensures robust financial strategies, guiding the company with transparency and strong fiscal management."
  },
  {
    name: "Michael Otieno",
    title: "Chief Operations Officer",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
    bio: "Michael drives operational excellence and customer-focused innovation, enhancing efficiency across all divisions."
  },
  {
    name: "Sarah Njeri",
    title: "Head of Risk & Compliance",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800&auto=format&fit=crop",
    bio: "Sarah oversees risk management and compliance, ensuring Orienta upholds the highest governance standards."
  }
];

const Leadership = () => {
  return (
    <section className="bg-graybg py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-redbg mb-10 text-center">
          Our Leadership Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 text-center"
            >
              <img
                src={leader.img}
                alt={leader.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow"
              />
              <h3 className="text-xl font-semibold text-blacktext">
                {leader.name}
              </h3>
              <p className="text-redbg font-medium mb-3">{leader.title}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{leader.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
