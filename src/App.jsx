import styles from "./App.module.css";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <main>
      <h1 className={styles.title}>Neumorphism Log Cards</h1>
      <Login />
      <Signup />
    </main>
  );
}

export default App;
