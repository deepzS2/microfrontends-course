import React, { useRef, useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom"
import { mount } from 'marketing/MarketingApp'

import { MARKETING_ROUTING_PREFIX } from '../routing/constants'

const pathBasename = `/${MARKETING_ROUTING_PREFIX}`

export default function MarketingApp() {
  const wrapperRef = useRef(null)
  const isFirstRunRef = useRef(true)
  const unmountRef = useRef(() => {})

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const marketingNavigationEventHandler = (event) => {
      const pathname = event.detail
      const newPathname = `${pathBasename}${pathname}`

      if (newPathname === location.pathname) {
        return
      }

      navigate(newPathname)
    }

    window.addEventListener("[marketing] navigated", marketingNavigationEventHandler);

    return () => {
      window.removeEventListener(
        "[marketing] navigated",
        marketingNavigationEventHandler
      )
    }
  }, [location])

  useEffect(
    () => {
      if (location.pathname.startsWith(pathBasename)) {
        window.dispatchEvent(
          new CustomEvent("[container] navigated", {
            detail: location.pathname.replace(pathBasename, ""),
          })
        )
      }
    },
    [location],
  )

  useEffect(
    () => {
      if (!isFirstRunRef.current) {
        return
      }

      unmountRef.current = mount(wrapperRef.current, {
        initialPathname: location.pathname.replace(
          pathBasename,
          ''
        ),
      })

      isFirstRunRef.current = false
    },
    [location],
  )

  useEffect(() => unmountRef.current, [])

  return <div ref={wrapperRef} />
}