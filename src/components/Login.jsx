import styles from "./Cards.module.css";
import { useState } from "react";

function Login() {
  const [showLog, setShowLog] = useState(false);

  const toggleLog = () => {
    setShowLog(!showLog);
  };

  return (
    <article
      className={`${styles.logcard} ${showLog ? styles.showcard : styles.hiddencard}`}
    >
      <h2 tabIndex="0" className={styles.cardtitle} onClick={toggleLog}>
        <span>&#11206;</span> Login
      </h2>
      <form
        className={`${styles.logform} ${showLog ? styles.showform : styles.hiddenform}`}
      >
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" />

        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />

        <button type="button" className={styles.logbtn}>
          Login
        </button>
      </form>
    </article>
  );
}

export default Login;
