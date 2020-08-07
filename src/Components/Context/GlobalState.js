import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  session: [],
};

//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions
  function storeSession(session) {
    dispatch({
      type: 'STORE_SESSION',
      payload: session,
    });
  }

  return (
    <GlobalContext.Provider value={{ session: state.session, storeSession }}>
      {children}
    </GlobalContext.Provider>
  );
};
