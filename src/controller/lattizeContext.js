import { createContext } from "react";

export const initialState = {
  activeTab: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "changeActiveTab":
      return { ...state, activeTab: action.payload };
  }
};

let lattizeContext = createContext();
export default lattizeContext;
