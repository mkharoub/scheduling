import { createContext } from "react";

const SchedulingContext = createContext({
  messages: [],
  addMessage: (message) => {},
  clearMessages: () => {},
});

export default SchedulingContext;
