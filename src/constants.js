// src/constants/index.js
import { FaHeartbeat, FaCar, FaGlobe, FaHome, FaUserShield } from "react-icons/fa";
export const insuranceCovers = [
  {
    name: "Life Insurance",
    path: "/life",
    icon: FaUserShield,
    image:
      "https://plus.unsplash.com/premium_photo-1681910241563-a3bd7a4c2ec9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhbWlseXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Secure your family's financial future with tailored life protection.",
  },
  {
    name: "Health Insurance",
    path: "/health",
    icon: FaHeartbeat,
    image:
      "https://plus.unsplash.com/premium_photo-1682141097519-366cca5659d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGVhbHRoY2FyZSUyMGFuZCUyMG1lZGljaW5lfGVufDB8fDB8fHww",
    description:
      "Comprehensive medical coverage for peace of mind and wellbeing.",
  },
  {
    name: "Motor Insurance",
    path: "/motor",
    icon: FaCar,
    image:
       "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    description:
      "Drive confidently with policies covering accidents, theft, and damages.",
  },
  {
    name: "General Insurance",
    path: "/general",
    icon: FaHome,
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
    description:
      "Protect property, business, and assets against unforeseen risks.",
  },
  {
    name: "Travel Insurance",
    path: "/travel",
    icon: FaGlobe,
    image:
      "https://plus.unsplash.com/premium_photo-1681487906725-ecd65970ac66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Stay covered during trips with medical, cancellation, and emergency support.",
  },
];

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Covers", path: "/covers" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];
