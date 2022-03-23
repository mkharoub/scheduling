import styles from "./Circle.module.css";

const Circle = (props) => {
  return (
    <div className={`${styles.circle} ${props.size && styles[props.size]}`}>
      {props.children}
    </div>
  );
};

export default Circle;
