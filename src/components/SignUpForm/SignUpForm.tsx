import React, { FC } from "react";
import { Field, Form, Formik } from "formik"
import Button from "../Button";
import Input from "../Input";
import { registerShema } from "../../common/shemes";

export interface SignUpFormValues {
  name: string,
  email: string,
  password: string,
  password2: string
}

export interface SignUpFormProps {
  onSubmit: (values: SignUpFormValues) => void
}

export const SignUpForm: FC<SignUpFormProps> = ({ onSubmit }) => {
  const initialValues: SignUpFormValues = {
    name: '',
    email: '',
    password: '',
    password2: ''
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerShema}
      onSubmit={onSubmit}
    >
      <Form>
        <Field 
          name="name"
          type="text"
          as={Input} />
        <Field 
          name="email"
          type="email"
          as={Input} />
        <Field 
          name="password"
          type="text"
          as={Input} />
        <Field 
          name="password2"
          type="text"
          as={Input} />

        <Button type="submit" label="ok" />
      </Form>
    </Formik>
  )
}