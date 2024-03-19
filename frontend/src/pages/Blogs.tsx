import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { BACKEND_URL } from "../config";
import axios from "axios";
import AppBar from "../components/AppBar";
import { useNavigate } from "react-router-dom";
import Skeleton from "../components/Skeleton";

const Blogs = () => {
  interface Blog {
    title: string;
    content: string;
    id: string;
    author: {
      name: string;
    };
  }
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const headers = {
          headers: { Authorization: localStorage.getItem("token") },
        };
        const res = await axios.get(
          `${BACKEND_URL}/api/v1/user/blog/bulk`,
          headers
        );
        if (res) {
          console.log(res.data.response);
          setBlogs(res.data.response);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const navigate = useNavigate();
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center">
        <Skeleton></Skeleton>
        <Skeleton></Skeleton>
        <Skeleton></Skeleton>
      </div>
    );
  }

  function handleClick(id: string) {
    console.log(id);
    navigate(`/blog/${id}`);
  }
  return (
    <div>
      <AppBar></AppBar>
      <div className="p-4 flex justify-center">
        <div className="flex flex-col justify-center max-w-5xl">
          {blogs.map((blog, key) => {
            return (
              <BlogCard
                key={key}
                id={blog.id}
                authorName={blog.author.name}
                publishedDate={"12 Dec 2023"}
                content={blog.content}
                title={blog.title}
                onClick={handleClick}
              ></BlogCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
