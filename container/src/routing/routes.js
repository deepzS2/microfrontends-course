import React, { lazy, Suspense } from "react";
import { Navigate, Outlet,  } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material'
import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material/className'

import Header from '../components/Header'
import { MARKETING_ROUTING_PREFIX } from "./constants";

ClassNameGenerator.configure((componentName) => `co-${componentName}`)

const MarketingAppLazy = lazy(() => import("../components/MarketingApp"));

export const routes = [
  {
    path: '/',
    element: (
      <ThemeProvider theme={createTheme()}>
        <div>
          <Header />
          <Outlet />
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
        element: (
          <Suspense fallback="Loading Marketing...">
            <MarketingAppLazy />
          </Suspense>
        ),
      },
    ],
  }
];