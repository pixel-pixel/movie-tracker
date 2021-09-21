import React, { FC } from "react";
import SignUpForm from "../../components/SignUpForm";

export const SignUpPage: FC = () => (
  <SignUpForm onSubmit={values => alert(JSON.stringify(values))}/>
)