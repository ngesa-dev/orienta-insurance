import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center px-4">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
        Oops! Page not found
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
        The page you are looking for doesn’t exist or has been moved.  
        Don’t worry, let’s get you back on track.
      </p>
      <Link
        to="/"
        className="bg-red-600 text-white px-6 py-3 rounded-lg shadow hover:bg-red-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
