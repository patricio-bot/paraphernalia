import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useUserContext } from '../context/user_context'

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isAuthenticated } = useUserContext()
  const isUser = isAuthenticated && user

  return (

    <Route {...rest} render={() => {
      return isUser ? children : <Redirect to='/'></Redirect>
    }}></Route>
  )
}
export default PrivateRoute
