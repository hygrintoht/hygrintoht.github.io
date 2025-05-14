import Layout from "../components/Layout";
import { styles } from "../components/Styles";

export default function About() {
  return (
    <Layout>
      <section style={styles.section}>
        <h1 style={styles.sectionHeading}>Me, as an explanation (T_T)</h1>
        <p style={styles.paragraph}>My name is Francis Santonia. I am a Game Developer and a ("pending")graduate of DLSU - BS-IET-GD. I am currently trying to explore ways to appreciate and understand the inner workings of video games while honing my skills. I like how games can be used as a medium to tell stories and put people through challenges.</p>
        <p style={styles.paragraph}>I like watching movies/anime, baking, cycling, reading webcomics/manga, and playing guitar. I am an avid indie games player, that loves roguelikes and unique experiences that push the boundaries of game design.</p>
        <p style={styles.paragraph}>I currently do not know what career path I should take as I am very naive due to the numerous roles that can be taken, however, I am more siding with the programming and the technical side rather than the creative side.</p>
      </section>

      <section style={styles.section}>
        <h1 style={styles.sectionHeading}>Skill sets</h1>
        <p style={styles.paragraph}>Programming Languages: C#, C++, JavaScript, Python</p>
        <p style={styles.paragraph}>Game Engines: Unity, Unreal Engine, Godot</p>
        <p style={styles.paragraph}>Libraries & Frameworks: React, Phaser, OpenGL, DirectX11</p>
        <p style={styles.paragraph}>Tools: Git, GitHub, NodeJS, Blender(only for adjusting/no full experience)</p>
        <p style={styles.paragraph}>Other: SQL, Vuforia Engine</p>
      </section>
    </Layout>
  );
}