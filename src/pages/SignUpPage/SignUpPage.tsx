import React, { FC, useCallback } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import SignUpForm, { SignUpFormValues } from "../../components/SignUpForm";
import firebaseService from "../../services";

const SignUpPage: FC<RouteComponentProps> = ({ history }) => {
  const onSubmit = useCallback(async(values: SignUpFormValues) => {
    const {email, password} = values

    try {
      await firebaseService.signUp(email, password)
      history.push('/error')
    } catch (e) {
      alert(e)
    }
  }, [history])

  return <SignUpForm onSubmit={onSubmit}/>
}

export default withRouter(SignUpPage)