import Arrow from "../../assets/Arrow";
import styles from "./SchedulingSidebar.module.css";
import LabelInfo from "../UI/LabelInfo";
import Circle from "../UI/Circle";
import userImg from "../../assets/user-img.png";
import { useState } from "react";

const SchedulingSidebar = () => {
  const [isOpened, setIsOpened] = useState(true);

  const toggleSideBar = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <div
      className={`${styles["scheduling-sidebar"]} ${
        isOpened && styles["is-open"]
      }`}
    >
      <button
        className={styles["scheduling-sidebar__toggle"]}
        onClick={toggleSideBar}
        aria-label="Arrow Icon"
      >
        <Arrow />
      </button>
      <div className={styles["scheduling-sidebar__content"]}>
        <div className={styles["scheduling-sidebar__info"]}>
          <LabelInfo label="Name">Kharoub</LabelInfo>
          <LabelInfo label="Age">29</LabelInfo>
        </div>
        <div className={styles["scheduling-sidebar__avatar"]}>
          <Circle size="large">
            <img src={userImg} alt="User Image" className="img-responsive" />
          </Circle>
        </div>
      </div>
    </div>
  );
};

export default SchedulingSidebar;
