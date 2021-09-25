import { useContext } from "react"
import { Redirect, Route } from "react-router"
import { AuthContext } from "./Auth"

export const PrivateRoute = ({ children, ...props }) => {
  const {user} = useContext(AuthContext)
  
  return user ? 
  <Route> {children} </Route> :
  <Redirect to="/sign-in" />
}