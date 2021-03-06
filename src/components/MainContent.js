import React from 'react';

import Contact from '../pages/Contact';
import Index from '../pages/Index';
import Portfolio from '../pages/Portfolio'

const components = {
  contact: Contact,
  index: Index,
  portfolio: Portfolio,
}

const MainContent = (props) => {
  const Page = components[props.page];

  return (
    <Page />
  )
}

export default MainContent;
