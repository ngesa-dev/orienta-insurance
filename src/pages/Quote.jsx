import { useState } from "react";

const Quote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    insuranceType: "",
    coverage: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Insurance Quote Request:", formData);
    alert("Your insurance quote request has been submitted!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      insuranceType: "",
      coverage: "",
      message: "",
    });
  };

  return (
    <div className="bg-whitebg min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-redbg mb-6 text-center">
          Get Your Insurance Quote
        </h1>
        <p className="text-blacktext text-center mb-8">
          Secure your future today. Fill out the form below and our Orienta
          Insurance team will provide you with a personalized quote.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-blacktext font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-redbg"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-blacktext font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-redbg"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-blacktext font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-redbg"
            />
          </div>

          {/* Insurance Type */}
          <div>
            <label className="block text-blacktext font-medium mb-2">
              Type of Insurance
            </label>
            <select
              name="insuranceType"
              value={formData.insuranceType}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-redbg"
            >
              <option value="">-- Select Insurance Type --</option>
              <option value="health">Health Insurance</option>
              <option value="car">Car Insurance</option>
              <option value="home">Home Insurance</option>
              <option value="life">Life Insurance</option>
              <option value="business">Business Insurance</option>
            </select>
          </div>

          {/* Coverage Amount */}
          <div>
            <label className="block text-blacktext font-medium mb-2">
              Coverage Amount (in KES)
            </label>
            <input
              type="number"
              name="coverage"
              value={formData.coverage}
              onChange={handleChange}
              required
              placeholder="e.g. 500,000"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-redbg"
            />
          </div>

          {/* Additional Details */}
          <div>
            <label className="block text-blacktext font-medium mb-2">
              Additional Information
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more about your insurance needs..."
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-redbg"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-redbg text-whitetext font-semibold py-3 rounded-lg hover:opacity-90 transition"
          >
            Request Quote
          </button>
        </form>
      </div>
    </div>
  );
};

export default Quote;
