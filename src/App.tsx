import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Post from "./pages/Post";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/blog" element={<Blog />} />
      {/* Dynamic route for blog posts */}
      {/* The postId parameter will be used to fetch the correct markdown file */}
      <Route path="/post/:postId" element={<Post />} />
    </Routes>
  );
}