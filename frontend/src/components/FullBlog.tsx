import React, { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

const FullBlog = ({ id }: { id: string | undefined }) => {
  interface BlogProps {
    title: string;
    content: string;
    authorId: string;
    author: {
      name: string;
    };
  }
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState<BlogProps | null>(null);
  const headers = {
    headers: { Authorization: localStorage.getItem("token") },
  };
  useEffect(() => {
    async function fetchBlog() {
      try {
        setLoading(true);
        const res = await axios.get(
          `${BACKEND_URL}/api/v1/user/blog/get/${id}`,
          headers
        );
        console.log(res.data);
        setBlog(res.data);
        setLoading(false);
      } catch (error) {
        alert("Something Went Wrong");
      }
    }
    fetchBlog();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-row h-screen p-6 mt-20">
      <div className="w-8/12 px-10 ">
        <div className="font-extrabold text-5xl pb-2">{blog?.title}</div>
        <div className="text-slate-500 py-2">Posted on 2 Dec 2023</div>
        <div className="text-xl">{blog?.content}</div>
      </div>
      <div className="w-4/12 ">
        <div className="font-semibold">Author</div>
        <div className="text-2xl font-bold">{blog?.author.name}</div>
        <div className="text-slate-500">
          Random talk about the author, discussing about the author ability to
          catch user's attension
        </div>
      </div>
    </div>
  );
};

export default FullBlog;
