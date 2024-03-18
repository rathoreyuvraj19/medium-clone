import React from "react";
import { Link, useNavigate } from "react-router-dom";

interface HeadingProps {
  title: string;
  subtitle: string;
  link: string;
  jumpto: string;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, link, jumpto }) => {
  // const navigate = useNavigate();
  // // function handleClick() {
  // //   console.log("hello");
  // //   navigate(`/${jumpto}`);
  // // }
  return (
    <div className="flex flex-col items-center">
      <div className="font-bold text-3xl text-nowrap ">{title}</div>
      <div className="text-slate-400">
        {subtitle}{" "}
        <Link className="ml-1 hover:text-blue-500 underline" to={`/${jumpto}`}>
          {link}
        </Link>
      </div>
    </div>
  );
};

export default Heading;
