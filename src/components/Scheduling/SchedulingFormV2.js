import { useContext, useEffect, useRef } from "react";
import SchedulingContext from "../../store/scheduling-context";
import Input from "../UI/Input";
import styles from "./SchedulingForm.module.css";

const SchedulingFormV2 = () => {
  const ref = useRef();
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

  const submitHandler = (e) => {
    e.preventDefault();

    const preparedMessage = ref.current.value().trim();

    if (!preparedMessage) {
      return;
    }

    addMessage(preparedMessage);
    ref.current.clear();
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
        <Input
          ref={ref}
          attrs={{
            type: "text",
            placeholder: "Type Something!",
          }}
        />
      </form>
    </section>
  );
};

export default SchedulingFormV2;
