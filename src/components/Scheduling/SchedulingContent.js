import { useContext, useEffect, useRef } from "react";
import SchedulingContext from "../../store/scheduling-context";
import Message from "../UI/Message";
import styles from "./SchedulingContent.module.css";
import SchedulingSidebar from "./SchedulingSidebar";

const SchedulingContent = () => {
  const messagesContainerRef = useRef();
  const schedulingCtx = useContext(SchedulingContext);

  useEffect(() => {
    const elm = messagesContainerRef.current;
    elm.scrollTop = elm.scrollHeight;
  }, [schedulingCtx.messages]);

  const messages = schedulingCtx.messages.map((message) => {
    return <Message key={message.id} message={message} />;
  });

  return (
    <section className={styles["scheduling-content"]}>
      <div
        className={styles["scheduling-content__messages"]}
        ref={messagesContainerRef}
      >
        {messages}
      </div>
      <SchedulingSidebar />
    </section>
  );
};

export default SchedulingContent;
