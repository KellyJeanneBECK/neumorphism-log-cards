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
          <span className={`${styles.arrow} ${showLog ? styles.rotate : ""}`}>
            &#11206;
          </span>{" "}
          Login
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
          placeholder="Type email here"
        />

        <label htmlFor="password">Password</label>
        <input
          tabIndex={showLog ? "0" : "-1"}
          id="password"
          name="password"
          type="password"
          placeholder="Type password here"
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
