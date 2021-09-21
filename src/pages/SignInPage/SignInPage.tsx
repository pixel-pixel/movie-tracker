import React, { FC } from "react";
import SignInForm from "../../components/SignInForm";

export const SignInPage: FC = () => (
  <SignInForm onSubmit={values => alert(JSON.stringify(values))}/>
)