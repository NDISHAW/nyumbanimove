import React from "react";

const Card = (props) => {
  return (
    <div className="card pb-4">
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-xl dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10">
          <h5 className="mb-1 text-2xl font-medium text-gray-900 dark:text-white mt-3">
            {props.title}
          </h5>
          <img
            className="mb-3 w-24 h-24 rounded-full shadow-lg flex px-4 pt-4"
            src={props.img}
            alt="card pic"
          />

          <span className="text-sm text-gray-500 dark:text-gray-400 px-2">
            {props.description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
