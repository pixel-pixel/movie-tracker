import React, { FC, useCallback } from "react";
import { useHistory } from "react-router";
import SignUpForm, { SignUpFormValues } from "../../components/SignUpForm";
import firebaseService from "../../services";

const SignUpPage: FC = () => {
  const history = useHistory()

  const onSubmit = useCallback(async(values: SignUpFormValues) => {
    const {email, password} = values
    try {
      await firebaseService.signUp(email, password)
      history.push('/home')
    } catch (e) {
      alert(e)
    }
  }, [history])

  return <SignUpForm onSubmit={onSubmit}/>
}

export default SignUpPage