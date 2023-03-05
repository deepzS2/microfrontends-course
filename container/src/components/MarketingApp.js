import React, { useRef, useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom"
import { mount } from 'marketing/MarketingApp'

const pathBasename = '/marketing'

export default function MarketingApp() {
  const wrapperRef = useRef(null)
  const isFirstRunRef = useRef(true)
  const unmountRef = useRef(() => {})

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const app1NavigationEventHandler = (event) => {
      const pathname = event.detail
      const newPathname = `${pathBasename}${pathname}`

      if (newPathname === location.pathname) {
        return
      }

      navigate(newPathname)
    }

    window.addEventListener("[marketing] navigated", app1NavigationEventHandler);

    return () => {
      window.removeEventListener(
        "[marketing] navigated",
        app1NavigationEventHandler
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