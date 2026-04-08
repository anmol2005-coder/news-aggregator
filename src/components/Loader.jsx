import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center mt-20">
      <div className="h-14 w-14 rounded-full border-4 border-gray-300 border-t-black dark:border-t-white animate-spin"></div>
    </div>
  );
};

export default Loader;
