import styles from "./Header.module.css";
import igniteLogo from "../../assets/ignite-logo.svg";

const { header } = styles;

export function Header() {
  return (
    <header className={header}>
      <img src={igniteLogo} alt="logotipo ignite" />
    </header>
  );
}
