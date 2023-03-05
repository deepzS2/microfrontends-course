import React, { useRef, useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom"
import { mount } from 'auth/AuthApp'

import { AUTH_ROUTING_PREFIX } from '../routing/constants'
import { useAuthContext } from '../context/auth.context'

const pathBasename = `/${AUTH_ROUTING_PREFIX}`

export default function AuthApp() {
  const { setIsSignedIn } = useAuthContext()
  const wrapperRef = useRef(null)
  const isFirstRunRef = useRef(true)
  const unmountRef = useRef(() => {})

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const marketingNavigationEventHandler = (event) => {
      const pathname = event.detail
      const newPathname = `${pathBasename}${pathname.replace(pathBasename, '')}`
      if (newPathname === location.pathname) {
        return
      }

      navigate(newPathname)
    }

    window.addEventListener("[auth] navigated", marketingNavigationEventHandler);

    return () => {
      window.removeEventListener(
        "[auth] navigated",
        marketingNavigationEventHandler
      )
    }
  }, [location])

  useEffect(
    () => {
      if (location.pathname.startsWith(pathBasename)) {
        window.dispatchEvent(
          new CustomEvent("[container] navigated", {
            detail: location.pathname,
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
        initialPathname: location.pathname,
        onSignIn: () => {
          setIsSignedIn(true)
        }
      })

      isFirstRunRef.current = false
    },
    [location],
  )

  useEffect(() => unmountRef.current, [])

  return <div ref={wrapperRef} />
}