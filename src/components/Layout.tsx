import { Link } from "react-router-dom";
import { styles } from "../components/Styles";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (

    /*
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
    */

    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>The Code Gazette</h1>
        <nav style={styles.nav}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/portfolio" style={styles.link}>Portfolio</Link>
          <Link to="/blog" style={styles.link}>Blog</Link>
        </nav>
      </header>

      <main style={styles.main}>
        {children}
      </main>

      <footer style={styles.footer}>
        <p>&copy; 2024 The Code Gazette. All rights reserved.</p>
      </footer>
    </div>

  );
}