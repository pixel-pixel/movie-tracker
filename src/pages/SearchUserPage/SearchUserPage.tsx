import React, { FC } from "react";
import UserList from "../../layouts/UserList";
import "./SearchUserPage.scss"

export const SearchUserPage: FC = () => {
  return (
    <div className="search-user-page">
      <UserList />
    </div>
  )
}