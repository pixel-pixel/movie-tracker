import React, { FC } from "react";
import { Field, Form, Formik } from "formik"
import Button from "../Button";
import Input from "../Input";
import { loginShema } from "../../common/shemes";

export interface SignInFormValues {
  email: string,
  password: string,
}
  
export interface SignInFormProps {
  onSubmit: (values: SignInFormValues) => void
}

export const SignInForm: FC<SignInFormProps> = ({ onSubmit }) => {
  const initialValues: SignInFormValues = {
    email: '',
    password: '',
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginShema}
      onSubmit={onSubmit}
    >
      <Form>
        <Field 
          name="email"
          type="email"
          as={Input} />
        <Field 
          name="password"
          type="text"
          as={Input} />

        <Button type="submit" label="ok" />
      </Form>
    </Formik>
  )
}