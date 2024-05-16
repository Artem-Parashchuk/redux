import { Navigate } from "react-router-dom"
import { useAuth } from "../store/hooks"

export const PrivateRoute = ({children}) => {
    const {isLoggedIn} = useAuth()

  return isLoggedIn ? children : <Navigate to='/login'/>
} 