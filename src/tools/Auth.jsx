import { createContext, useEffect, useState } from "react";
import firebaseService from "../services";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    firebaseService.onAuthChanged(setUser)
  }, [])

  return (
    <AuthContext.Provider value={{ user }} >
      {children}
    </AuthContext.Provider>
  )
}