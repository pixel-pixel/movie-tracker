import React, { FC } from "react";
import Input from "../Input";

export const SignUpForm: FC = () => {
  return (
    <form>
      <Input name="name" />
      <Input name="email" />
      <Input name="password" />
      <Input name="password2" />
    </form>
  )
}