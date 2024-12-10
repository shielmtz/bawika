
import React from "react";
import { Link } from "react-router-dom";



const Card = ({ title, description, imgSrc, isLocked }) => {
  return (
    <div className="relative bg-[#fee799] rounded-lg shadow-md p-4 w-64">
      <img
        src={imgSrc}
        alt={title}
        className="rounded-t-lg w-full h-32 object-cover"
      />
      {isLocked && (
        <div className="absolute inset-0 bg-gray-800 bg-opacity-60 flex justify-center items-center rounded-lg">
          <span className="text-white text-xl font-bold">🔒</span>
        </div>
      )}
      <div className="mt-2">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
