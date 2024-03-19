import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin.tsx";
import Signup from "./pages/Signup.tsx";
import Blogs from "./pages/Blogs.tsx";
import Blog from "./pages/Blog.tsx";
import Publish from "./pages/Publish.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin></Signin>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/blog/:id" element={<Blog></Blog>}></Route>
          <Route path="/publish" element={<Publish></Publish>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
