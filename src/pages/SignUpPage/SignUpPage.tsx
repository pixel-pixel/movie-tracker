import { stat } from "fs";
import React, { FC, useCallback, useEffect } from "react";
import { useHistory } from "react-router";
import { SignUpValues } from "../../common/intarfaces";
import SignUpForm from "../../components/SignUpForm";
import { useTSelector } from "../../hooks";
import { useActions } from "../../hooks/useActions";
import firebaseService from "../../services";
import "./SignUpPage.scss"

const SignUpPage: FC = () => {
  const history = useHistory()
  const { user, error, loading } = useTSelector(state => state.user)
  const { signUp } = useActions()
  useEffect(() => {
    if (user) history.push('/home')
  }, [user])

  if (error) console.log(error)

  return (
    <div className="sign-up-page">
      {loading ? 
        <p>loading</p> : 
        <SignUpForm onFormSubmit={signUp} />}
    </div>
  )
}

export default SignUpPage
