import { forwardRef, useImperativeHandle, useRef } from "react";
import styles from "./Input.module.css";

const Input = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      clear: () => (inputRef.current.value = ""),
      value: () => inputRef.current.value,
    };
  });

  return <input ref={inputRef} className={styles.input} {...props.attrs} />;
});

export default Input;
