import React, { FC } from "react";
import Search from "../../components/Search";
import SerialCard from "../../components/SerialCard";
import { useFindSeries, useTSelector } from "../../hooks";
import { useActions } from "../../hooks/useActions";
import SeriesList from "../../layouts/SeriesList";
import { genresFilter, nameFilter } from "../../tools/Filters";
import "./SearchSeriesPage.scss"

export const SearchSeriesPage: FC = () => {

  return ( 
    <div className="search-page">
      <SeriesList />
    </div> 
  )
}