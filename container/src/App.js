import { ThemeProvider, createTheme } from '@mui/material'
import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material/className'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import MarketingApp from './components/MarketingApp'

ClassNameGenerator.configure((componentName) => `co-${componentName}`)

export default function App() {
  return (
    <ThemeProvider theme={createTheme()}>
      <BrowserRouter>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}