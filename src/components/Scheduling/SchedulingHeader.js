import styles from "./SchedulingHeader.module.css";
import userImg from "../../assets/user-img.png";
import Image from "../UI/Image";

const SchedulingHeader = () => {
  return (
    <section className={styles["scheduling-header"]}>
      <h2 className={styles["scheduling-header__name"]}>
        <span>Hi</span> Guest!
      </h2>
      <div className="circle">
        <Image src={userImg} alt="User Image" />
      </div>
    </section>
  );
};

export default SchedulingHeader;
