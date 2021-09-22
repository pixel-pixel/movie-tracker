import React, { FC, useContext, useState } from "react";
import Button from "../../components/Button";
import Search from "../../components/Search";
import SerialCard from "../../components/SerialCard";
import firebaseService from "../../services";
import tvmazeService, { Series } from "../../services/tvmazeService";
import { AuthContext } from "../../tools/Auth";

export const HomePage: FC = () => {
  const {user} = useContext(AuthContext)
  const [series, setSeries] = useState<Series[]>([])

  const onChange = async (e: any) => {
    setSeries(await tvmazeService.searchSeries(e.target.value))
  }

  return (
    <>
      <h1>
        Hello {user.email}
      </h1>
      <Button onClick={() => firebaseService.signOut()} label="sign out" />
      <Search name="search" onChange={onChange}/>
      {series.map(s => (
        <p>{JSON.stringify(s.image)}</p>
      ))}
    </>
  )
}