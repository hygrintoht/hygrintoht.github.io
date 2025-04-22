import { Link } from "react-router-dom";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch", // Ensure everything stretches to the full width
      justifyContent: "flex-start", // Make sure content starts from the TOP
      minHeight: "100vh",
      width: "100%",
    }}>
      {/* Navbar */}
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

      {/* Main Content */}
      <main style={{
        marginTop: "80px", // Push below navbar
        width: "90%",
        maxWidth: "70vw",
        textAlign: "left", // Keep text left-aligned
        alignSelf: "center", // Center content horizontally
      }}>
        {children}
      </main>
    </div>
  );
}