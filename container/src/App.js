import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import MarketingApp from './components/MarketingApp'

ClassNameGenerator.configure((componentName) => `co-${componentName}`)

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  )
}