import { Link } from "react-router-dom";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/portfolio" style={{ marginRight: "10px" }}>Portfolio</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <main style={{ padding: "20px" }}>{children}</main>
    </div>
  );
}