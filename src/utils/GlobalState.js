import React, { createContext, useReducer, useContext } from "react";

const PageContext = createContext();
const { Provider } = PageContext;


const reducer = (state, action) => {
  switch (action.type) {
    case "set":
      return {page: action.page};
    default:
      return state;
  }
};

const PageProvider = ({value="index", ...props}) => {
  const [state, dispatch] = useReducer(reducer, {page: value});
  return <Provider value={[state, dispatch]} {...props} />
} ;

const usePageContext = () => {
  return useContext(PageContext);
}

export {
  PageProvider,
  usePageContext
};
