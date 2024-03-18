import React, { ChangeEvent } from "react";

interface InputProps {
  id: string;
  title: string;
  subtitle: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ id, title, subtitle, type, onChange }: InputProps) => {
  return (
    <div className="flex flex-col justify-center items-center content-center">
      <div className="w-4/5 mt-5 font-bold">{title}</div>
      <input
        id={id}
        className="w-4/5 p-1 mt-2 border rounded-md "
        placeholder={subtitle}
        type={type || "text"}
        onChange={onChange}
      ></input>
    </div>
  );
};
