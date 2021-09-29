import React, { FC, useCallback, useEffect } from "react";
import { useHistory } from "react-router";
import SignInForm, { SignInFormValues } from "../../components/SignInForm";
import { useTSelector } from "../../hooks";
import { useActions } from "../../hooks/useActions";
import firebaseService from "../../services";
import "./SignInPage.scss"

const SignInPage:FC = () => {
  const history = useHistory()
  const { user, loading, error } = useTSelector(state => state.user)
  const { signIn } = useActions()
  useEffect(() => {
    console.log(loading)
    if (user) history.push('/home')
  }, [user])
  
  if (error) console.log(error)

  return (
    <div className="sign-in-page">
      {loading ? 
        <p>loading...</p> :
        <SignInForm onFormSubmit={signIn} /> }
    </div>
  )
}

export default SignInPage
