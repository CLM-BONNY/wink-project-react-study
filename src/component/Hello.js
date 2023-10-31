import World from "./World";
// import styles from "./Hello.module.css";
import * as style from "./styles";

export default function Hello() {
  return (
    <div>
      <h1>Hello</h1>
      <World />
      {/* <div className={styles.box}>Hello</div> */}
      <style.Box>Hello</style.Box>
    </div>
  );
}
