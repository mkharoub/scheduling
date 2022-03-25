import styles from "./SchedulingSidebar.module.css";
import LabelInfo from "../UI/LabelInfo";
import personalImg from "../../assets/personal-user.jpg";
import { useCallback, useState } from "react";
import Image from "../UI/Image";
import Button from "../UI/Button";

const SchedulingSidebar = () => {
  const [isOpened, setIsOpened] = useState(true);

  const toggleSideBar = useCallback(() => {
    setIsOpened((prev) => !prev);
  }, []);

  return (
    <div
      className={`${styles["scheduling-sidebar"]} ${
        isOpened && styles["is-open"]
      }`}
    >
      <div className={styles["scheduling-sidebar__toggle"]}>
        <Button onClick={toggleSideBar} label="Arrow Icon" />
      </div>
      <div className={styles["scheduling-sidebar__content"]}>
        <div className={styles["scheduling-sidebar__info"]}>
          <LabelInfo label="Name">Kharoub</LabelInfo>
          <LabelInfo label="Age">29</LabelInfo>
        </div>
        <div className={`${styles["scheduling-sidebar__avatar"]} circle large`}>
          <Image src={personalImg} alt="Personal User Image" />
        </div>
      </div>
    </div>
  );
};

export default SchedulingSidebar;
