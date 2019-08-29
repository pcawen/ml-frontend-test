import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Template from './components/Template';

export default () => {
  return (
    <BrowserRouter>
      <Template />
    </BrowserRouter>
  );
};