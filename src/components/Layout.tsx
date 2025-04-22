import { Link } from "react-router-dom";
import { styles } from "../components/Styles";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (

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