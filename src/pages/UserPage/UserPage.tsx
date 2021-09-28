import React, { FC } from "react";
import UserAccount from "../../layouts/UserAccount";
import "./UserPage.scss"

export const UserPage: FC = () => {
  return (
    <div className="user-page">
      <UserAccount />
    </div>
  )
}