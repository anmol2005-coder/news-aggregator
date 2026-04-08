import React from "react";
import { useEffect, useState } from "react";
import { Search, X } from "lucide-react";

const SearchBar = ({ setQuery, category }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery(text);
    }, 500);

    return () => clearTimeout(timer);
  }, [text]);

  const isSearching = text.trim().length > 0;

  const label = isSearching
    ? `Showing results for "${text}"`
    : `Top headlines • ${category.charAt(0).toUpperCase() + category.slice(1)}`;

  return (
    <div className="flex flex-col items-center mt-8 px-4 gap-3">
      {/* Search Box */}
      <div className="relative w-full max-w-2xl flex items-center">
        <Search
          size={20}
          className="absolute left-4 text-gray-500 pointer-events-none z-10"
        />

        <input
          type="text"
          placeholder="Search news worldwide..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="
            w-full
            py-3
            pl-12
            pr-10
            rounded-full
            border
            border-gray-300
            dark:border-gray-700
            bg-white dark:bg-gray-900
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            shadow-sm
          "
        />

        {text && (
          <X
            size={18}
            onClick={() => {
              setText("");
              setQuery("");
            }}
            className="absolute right-4 cursor-pointer text-gray-500 hover:text-gray-800"
          />
        )}
      </div>

      {/* Result Badge */}
      <div
        className="
          px-4 py-1.5
          rounded-full
          text-sm
          font-medium
          bg-gray-200/70
          dark:bg-gray-800/70
          backdrop-blur-md
          shadow-sm
          transition
        "
      >
        {label}
      </div>
    </div>
  );
};

export default SearchBar;
