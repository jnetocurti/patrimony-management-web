import React from 'react';
import { Navigate } from 'react-router-dom';

import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';

import NotFoundView from './containers/errors/NotFoundView';
import RealEstateFunds from './containers/realEstateFunds';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'real-estate-funds/ranking', element: <RealEstateFunds /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '404', element: <NotFoundView /> },
      { path: '*', element: <Navigate to="/404" /> },
      { path: '/', element: <Navigate to="/app/real-estate-funds/ranking" /> }
    ]
  }
];

export default routes;
