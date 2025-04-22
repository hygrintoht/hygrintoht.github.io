import { Link } from "react-router-dom";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      justifyContent: "flex-start", 
      minHeight: "100vh",
      width: "100%",
    }}>
      <nav style={{
        width: "100%",
        padding: "15px 0",
        textAlign: "center",
        borderBottom: "1px solid #ddd",
        position: "fixed",
        top: 0,
        left: 0,
        background: "white",
        zIndex: 1000,
      }}>
        <Link to="/" style={{ margin: "0 15px" }}>Home</Link>
        <Link to="/portfolio" style={{ margin: "0 15px" }}>Portfolio</Link>
        <Link to="/blog" style={{ margin: "0 15px" }}>Blog</Link>
      </nav>

      <main style={{
        marginTop: "80px",
        width: "90%",
        maxWidth: "70vw",
        textAlign: "left",
        alignSelf: "center",
      }}>
        {children}
      </main>
    </div>
  );
}