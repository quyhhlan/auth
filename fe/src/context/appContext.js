import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import { SETUP_USER_BEGIN } from "./actions";
import api from "../apis/configs/axiosConfigs";

const initialState = {
  isLoading: false,
};

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setupUser = async ({ currentUser, endPoint }) => {
    dispatch({ type: SETUP_USER_BEGIN });
    console.log(currentUser);
    try {
      const { data } = await api.post(`/auth/${endPoint}`, currentUser);
      console.log(data);
    } catch (error) {
      console.log(error.response.data.errors);
    }
  };

  return (
    <AppContext.Provider value={{ ...state, setupUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
