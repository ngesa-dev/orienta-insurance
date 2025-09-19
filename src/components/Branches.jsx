import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaBuilding, FaEnvelope } from "react-icons/fa";

const Branches = () => {
  const branches = [
  {
    city: "Nairobi Branch",
    building: "Orienta Plaza, 4th Floor",
    landmark: "Opposite Kenyatta National Hospital",
    pobox: "P.O. Box 12345-00100 Nairobi, Kenya",
    phone: "+254 711 123 456",
  },
  {
    city: "Mombasa Branch",
    building: "Coastal Towers, 2nd Floor",
    landmark: "Near Nyali Bridge",
    pobox: "P.O. Box 54321-80100 Mombasa, Kenya",
    phone: "+254 722 987 654",
  },
  {
    city: "Kisumu Branch",
    building: "Lakeview Building, 1st Floor",
    landmark: "Next to Kisumu City Mall",
    pobox: "P.O. Box 67890-40100 Kisumu, Kenya",
    phone: "+254 733 654 321",
  },
  {
    city: "Eldoret Branch",
    building: "Highlands Towers, 3rd Floor",
    landmark: "Opposite Rupa’s Mall",
    pobox: "P.O. Box 11223-30100 Eldoret, Kenya",
    phone: "+254 701 456 789",
  },
  {
    city: "Nakuru Branch",
    building: "Midtown Plaza, Ground Floor",
    landmark: "Next to Westside Mall",
    pobox: "P.O. Box 33445-20100 Nakuru, Kenya",
    phone: "+254 702 987 123",
  },
  {
    city: "Nyeri Branch",
    building: "Mount Kenya Towers, 2nd Floor",
    landmark: "Near Nyeri Golf Club",
    pobox: "P.O. Box 55667-10100 Nyeri, Kenya",
    phone: "+254 703 321 987",
  },
];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">
          Visit Us at Our Branches
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-4">
          We’re closer to you than you think. Walk into any of our branches for personalized assistance.
        </p>
      </div>

      {/* Branch Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {branches.map((branch, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-redbg mb-4">{branch.city}</h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <FaBuilding className="text-redbg" />
                <p>{branch.building}</p>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-redbg" />
                <p>{branch.landmark}</p>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-redbg" />
                <p>{branch.pobox}</p>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-redbg" />
                <p>{branch.phone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Branches;
