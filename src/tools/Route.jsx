import { useContext } from "react"
import { Redirect, Route } from "react-router"
import { AuthContext } from "./Auth"

export const PrivateRoute = ({ component: RouteComponent, ...props }) => {
  const {user} = useContext(AuthContext)
  const render = routeProps => !!user ? 
    <RouteComponent {...routeProps} /> :
    <Redirect to="/sign-in" />

  return <Route {...props} render={render} />
}