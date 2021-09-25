import React, { FC, useCallback } from "react";
import { useHistory } from "react-router";
import SignInForm, { SignInFormValues } from "../../components/SignInForm";
import firebaseService from "../../services";
import "./SignInPage.scss"

const SignInPage:FC = () => {
  const history = useHistory()

  const handleSubmit = useCallback(async(values: SignInFormValues) => {
    const {email, password} = values
    try {
      await firebaseService.signIn(email, password)
      history.push('/news')
    } catch (e) {
      alert(e)
    }
  }, [history])

  return (
    <div className="sign-in-page">
      <SignInForm onFormSubmit={handleSubmit}/>
    </div>
  )
}

export default SignInPage