import Circle from "../UI/Circle";
import styles from "./SchedulingHeader.module.css";
import userImg from "../../assets/user-img.png";
import Image from "../UI/Image";

const SchedulingHeader = () => {
  return (
    <section className={styles["scheduling-header"]}>
      <h2 className={styles["scheduling-header__name"]}>
        <span>Hi</span> Guest!
      </h2>
      <Circle>
        <Image src={userImg} alt="User Image" className="img-responsive" />
      </Circle>
    </section>
  );
};

export default SchedulingHeader;
