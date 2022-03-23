import { useContext } from "react";
import SchedulingContext from "../../store/scheduling-context";
import styles from "./SchedulingContent.module.css";
import SchedulingSidebar from "./SchedulingSidebar";

const SchedulingContent = () => {
  const schedulingCtx = useContext(SchedulingContext);

  let messages;
  if (!schedulingCtx.messages.length) {
    messages = (
      <p className={styles["scheduling-content__no-messages"]}>No Messages!</p>
    );
  } else {
    messages = schedulingCtx.messages.map((message) => {
      return (
        <p
          key={message.id}
          className={`${styles["scheduling-content__message"]} ${styles["me"]}`}
        >
          {message.value}
        </p>
      );
    });
  }

  return (
    <section className={styles["scheduling-content"]}>
      <div className={styles["scheduling-content__messages"]}>{messages}</div>
      <SchedulingSidebar />
    </section>
  );
};

export default SchedulingContent;
