import "./App.css";
import Hello from "./component/Hello";
import Welcome from "./component/Welcome";
// import styles from "./App.module.css";
import * as style from "./styles";

function App() {
  const name = "Minseon";

  return (
    <div className="App">
      <Hello />
      {/* <div className={styles.box}>App</div> */}
      <style.Box>App</style.Box>
      <Welcome />
    </div>
  );
}

export default App;
