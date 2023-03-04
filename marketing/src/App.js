import { ThemeProvider, createTheme } from '@mui/material'
import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

import Landing from './components/Landing'
import Pricing from './components/Pricing'

export default function App() {
  return (
    <div>
      <ThemeProvider theme={createTheme()}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/pricing" element={<Pricing />} />

            <Route path="/" element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}