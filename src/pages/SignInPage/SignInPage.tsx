import React, { FC, useCallback } from "react";
import { useHistory } from "react-router";
import SignInForm, { SignInFormValues } from "../../components/SignInForm";
import firebaseService from "../../services";

const SignInPage:FC = () => {
  const history = useHistory()

  const onSubmit = useCallback(async(values: SignInFormValues) => {
    const {email, password} = values
    try {
      await firebaseService.signIn(email, password)
      history.push('/news')
    } catch (e) {
      alert(e)
    }
  }, [history])

  return <SignInForm onSubmit={onSubmit}/>
}

export default SignInPage