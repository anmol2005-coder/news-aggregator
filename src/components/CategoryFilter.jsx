import React from "react";
import { useState } from "react";

const categories = [
  "all",
  "general",
  "business",
  "technology",
  "sports",
  "health",
  "science",
  "entertainment",
];

const CategoryFilter = ({ setCategory }) => {
  const [active, setActive] = useState("general");

  const handleClick = (cat) => {
    setActive(cat);
    setCategory(cat);
  };

  return (
    <div className="w-full mt-6 px-3 sm:px-6">
      {/* Container */}
      <div
        className="
          flex
          gap-3
          overflow-x-auto
          sm:flex-wrap
          sm:overflow-visible
          justify-start
          sm:justify-center
          pb-2
          scrollbar-hide
        "
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleClick(cat)}
            className={`
              flex-shrink-0
              px-5
              py-2
              rounded-full
              text-sm
              font-medium
              transition
              duration-200
              whitespace-nowrap
              
              ${
                active === cat
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              }
            `}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
