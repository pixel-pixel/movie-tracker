import React, { FC } from "react";
import PageChooser from "../../components/PageChooser";
import Search from "../../components/Search";
import SerialCard from "../../components/SerialCard";
import { useFindSeries, useTSelector } from "../../hooks";
import { useActions } from "../../hooks/useActions";
import SeriesList from "../../layouts/SeriesList";
import "./SearchPage.scss"

export const SearchPage: FC = () => {
  const { series, loading, error } = useTSelector(state => state.serial)
  const { searchSerial } = useActions()

  const handleChange = (e: any) => {
    const name = e.target.value
    searchSerial(name)
  }

  if (error) console.log(error)

  return ( 
    <div className="search-page">
      <Search 
        name="film-search" 
        onChange={handleChange} />
      {loading ? 
        <p>loading...</p> :
        <SeriesList series={series} />}
    </div> 
  )
}