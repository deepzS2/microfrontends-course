import React, { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { mount } from 'dashboard/DashboardApp'
import { useAuthContext } from '../context/auth.context'

export default function DashboardApp() {
  const { isSignedIn } = useAuthContext()
  const navigate = useNavigate()

  const wrapperRef = useRef(null)
  const isFirstRunRef = useRef(true)
  const unmountRef = useRef(() => {})

  useEffect(
    () => {
      if (!isSignedIn) {
        navigate('/')
      }

      if (!isFirstRunRef.current) {
        return
      }

      unmountRef.current = mount(wrapperRef.current)

      isFirstRunRef.current = false
    },
    [isSignedIn],
  )

  useEffect(() => unmountRef.current, [])

  return <div ref={wrapperRef} />
}