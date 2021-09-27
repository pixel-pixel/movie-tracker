import React, { FC, useCallback } from "react";
import { useHistory } from "react-router";
import SignUpForm, { SignUpFormValues } from "../../components/SignUpForm";
import firebaseService from "../../services";
import "./SignUpPage.scss"

const SignUpPage: FC = () => {
  const history = useHistory()

  const handleSubmit = useCallback(async(values: SignUpFormValues) => {
    const {email, password} = values
    try {
      await firebaseService.signUp(email, password)
      history.push('/home')
    } catch (e) {
      alert(e)
    }
  }, [history])

  return (
    <div className="sign-up-page">
      <SignUpForm onFormSubmit={handleSubmit}/>
    </div>
  )
}

export default SignUpPage
