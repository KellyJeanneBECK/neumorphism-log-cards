import styles from "./Cards.module.css";

function Signup() {
  return (
    <article className={styles.logcard}>
      <h2 tabIndex="0" className={styles.cardtitle}>
        <span>&#11206;</span> Sign Up
      </h2>
      <form className={styles.logform}>
        <label htmlFor="pseudo">Pseudo</label>
        <input id="pseudo" name="pseudo" type="text" />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" />

        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />

        <label htmlFor="password">Confirm password</label>
        <input id="confirm_password" name="confirm_password" type="password" />

        <button type="button" className={styles.logbtn}>
          Sign Up
        </button>
      </form>
    </article>
  );
}

export default Signup;
