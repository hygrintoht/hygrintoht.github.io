import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const posts = ["1970-01-01", "2024-04-01"]; 

export default function Blog() {
    return (
      <Layout>
        <h1>Blog</h1>
        <p>Coming Soon</p>
        <ul>
          {posts.map((post) => (
            <li key={post}>
              <Link to={`/post/${post}`}>{post.replace("-", " ")}</Link>
            </li>
          ))}
        </ul>
      </Layout>
    );
  }