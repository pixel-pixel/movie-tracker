import React, { FC, useContext } from "react";
import Button from "../../components/Button";
import firebaseService from "../../services";
import { AuthContext } from "../../tools/Auth";

export const HomePage: FC = () => {
  const {user} = useContext(AuthContext)

  return (
    <>
      <h1>
        Hello {user.email}
      </h1>
      <Button onClick={() => firebaseService.signOut()} label="sign out" />
    </>
  )
}