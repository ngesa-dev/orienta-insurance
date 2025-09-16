import { Link, useLocation } from "react-router-dom";
import { insuranceCovers } from "../constants";

const CoversBar = () => {
  const location = useLocation();

  return (
    // Hidden on mobile, visible on md+ screens
    <section className="hidden md:block bg-redbg sticky top-[64px] z-40 shadow-md">
      <div className="flex justify-center gap-12 px-4 py-3">
        {insuranceCovers.map((cover) => (
          <Link
            key={cover.name}
            to={cover.path}
            className={`font-medium transition ${
              location.pathname === cover.path
                ? "text-blacktext underline"
                : "text-whitetext hover:text-blacktext"
            }`}
          >
            {cover.name}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CoversBar;
