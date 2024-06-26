import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <div className={styles.rootContainer}>
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
