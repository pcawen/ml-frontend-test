import React from 'react';
import { renderRoutes } from 'react-router-config';
import Routes from '../router/Routes';
import Search from './Search';
import CategoryBreadcrumb from './CategoryBreadcrumb/CategoryBreadcrumb';

export default () => {
  return (
    <div className="app-container" >
      <Search />
      <CategoryBreadcrumb />
      <div className="app-content">
        {renderRoutes(Routes)}
      </div>
    </div>
  );
};