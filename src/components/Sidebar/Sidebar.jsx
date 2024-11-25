import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";

const { sidebar, profile, cover, avatar } = styles;
export function Sidebar() {
  return (
    <aside className={sidebar}>
      <img
        className={cover}
        src="https://images.unsplash.com/photo-1486707471592-8e7eb7e36f78?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className={profile}>
        <img src="https://github.com/lucylima.png" className={avatar} />
        <strong>Lucy Lima</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar perfil
        </a>
      </footer>
    </aside>
  );
}
