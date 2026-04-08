import React from "react";
import { useEffect, useState } from "react";
import { Moon, Sun, Bookmark, BookOpenTextIcon } from "lucide-react";

const Navbar = ({ setShowBookmarks }) => {
  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <nav className="backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 sticky top-0 z-50 shadow-sm border-b border-gray-200 dark:border-gray-800">
      <div className="mx-auto flex justify-between items-center p-4">
        <h1
          className="text-2xl font-bold cursor-pointer ml-2 flex items-center gap-2"
          onClick={() => setShowBookmarks(false)}
        >
          <BookOpenTextIcon /> Newsly
        </h1>

        <div className="flex gap-4 mr-2">
          <button
            onClick={() => setShowBookmarks(true)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            <Bookmark />
          </button>

          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            {dark ? <Sun /> : <Moon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
