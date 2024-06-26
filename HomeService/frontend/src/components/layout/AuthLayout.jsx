import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";

const AuthLayout = () => {
  return (
    <>
      <NavBar />
      <div className={styles.authContainer}>
        <Outlet />
      </div>
    </>
  );
};

export default AuthLayout;
