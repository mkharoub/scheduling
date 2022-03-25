import { useContext, useEffect, useRef } from "react";
import SchedulingContext from "../../store/scheduling-context";
import Message from "../UI/Message";
import styles from "./SchedulingMessages.module.css";

const SchedulingMessages = () => {
  const messagesContainerRef = useRef();
  const schedulingCtx = useContext(SchedulingContext);

  // Uncomment this function below to handle scrolling once you've changed
  // the value in Scheduling form component to 20 for example.
  // I added a comment there to clarify this.

  // useEffect(() => {
  //   const elm = messagesContainerRef.current;
  //   elm.scrollTop = elm.scrollHeight;
  // }, [schedulingCtx.messages]);

  const messages = schedulingCtx.messages.map((message) => {
    return <Message key={message.id} message={message} />;
  });

  return (
    <section
      className={styles["scheduling-messages"]}
      ref={messagesContainerRef}
    >
      {messages}
    </section>
  );
};

export default SchedulingMessages;
