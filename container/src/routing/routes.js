import React, { lazy, Suspense } from "react";
import { Navigate, Outlet,  } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material'
import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material/className'

import Header from '../components/Header'
import Progress from "../components/Progress";
import { AUTH_ROUTING_PREFIX, MARKETING_ROUTING_PREFIX } from "./constants";

ClassNameGenerator.configure((componentName) => `co-${componentName}`)

const MarketingAppLazy = lazy(() => import("../components/MarketingApp"));
const AuthAppLazy = lazy(() => import("../components/AuthApp"));

export const routes = [
  {
    path: '/',
    element: (
      <ThemeProvider theme={createTheme()}>
        <div>
          <Header />
          <Suspense fallback={<Progress />}>
            <Outlet />
          </Suspense>
        </div>
      </ThemeProvider>
    ),
    children: [
      {
        index: true,
        element: <Navigate to={`/${MARKETING_ROUTING_PREFIX}`} />,
      },
      {
        path: `/${MARKETING_ROUTING_PREFIX}/*`,
        element: <MarketingAppLazy />,
      },
      {
        path: `/${AUTH_ROUTING_PREFIX}/*`,
        element: <AuthAppLazy />,
      },
    ],
  }
];