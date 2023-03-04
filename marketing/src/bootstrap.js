import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const mount = (el) => {
  const root = createRoot(el)
  root.render(<App />)
}

if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById('_marketing-dev-root')

  devRoot && mount(devRoot)
}

export { mount }