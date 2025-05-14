import Layout from "../components/Layout";

export default function Portfolio() {
  return (
    <Layout>
      <h1>Portfolio</h1>
      <p>Some stuff I worked on.</p>
      <ul>
        <li>
          Leaf it to Us!
          <p>a forest learning exploration serious game used as an education aid</p>
          <img src="/projects/LeafIt.png" alt="Leaf it to Us!" />
        </li>
        <li>
          <a href="https://moestudios.itch.io/verenica">Project Verenica</a>
          <p>a Rhythm game with RPG elements</p>
          <img src="/projects/Verenica.png" alt="Project Verenica" />
        </li>
        <li>
          <a href="https://hygrintoht.itch.io/noryks-night-time-radio">Noryk's Night Time Radio</a>
          <p>an audio engineer simulator game</p>
          <img src="/projects/Noryk.png" alt="Noryk's Night Time Radio" />
        </li>
      </ul>
      <h1>Technical Projects</h1>
      <ul>
        <li>
          <a href="https://github.com/hygrintoht/SimpleDirectXEngine">Simple DirectX Game Engine</a>
          <p>Created a game engine from scratch using DirectX11, ReactPhysics3D as physics engine, and Dear imgui as UI</p>
        </li>
        <li>
          <a href="https://github.com/hygrintoht/TapTitansClansRecreation">Tap Titans Clans Recreation</a>
          <p>Tried to recreate clans, clan combat system, and data management using NodeJS and SQL</p>
        </li>
        <li>
          <a href="https://github.com/hygrintoht/RealtimeSceneViewer">RealtimeSceneViewer</a>
          <p>Multithreaded scene loader that loads multiple meshes in scene all at once, used OpenGL and tinyobj loader</p>
        </li>
        <li>
          <a href="https://github.com/drei096/arvr_project">Pokemon AR app battles</a>
          <p>Created pokemon battles in AR using Vuforia Engine for Unity</p>
        </li>
      </ul>
    </Layout>
  );
}