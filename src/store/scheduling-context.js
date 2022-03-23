import { createContext } from "react";

const SchedulingContext = createContext({
  messages: [],
  addMessage: (message) => {},
});

export default SchedulingContext;
