import React, { FC, HTMLAttributes } from "react";
import Button from "../../components/Button";
import UserCard from "../../components/UserCard";
import { UserInfo } from "../../components/UserInfo/UserInfo";
import firebaseService from "../../services";
import "./UserAccount.scss"

export interface UserAccountProps extends HTMLAttributes<HTMLDivElement> {}

export const UserAccount:FC<UserAccountProps> = ({
  className,
  ...props
}) => {
  const handleSignOutClick = () => firebaseService.signOut()

  className = 'user-account ' + className

  return (
    <div className={className} {...props}>
      <UserCard />
      <UserInfo />
      <Button label="SIGN OUT" onClick={handleSignOutClick}/>
    </div>
  )
}