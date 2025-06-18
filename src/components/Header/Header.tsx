import Logo from "../../assets/chart-combo-svgrepo-com.svg";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <div className={styles.header}>
      <img src={Logo} alt="Logo" className={styles.logo} />
      <h2>Chart Builder</h2>
    </div>
  );
}
