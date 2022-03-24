import { useContext, useEffect, useState } from "react";
import SchedulingContext from "../../store/scheduling-context";
import styles from "./SchedulingForm.module.css";

const SchedulingForm = () => {
  const [message, setMessage] = useState("");
  const schedulingCtx = useContext(SchedulingContext);

  useEffect(() => {
    if (!schedulingCtx.messages.length) {
      addMessage("Schedule an appointment", "bot");
      return;
    }

    if (schedulingCtx.messages.length === 2) {
      addMessage("This is was really helpful!", "bot");
      addMessage("Greate service :)", "bot");
    }

    return () => {
      // Increase the number here to see the scrolling and how it handled :)
      if (schedulingCtx.messages.length === 5) {
        schedulingCtx.clearMessages();
      }
    };
  }, [schedulingCtx.messages]);

  const changeHandler = (e) => {
    setMessage(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const preparedMessage = message.trim();

    if (!preparedMessage) {
      return;
    }

    addMessage(preparedMessage);
    setMessage("");
  };

  const addMessage = (message, sender) => {
    schedulingCtx.addMessage({
      id: `message_${message}_${schedulingCtx.messages.length + 1}`,
      value: message.trim(),
      sender,
    });
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
