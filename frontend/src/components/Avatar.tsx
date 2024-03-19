import React from "react";

const Avatar = ({ name }: { name: string }) => {
  return (
    <div className="mr-2">
      <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="font-medium text-gray-600 dark:text-gray-300">
          {name.split(" ").reduce((ans, val) => {
            return ans + val[0];
          }, "")}
        </span>
      </div>
    </div>
  );
};

export default Avatar;
