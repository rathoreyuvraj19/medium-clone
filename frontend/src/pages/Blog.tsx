import React from "react";
import FullBlog from "../components/FullBlog";
import { useParams } from "react-router-dom";
import AppBar from "../components/AppBar";

const Blog = () => {
  let param = useParams();
  console.log(param);
  return (
    <div>
      <AppBar></AppBar>
      <FullBlog id={param.id}></FullBlog>
    </div>
  );
};

export default Blog;
