import styles from "./Cards.module.css";

function Login() {
  return (
    <article className={styles.logcard}>
      <h2 tabIndex="0" className={styles.cardtitle}>
        <span>&#11206;</span> Login
      </h2>
      <form className={styles.logform}>
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
