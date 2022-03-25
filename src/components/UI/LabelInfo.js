import { memo } from "react";
import styles from "./LabelInfo.module.css";

const LabelInfo = (props) => {
  return (
    <div className={styles["label-info"]}>
      <label className={styles["label-info__label"]}>{props.label}:</label>
      <span className={styles["label-info__value"]}>{props.children}</span>
    </div>
  );
};

export default memo(LabelInfo);
