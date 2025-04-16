import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import App from '../App';
import { DefaultLayout } from '@layouts/DefaultLayout';

import { ROUTE_PATHS } from '@constants/routeConstants';

import { MainPage } from '@pages/mainpage/MainPage';
import { NotFound } from '@pages/notFound/NotFound';

const router = createBrowserRouter([
  {
    path: ROUTE_PATHS.MAIN,
    element: <DefaultLayout />,
    children: [
      {
        path: ROUTE_PATHS.MAIN,
        element: <MainPage />,
      },
      {
        path: ROUTE_PATHS.NOT_FOUND,
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
