import Layout from "../components/Layout";
import { styles } from "../components/Styles";

const gameProjects = [
  {
    title: "Leaf it to Us!",
    description: "A forest learning exploration serious game used as an education aid.",
    link: "#",
    imgSrc: "/projects/LeafIt.png",
  },
  {
    title: "Project Verenica",
    description: "A rhythm game with RPG elements.",
    link: "https://moestudios.itch.io/verenica",
    imgSrc: "/projects/Verenica.png",
  },
  {
    title: "Noryk's Night Time Radio",
    description: "An audio engineer simulator game.",
    link: "https://hygrintoht.itch.io/noryks-night-time-radio",
    imgSrc: "/projects/Noryk.png",
  },
];

const technicalProjects = [
  {
    title: "Simple DirectX Game Engine",
    description: "Created a game engine from scratch using DirectX11, ReactPhysics3D as physics engine, and Dear ImGui as UI.",
    link: "https://github.com/hygrintoht/SimpleDirectXEngine",
  },
  {
    title: "Tap Titans Clans Recreation",
    description: "Tried to recreate clans, clan combat system, and data management using NodeJS and SQL.",
    link: "https://github.com/hygrintoht/TapTitansClansRecreation",
  },
  {
    title: "Realtime Scene Viewer",
    description: "Multithreaded scene loader that loads multiple meshes in a scene all at once, used OpenGL and tinyobj loader.",
    link: "https://github.com/hygrintoht/RealtimeSceneViewer",
  },
  {
    title: "Pokemon AR App Battles",
    description: "Created Pokemon battles in AR using Vuforia Engine for Unity.",
    link: "https://github.com/drei096/arvr_project",
  },
];

export default function Portfolio() {
  return (
    <Layout>
      <h1>Portfolio</h1>
      <p><b>Some stuff I worked on.</b></p>
      <section style={styles.section}>
        <h1 style={styles.sectionHeading}>Game Projects</h1>
        <div style={styles.grid}>
          {gameProjects.map((project) => (
            <div key={project.title} style={styles.card}>
              <h2 style={styles.cardTitle}>
                <a href={project.link} style={styles.cardLink}>
                  {project.title}
                </a>
              </h2>
              <p style={styles.cardDescription}>
                {project.description}
              </p>
              <img src={project.imgSrc} alt={project.title} style={styles.cardImage} />
              </div>
          ))}
        </div>
      </section>
      
      <section style={styles.section}>
        <h1 style={styles.sectionHeading}>Technical Projects</h1>
        <div style={styles.grid}>
          {technicalProjects.map((project) => (
            <div key={project.title} style={styles.card}>
              <h2 style={styles.cardTitle}>
                <a href={project.link} style={styles.cardLink}>
                  {project.title}
                </a>
              </h2>
              <p style={styles.cardDescription}>
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}