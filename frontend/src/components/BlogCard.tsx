import React from "react";
import Avatar from "./Avatar";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  id: string;
  publishedDate: string;
  onClick: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: string
  ) => void; // Include id for reference
}

const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
  id,
  onClick,
}: BlogCardProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onClick(e, id); // Pass id along with the event
  };

  return (
    <div className="border-b-2 p-4 cursor-pointer" onClick={handleClick}>
      <div className="flex flex-row items-baseline">
        <Avatar name={authorName}></Avatar>
        <div className="font-medium">{authorName}</div>
        <div className="ml-2 text-slate-500">{publishedDate}</div>
      </div>
      <div className="font-extrabold text-5xl">{title}</div>
      <div className="mt-5 text-slate-800">
        {content.length <= 200 ? content : content.slice(0, 200) + "..."}
      </div>
      <div className="font-thin">{`${Math.ceil(
        content.length / 100
      )} min read`}</div>
    </div>
  );
};

export default BlogCard;
