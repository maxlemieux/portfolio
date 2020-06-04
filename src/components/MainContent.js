import React from 'react';
import { usePageContext, PageProvider } from "../utils/GlobalState";
import Index from '../pages/Index';
import Contact from '../pages/Index';
import Portfolio from '../pages/Index';

// bridge object - JSX needs a component, not a string
const components = {
  index: Index,
  contact: Contact,
  portfolio: Portfolio,
}

export default function MainContent() {
  const [state, dispatch] = usePageContext();

  const Page = components[state.page];

  return (
    <>
      <p>Current page dynamic value: {state.page}</p>
      <Page />
    </>
  )
}