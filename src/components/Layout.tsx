import { Link } from "react-router-dom";
import { styles } from "../components/Styles";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>The Tiny Corner</h1>
          <nav style={styles.nav}>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/about" style={styles.link}>About</Link>
            <Link to="/portfolio" style={styles.link}>Portfolio</Link>
            <Link to="/blog" style={styles.link}>Blog</Link>
          </nav>
        </header>

        <main style={styles.main}>
          {children}
        </main>

        <footer style={styles.footer}>
          <p>&copy; 2025 All rights reserved. :D</p>
        </footer>
      </div>
    </div>
  );
}