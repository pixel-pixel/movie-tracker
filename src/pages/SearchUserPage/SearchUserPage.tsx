import React, { FC, useEffect } from "react";
import { useTSelector } from "../../hooks";
import { useActions } from "../../hooks/useActions";
import UserList from "../../layouts/UserList";
import "./SearchUserPage.scss"

export const SearchUserPage: FC = () => {

  return (
    <div className="search-user-page">
      <UserList />
    </div>
  )
}