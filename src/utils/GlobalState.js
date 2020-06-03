import React, { createContext, useReducer, useContext } from "react";

const PortfolioContext = createContext();
const { Provider } = PortfolioContext;


const reducer = (state, action) => {
  switch (action.type) {
    case "set":
      return 'foo';
    case "add":
      return [
        ...state,
        {
          id: state.length * Math.random(),
          name: action.name
        }
      ];
      // Bonus: Remove a todo from the list.
    case "remove":
      return state.filter((_, index) => {
        return index !== action.index;
      });
    default:
      return state;
  }
};

const PortfolioProvider = ({value=[], ...props}) => {
  const [state, dispatch] = useReducer(reducer, []);
  return <Provider value={[state, dispatch]} {...props} />
} ;

const usePortfolioContext = () => {
  return useContext(PortfolioContext);
}

export {
  PortfolioProvider,
  usePortfolioContext
};
