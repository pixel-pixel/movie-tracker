import React, { FC, HTMLAttributes } from "react";
import { User } from "../../common/intarfaces";
import UserCard from "../../components/UserCard";
import "./UserList.scss"

export interface UserListProps extends HTMLAttributes<HTMLDivElement> {
  users: User[]
}

export const UserList: FC<UserListProps> = ({
  users,
  className,
  ...props
}) => {
  className = 'user-list ' + className

  return (
    <div className={className} {...props}>
      {users.map(u => (
        <UserCard user={u} />
      ))}
    </div>
  )
}