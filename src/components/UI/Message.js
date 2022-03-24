import styles from "./Message.module.css";

const Message = ({ message }) => {
  return (
    <div
      className={`${styles.message} ${
        message.sender === "bot" ? styles.bot : styles.me
      }`}
    >
      <p>{message.value}</p>
    </div>
  );
};

export default Message;
