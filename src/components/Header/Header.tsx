import Logo from '../../assets/chart-combo-svgrepo-com.svg';
import styles from './Header.module.css'
export default function Header() {
  return <div>
     <img src={Logo} alt="Logo" className={styles.logo}/>
  </div>;
}
