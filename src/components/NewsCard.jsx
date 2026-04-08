import React from "react";
import { useEffect, useState } from "react";
import { Bookmark, BookmarkCheck } from "lucide-react";

const NewsCard = ({ article }) => {
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

    setBookmarked(bookmarks.some((b) => b.url === article.url));
  }, [article.url]);

  const toggleBookmark = () => {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

    if (bookmarked) {
      bookmarks = bookmarks.filter((b) => b.url !== article.url);
    } else {
      bookmarks.push(article);
    }

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    setBookmarked(!bookmarked);
  };

  return (
    <div className="rounded-2xl overflow-hidden bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition hover:-translate-y-1">
      <img
        src={article.urlToImage || "https://via.placeholder.com/400"}
        alt="news"
        className="h-52 w-full object-cover"
      />

      <div className="p-5 flex flex-col gap-3">
        <h2 className="font-semibold text-lg leading-tight">{article.title}</h2>

        <p className="text-sm opacity-70 line-clamp-3">{article.description}</p>

        <div className="flex justify-between items-center mt-2">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-medium hover:underline"
          >
            Read →
          </a>

          <button
            onClick={toggleBookmark}
            className={`p-2 rounded-full transition ${
              bookmarked
                ? "bg-green-100 dark:bg-green-900"
                : "hover:bg-gray-200 dark:hover:bg-gray-800"
            }`}
          >
            {bookmarked ? <BookmarkCheck size={20} /> : <Bookmark size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
