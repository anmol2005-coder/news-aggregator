import React from "react";
import { useEffect, useState } from "react";
import { Moon, Sun, Bookmark, BookOpenTextIcon } from "lucide-react";

const Navbar = ({ setShowBookmarks }) => {
  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");

  // ✅ Safe user parsing (prevents crash)
  const user = (() => {
    try {
      return JSON.parse(localStorage.getItem("user"));
    } catch {
      return null;
    }
  })();

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  // ✅ Logout function (clean)
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // optional: clear bookmarks if needed
    // localStorage.removeItem("bookmarks");

    window.location.reload();
  };

  return (
    <nav className="backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 sticky top-0 z-50 shadow-sm border-b border-gray-200 dark:border-gray-800">
      <div className="mx-auto flex justify-between items-center p-4">
        
        {/* Logo */}
        <h1
          className="text-2xl font-bold cursor-pointer ml-2 flex items-center gap-2"
          onClick={() => setShowBookmarks(false)}
        >
          <BookOpenTextIcon /> Newsly
        </h1>

        <div className="flex gap-4 items-center mr-2">
          
          {/* 👤 User Info */}
          {user ? (
            <span className="text-sm font-medium">
              👋 {user.name}
            </span>
          ) : (
            <span className="text-sm opacity-70">
              Not logged in
            </span>
          )}

          {/* ⭐ Bookmarks */}
          <button
            onClick={() => setShowBookmarks(true)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            <Bookmark />
          </button>

          {/* 🌙 Dark Mode */}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            {dark ? <Sun /> : <Moon />}
          </button>

          {/* 🚪 Logout */}
          {user && (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;