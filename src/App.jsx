import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from './router/Routes';
import Search from './components/Search';

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Search />
        {renderRoutes(Routes)}
      </div>
    </BrowserRouter>
  );
};