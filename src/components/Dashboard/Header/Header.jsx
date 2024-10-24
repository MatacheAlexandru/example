import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();

  const handleExit = () => {
    navigate("/");
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Money Guard</div>
      <div className={styles.userInfo}>
        <span className={styles.userName}>Name</span>
        <button className={styles.exitButton} onClick={handleExit}>
          Exit
        </button>
      </div>
    </header>
  );
};

export default Header;
