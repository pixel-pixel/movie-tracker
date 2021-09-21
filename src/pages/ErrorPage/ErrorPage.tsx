import React, { FC } from "react";
import Button from "../../components/Button";
import { firebaseService } from "../../services";

export const ErrorPage: FC = () => (
  <>
    <h1>
    Error page
  </h1>
  <Button onClick={() => firebaseService.signOut()} label="sign out" />
  </>
)