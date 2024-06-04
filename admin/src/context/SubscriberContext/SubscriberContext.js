import { createContext, useReducer } from "react";
import { SubscriberReducer } from "./SubscriberReducer";

const INITIAL_STATE = {
  subscribers: [],
  isFetching: false,
  error: false,
};

export const SubscriberContext = createContext(INITIAL_STATE);

export const SubscriberContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SubscriberReducer, INITIAL_STATE);

  return (
    <SubscriberContext.Provider
      value={{
        subscribers: state.subscribers,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </SubscriberContext.Provider>
  );
};
