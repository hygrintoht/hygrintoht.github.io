import { styles_home } from "../components/Styles";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={styles_home.container}>
      <div style={styles_home.wrapper as React.CSSProperties}>
        <div style={styles_home.nav as React.CSSProperties}>
          <Link to="/" style={styles_home.link}>Home</Link>
          <Link to="/about" style={styles_home.link}>About</Link>
          <Link to="/portfolio" style={styles_home.link}>Portfolio</Link>
          <Link to="/blog" style={styles_home.link}>Blog</Link>
        </div>

        <div style={styles_home.box as React.CSSProperties}>
          <h1 style={styles_home.heading}>Oh, Hey there!</h1>
          <p style={styles_home.sub}>Welcome to my tiny corner in the interwebs</p>
        </div>
      </div>
    </div>
  );
}