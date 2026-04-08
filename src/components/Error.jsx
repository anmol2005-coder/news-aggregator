import React from "react";

const Error = ({ message }) => {
  return (
    <p className="text-center text-red-500 font-semibold mt-4">{message}</p>
  );
};

export default Error;
