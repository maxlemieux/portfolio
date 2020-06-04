import React from 'react';

import { usePageContext } from "../utils/GlobalState";
// import Index from '../pages/Index';
// import Contact from '../pages/Index';
// import Portfolio from '../pages/Index';
import PageContainer from '../components/PageContainer';

// bridge object - JSX needs a component, not a string
// const components = {
//   index: Index,
//   contact: Contact,
//   portfolio: Portfolio,
// }

export default function MainContent() {
  const [state, dispatch] = usePageContext();

  // const Page = components[state.page];

  return (
    <PageContainer />
  )
}