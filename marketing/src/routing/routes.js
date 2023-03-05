import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material'
import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material/className'
import { Outlet } from "react-router-dom"

import NavigationManager from '../components/NavigationManager'
import Landing from '../components/Landing'
import Pricing from '../components/Pricing'

ClassNameGenerator.configure((componentName) => `ma-${componentName}`)

export const routes = [
  {
    path: '/',
    element: (
      <div>
        <NavigationManager>
          <ThemeProvider theme={createTheme()}>
            <Outlet />
          </ThemeProvider>
        </NavigationManager>
      </div>
    ),
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: 'pricing',
        element: <Pricing />
      }
    ]
  }
]