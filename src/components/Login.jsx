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
      <h2 onClick={toggleLog}>
        <button className={styles.cardtitle}>
          <span>&#11206;</span> Sign Up
        </button>
      </h2>
      <form
        className={`${styles.logform} ${showLog ? styles.showform : styles.hiddenform}`}
      >
        <label htmlFor="email">Email</label>
        <input
          tabIndex={showLog ? "0" : "-1"}
          id="email"
          name="email"
          type="email"
        />

        <label htmlFor="password">Password</label>
        <input
          tabIndex={showLog ? "0" : "-1"}
          id="password"
          name="password"
          type="password"
        />

        <button
          tabIndex={showLog ? "0" : "-1"}
          type="button"
          className={styles.logbtn}
        >
          Login
        </button>
      </form>
    </article>
  );
}

export default Login;
