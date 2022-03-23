import { useContext, useState } from "react";
import SchedulingContext from "../../store/scheduling-context";
import styles from "./SchedulingForm.module.css";

const SchedulingForm = () => {
  const [message, setMessage] = useState("");
  const schedulingCtx = useContext(SchedulingContext);

  const changeHandler = (e) => {
    setMessage(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!message.trim()) {
      return;
    }

    schedulingCtx.addMessage({
      id: `message_${schedulingCtx.messages.length + 1}`,
      value: message.trim(),
    });

    setMessage("");
  };

  return (
    <section className={styles["scheduling-form"]}>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Type Something!"
          className={styles["scheduling-form__input"]}
          value={message}
          onChange={changeHandler}
        />
      </form>
    </section>
  );
};

export default SchedulingForm;
