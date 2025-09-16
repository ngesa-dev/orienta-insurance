// src/constants/index.js
import { FaHeartbeat, FaCar, FaGlobe, FaHome, FaUserShield } from "react-icons/fa";

export const insuranceCovers = [
  {
    name: "Life Insurance",
    path: "/life",
    icon: FaUserShield,
    description: "Secure your family's financial future with tailored life protection.",
  },
  {
    name: "Health Insurance",
    path: "/health",
    icon: FaHeartbeat,
    description: "Comprehensive medical coverage for peace of mind and wellbeing.",
  },
  {
    name: "Motor Insurance",
    path: "/motor",
    icon: FaCar,
    description: "Drive confidently with policies covering accidents, theft, and damages.",
  },
  {
    name: "General Insurance",
    path: "/general",
    icon: FaHome,
    description: "Protect property, business, and assets against unforeseen risks.",
  },
  {
    name: "Travel Insurance",
    path: "/travel",
    icon: FaGlobe,
    description: "Stay covered during trips with medical, cancellation, and emergency support.",
  },
];


export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Covers", path: "/covers" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];


