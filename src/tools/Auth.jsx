import { createContext, useEffect, useState } from "react";
import { firebaseService } from "../services";

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    firebaseService.onAuthStateChanged(setUser)
  }, [])

  return (
    <AuthContext.Provider value={{ user }} >
      {children}
    </AuthContext.Provider>
  )
}