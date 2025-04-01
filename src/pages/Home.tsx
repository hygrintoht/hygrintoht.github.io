import { Link } from "react-router-dom";

const posts = ["2024-03-31", "2024-04-01"]; 

export default function Home() {
  return (
    <div>
      <h1>My Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post}>
            <Link to={`/post/${post}`}>{post.replace("-", " ")}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}