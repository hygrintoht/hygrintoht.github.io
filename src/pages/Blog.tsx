import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const posts = ["2024-03-31", "2024-04-01"]; 

export default function Blog() {
    return (
      <Layout>
        <h1>Blog</h1>
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