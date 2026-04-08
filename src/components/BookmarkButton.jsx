import React from "react";

const BookmarkButton = ({ article }) => {
  const saveBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    bookmarks.push(article);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    alert("Bookmarked!");
  };

  return (
    <button
      onClick={saveBookmark}
      className="bg-yellow-400 px-2 py-1 rounded text-sm"
    >
      Bookmark
    </button>
  );
};

export default BookmarkButton;
