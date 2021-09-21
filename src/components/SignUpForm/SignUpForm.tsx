import React, { FC } from "react";
import { Field, Form, Formik } from "formik"
import Button from "../Button";
import Input from "../Input";
import { registerShema } from "../../common/shemes";

interface SignUpFormValues {
  name: string | null,
  email: string | null,
  password: string | null,
  password2: string | null
}

export interface SignUpFormProps {
  onSubmit: (values: SignUpFormValues) => void
}

export const SignUpForm: FC<SignUpFormProps> = ({ onSubmit }) => {
  const initialValues: SignUpFormValues = {
    name: null,
    email: null,
    password: null,
    password2: null
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