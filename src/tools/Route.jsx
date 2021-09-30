import { Redirect, Route } from "react-router"
import { useTSelector } from "../hooks/useTSelector"

export const PrivateRoute = ({ children, ...props }) => {
  const { user } = useTSelector(state => state.user)
  
  return !!user ?
  <Route> {children} </Route> :
  <Redirect to="/sign-in" />
}