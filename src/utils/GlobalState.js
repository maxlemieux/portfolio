import React, { createContext, useReducer, useContext } from "react";

const PageContext = createContext({ page: 'index' });

const reducer = (state, action) => {
  switch (action.type) {
    case "set":
      return { page: action.page };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
    }
};

const PageProvider = ({ value="index", ...props }) => {
  const [state, dispatch] = useReducer(reducer, { page: value });

  return <PageContext.Provider value={[state, dispatch]} {...props} />
} ;

const usePageContext = () => {
  return useContext(PageContext);
}

export {
  PageProvider,
  usePageContext
};
