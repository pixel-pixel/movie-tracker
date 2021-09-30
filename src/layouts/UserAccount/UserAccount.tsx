import React, { FC, HTMLAttributes } from "react";
import Button from "../../components/Button";
import UserCard from "../../components/UserCard";
import { UserInfo } from "../../components/UserInfo/UserInfo";
import { useTSelector } from "../../hooks";
import { useActions } from "../../hooks/useActions";
import firebaseService from "../../services";
import "./UserAccount.scss"

export interface UserAccountProps extends HTMLAttributes<HTMLDivElement> {}

export const UserAccount:FC<UserAccountProps> = ({
  className,
  ...props
}) => {
  const { user } = useTSelector(state => state.user)
  const { signOut } = useActions()


  className = 'user-account ' + className

  return (
    <div className={className} {...props}>
      <UserCard user={user}/>
      <UserInfo />
      <Button label="SIGN OUT" onClick={signOut}/>
    </div>
  )
}