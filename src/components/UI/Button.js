import { memo } from "react";
import styles from "./Button.module.css";
import Arrow from "../../assets/Arrow";

const Button = (props) => {
  return (
    <button
      className={styles["button"]}
      onClick={props.onClick}
      aria-label={props.label}
    >
      <Arrow />
    </button>
  );
};

export default memo(Button);
