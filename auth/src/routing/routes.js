import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material'
import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material/className'
import { Outlet, Navigate } from "react-router-dom"

import NavigationManager from '../components/NavigationManager'
import SignIn from '../components/Signin'
import SignUp from '../components/Signup'

ClassNameGenerator.configure((componentName) => `au-${componentName}`)

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
        element: <Navigate to="/auth/signin" />,
      },
      {
        path: 'auth/signin',
        element: <SignIn />
      },
      {
        path: 'auth/signup',
        element: <SignUp />
      }
    ]
  }
]