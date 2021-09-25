import React, { FC } from "react";
import SerialCard from "../../components/SerialCard";
import { useFindSeries } from "../../hooks";
import SeriesList from "../../loyauts/SeriesList";
import "./SearchPage.scss"

export const SearchPage: FC = () => {
  const series = useFindSeries()

  return ( 
    <div className="search-page">
       <SeriesList />
    </div> 
  )
}