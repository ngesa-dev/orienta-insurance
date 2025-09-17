// src/constants/index.js
import { FaHeartbeat, FaCar, FaGlobe, FaHome, FaUserShield } from "react-icons/fa";
export const insuranceCovers = [
  {
    name: "Life Insurance",
    path: "/life",
    icon: FaUserShield,
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    description:
      "Secure your family's financial future with tailored life protection.",
  },
  {
    name: "Health Insurance",
    path: "/health",
    icon: FaHeartbeat,
    image:
      "https://images.unsplash.com/photo-1588776814546-ec7b91e3b6d7?auto=format&fit=crop&w=800&q=80",
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
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
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
