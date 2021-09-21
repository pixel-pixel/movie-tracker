import React, { FC, useCallback } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import SignInForm, { SignInFormValues } from "../../components/SignInForm";
import firebaseService from "../../services";

const SignInPage:FC<RouteComponentProps> = ({ history }) => {
  const onSubmit = useCallback(async(values: SignInFormValues) => {
    const {email, password} = values

    try {
      await firebaseService.signIn(email, password)
      history.push('/error')
    } catch (e) {
      alert(e)
    }
  }, [history])

  return <SignInForm onSubmit={onSubmit}/>
}

export default withRouter(SignInPage)