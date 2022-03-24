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

  if (action.type === "CLEAR") {
    return defaultSchedulingState;
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

  const clearMessagesHandler = () => {
    dispatchSchedulingAction({ type: "CLEAR" });
  };

  const schedulingContext = {
    messages: schedulingState.messages,
    addMessage: addMessageHandler,
    clearMessages: clearMessagesHandler,
  };

  return (
    <SchedulingContext.Provider value={schedulingContext}>
      {props.children}
    </SchedulingContext.Provider>
  );
};

export default SchedulingProvider;
