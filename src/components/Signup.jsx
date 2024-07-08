import styles from "./Cards.module.css";
import { useState } from "react";

function Signup() {
  const [showSign, setShowSign] = useState(false);

  const toggleSign = () => {
    setShowSign(!showSign);
  };

  return (
    <article
      className={`${styles.logcard} ${showSign ? styles.showcard : styles.hiddencard}`}
    >
      <h2 onClick={toggleSign}>
        <button className={styles.cardtitle}>
          <span className={`${styles.arrow} ${showSign ? styles.rotate : ""}`}>
            &#11206;
          </span>{" "}
          Sign Up
        </button>
      </h2>
      <form
        className={`${styles.logform} ${showSign ? styles.showform : styles.hiddenform}`}
      >
        <label htmlFor="pseudo">Pseudo</label>
        <input
          tabIndex={showSign ? "0" : "-1"}
          id="pseudo"
          name="pseudo"
          type="text"
        />

        <label htmlFor="email">Email</label>
        <input
          tabIndex={showSign ? "0" : "-1"}
          id="email"
          name="email"
          type="email"
        />

        <label htmlFor="password">Password</label>
        <input
          tabIndex={showSign ? "0" : "-1"}
          id="password"
          name="password"
          type="password"
        />

        <label htmlFor="password">Confirm password</label>
        <input
          tabIndex={showSign ? "0" : "-1"}
          id="confirm_password"
          name="confirm_password"
          type="password"
        />

        <button
          tabIndex={showSign ? "0" : "-1"}
          type="button"
          className={styles.logbtn}
        >
          Sign Up
        </button>
      </form>
    </article>
  );
}

export default Signup;
