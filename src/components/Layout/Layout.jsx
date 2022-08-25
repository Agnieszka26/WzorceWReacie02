import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.css";
import {Outlet} from "react-router-dom";
const LayoutsWithNavbar = () => {
  return (
    <div className={styles.component} >
      <Navbar />
      <Outlet />
    </div>
  );
};

export default LayoutsWithNavbar;
