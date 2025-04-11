import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
// import logo from "../../../assets/logo-swiftcart.png";
import logo from "../../../assets/logo.svg";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <img src={logo} alt="SwiftCart" className={styles.logo} />
      </Link>
      <div className={styles.links}>
        <Link to="/products">Products</Link>
      </div>
    </nav>
  );
}
