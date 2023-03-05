import React, { createContext, useContext, useState } from "react"

const AuthContext = createContext({
  isSignedIn: false,
  setIsSignedIn: (value) => {}
})

export const AuthContextProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false)

  return (
    <AuthContext.Provider value={{ isSignedIn, setIsSignedIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)