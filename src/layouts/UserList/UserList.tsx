import React, { FC } from "react";
import UserCard from "../../components/UserCard";
import "./UserList.scss"

export const UserList: FC = () => {
  const arr = [1, 2, 3, 4, 5, 6]

  return (
    <div className="user-list">
      {arr.map(item => (
        <UserCard />
      ))}
    </div>
  )
}