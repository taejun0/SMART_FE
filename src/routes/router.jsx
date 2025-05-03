import { createBrowserRouter } from 'react-router-dom';
import React from 'react';

import { DefaultLayout } from '@layouts/DefaultLayout';

import { ROUTE_PATHS } from '@constants/routeConstants';

import { MainPage } from '@pages/mainpage/MainPage';
import { TrainingPage } from '@pages/trainingpage/TrainingPage';
import { ReportPage } from '@pages/reportpage/ReportPage';
import { NotFound } from '@pages/notfound/NotFound';

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
        path: ROUTE_PATHS.TRAINING,
        element: <TrainingPage />,
      },
      {
        path: ROUTE_PATHS.MYREPORT,
        element: <ReportPage />,
      },
      {
        path: ROUTE_PATHS.NOT_FOUND,
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
