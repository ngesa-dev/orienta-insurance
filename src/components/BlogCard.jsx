import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ id, title, excerpt, image }) => {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <img
        src={image}
        alt={title}
        className="rounded-t-2xl w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">{excerpt}</p>
        <Link
          to={`/blog/${id}`}
          className="inline-block mt-4 px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition"
        >
          Read More
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
