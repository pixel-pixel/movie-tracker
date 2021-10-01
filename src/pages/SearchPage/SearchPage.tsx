import React, { FC } from "react";
import { SerialFilter } from "../../common/intarfaces";
import PageChooser from "../../components/PageChooser";
import Search from "../../components/Search";
import SerialCard from "../../components/SerialCard";
import { useFindSeries, useTSelector } from "../../hooks";
import { useActions } from "../../hooks/useActions";
import SeriesList from "../../layouts/SeriesList";
import { serialNameFilter } from "../../tools/Filters";
import "./SearchPage.scss"

export const SearchPage: FC = () => {
  const { series, loading, error } = useTSelector(state => state.serialSearch)
  const { searchSerials } = useActions()

  const handleChange = (e: any) => {
    const name: string = e.target.value
    searchSerials(serialNameFilter(name))
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