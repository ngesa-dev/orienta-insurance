import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaShieldAlt } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks, insuranceCovers } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const menuRef = useRef();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (toggle && menuRef.current && !menuRef.current.contains(event.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [toggle]);

  return (
    <header className="bg-whitebg sticky top-0 z-50 shadow">
      <nav className="flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <FaShieldAlt className="text-redbg text-2xl" />
          <span className="text-redbg font-bold text-xl">
            Orienta Holdings
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium transition ${
                location.pathname === link.path
                  ? "text-redbg"
                  : "text-blacktext hover:text-redbg"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/quote"
            className="bg-redbg text-whitetext px-4 py-2 rounded-md font-medium hover:opacity-90 transition"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {toggle ? (
            <FiX
              className="text-blacktext text-2xl cursor-pointer"
              onClick={() => setToggle(false)}
            />
          ) : (
            <FiMenu
              className="text-blacktext text-2xl cursor-pointer"
              onClick={() => setToggle(true)}
            />
          )}
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {toggle && (
        <div
          ref={menuRef}
          className="absolute top-full left-0 w-full bg-whitebg shadow px-6 py-4 space-y-4 z-40 md:hidden"
        >
          {/* Nav Links */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block font-medium ${
                location.pathname === link.path
                  ? "text-redbg"
                  : "text-blacktext hover:text-redbg"
              }`}
              onClick={() => setToggle(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Divider */}
          <hr className="border-gray-300 my-2" />

          {/* Insurance Plans (mobile only) */}
          <h2 className="text-redbg font-semibold">Insurance Plans</h2>
          <div className="flex flex-col gap-2">
            {insuranceCovers.map((cover) => (
              <Link
                key={cover.name}
                to={cover.path}
                className={`block font-medium ${
                  location.pathname === cover.path
                    ? "text-redbg"
                    : "text-blacktext hover:text-redbg"
                }`}
                onClick={() => setToggle(false)}
              >
                {cover.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            to="/quote"
            className="block text-center bg-redbg text-whitetext px-4 py-2 rounded-md font-medium hover:opacity-90 transition mt-4"
            onClick={() => setToggle(false)}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
