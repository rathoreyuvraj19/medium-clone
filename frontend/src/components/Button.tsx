import React, { MouseEventHandler } from "react";

interface ButtonProps {
  title: string;
  onSubmit: MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({ title, onSubmit }) => {
  return (
    <div className="flex justify-center items-center content-center">
      <button
        onClick={onSubmit}
        className="w-4/5 bg-slate-900 text-center  text-white mt-5 font-extrabold rounded-md p-2"
      >
        {title}
      </button>
    </div>
  );
};
