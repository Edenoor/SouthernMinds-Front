import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./Landing.module.css";

const Landing = () => {
  const history = useHistory();

  const handleOnClick = () => history.push("/main");

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleOnClick}>
        <img src="https://www.minds.dev/images/files/logo-header.png" alt="" />
      </button>
    </div>
  );
};
export default Landing;
