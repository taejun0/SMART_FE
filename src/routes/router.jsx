import { createBrowserRouter } from 'react-router-dom';
import React from 'react';

import { DefaultLayout } from '@layouts/DefaultLayout';

import { ROUTE_PATHS } from '@constants/routeConstants';

import { MainPage } from '@pages/mainpage/MainPage';
import { LoginPage } from '@pages/loginpage/LoginPage';
import { SignupPage } from '@pages/signuppage/SignupPage';
import { SplashPage } from '@pages/splashpage/SplashPage';
import { TrainingPage } from '@pages/trainingpage/TrainingPage';
import { FeedbackPage } from '@pages/feedbackpage/FeedbackPage';
import { AnalyzePage } from '@pages/analyzepage/AnalyzePage';
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
        path: ROUTE_PATHS.LOGIN,
        element: <LoginPage />,
      },
      {
        path: ROUTE_PATHS.SIGNUP,
        element: <SignupPage />,
      },
      {
        path: ROUTE_PATHS.SPLASH,
        element: <SplashPage />,
      },
      {
        path: ROUTE_PATHS.TRAINING,
        element: <TrainingPage />,
      },
      {
        path: ROUTE_PATHS.FEEDBACK,
        element: <FeedbackPage />,
      },
      {
        path: ROUTE_PATHS.ANALYZE,
        element: <AnalyzePage />,
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
