import React, { FC, useEffect } from "react";
import { useTSelector } from "../../hooks";
import { useActions } from "../../hooks/useActions";
import UserList from "../../layouts/UserList";
import "./SearchUserPage.scss"

export const SearchUserPage: FC = () => {
  const { users } = useTSelector(s => s.usersGet)
  const { getAllUsers } = useActions()
  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <div className="search-user-page">
      <UserList users={users}/>
    </div>
  )
}