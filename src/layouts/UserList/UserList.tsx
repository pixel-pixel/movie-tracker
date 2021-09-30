import React, { FC, HTMLAttributes, useState } from "react";
import { User } from "../../common/intarfaces";
import Search from "../../components/Search";
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
  const [search, setSearch] = useState('')
  const handleChange = (e: any) => setSearch(e.target.value)
  const nameFilter = (u: User) => {
    const n = u.name.toLowerCase()
    const s = search.toLowerCase()
    return n.includes(s)
  }  

  className = 'user-list ' + className

  return (
    <div className={className} {...props}>
      
      {users.filter(nameFilter).map(u => (
        <UserCard user={u} />
      ))}
      <Search name="user-searche" onChange={handleChange} />
    </div>
  )
}