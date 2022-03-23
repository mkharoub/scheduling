import { useReducer } from "react";
import SchedulingContext from "./scheduling-context";

const defaultSchedulingState = {
  messages: [],
};

const schedulingReducer = (state, action) => {
  if (action.type === "ADD") {
    return {
      messages: state.messages.concat(action.message),
    };
  }
};

const SchedulingProvider = (props) => {
  const [schedulingState, dispatchSchedulingAction] = useReducer(
    schedulingReducer,
    defaultSchedulingState
  );

  const addMessageHandler = (message) => {
    dispatchSchedulingAction({ type: "ADD", message });
  };

  const schedulingContext = {
    messages: schedulingState.messages,
    addMessage: addMessageHandler,
  };

  return (
    <SchedulingContext.Provider value={schedulingContext}>
      {props.children}
    </SchedulingContext.Provider>
  );
};

export default SchedulingProvider;
