import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  session: [],
  survey: [],
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

  function storeSurvey(survey) {
    dispatch({
      type: 'STORE_SURVEY',
      payload: survey,
    });
  }

  return (
    <GlobalContext.Provider
      value={{ session: state.session, storeSession, storeSurvey }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
