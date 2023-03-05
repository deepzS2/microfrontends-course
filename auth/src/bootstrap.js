import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom"

import { createRouter } from './routing/router-factory'

const mount = (el, { initialPathname, routingStrategy }) => {
  const router = createRouter({ strategy: routingStrategy, initialPathname })
  const root = createRoot(el)

  root.render(<RouterProvider router={router} />)
}

if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById('_auth-dev-root')


  devRoot && mount(devRoot, { routingStrategy: 'browser' })
}

export { mount }