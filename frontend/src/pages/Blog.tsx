import React from "react";
import FullBlog from "../components/FullBlog";
import { useParams } from "react-router-dom";

const Blog = () => {
  let param = useParams();
  console.log(param);
  return (
    <div>
      <FullBlog id={param.id}></FullBlog>
    </div>
  );
};

export default Blog;
