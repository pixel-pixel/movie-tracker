import React, { FC, HTMLAttributes, useEffect, useState } from "react";
import { Filter, Serial } from "../../common/intarfaces";
import Search from "../../components/Search";
import SerialCard from "../../components/SerialCard";
import { useFindSeries, useTSelector } from "../../hooks";
import { useActions } from "../../hooks/useActions";
import { nameFilter } from "../../tools/Filters";
import "./SeriesList.scss"

export interface SeriesListProps extends HTMLAttributes<HTMLDivElement> {
  filters?: Filter<Serial>[]
}

export const SeriesList: FC<SeriesListProps> = ({
  filters = [],
  className,
  ...props
}) => {
  const { series } = useTSelector(s => s.search)
  const { searchSerials } = useActions() 
  useEffect(() => {
    searchSerials(...filters)
  }, [])

  const handleChange = (e: any) => {
    const name: string = e.target.value
    searchSerials(nameFilter(name), ...filters)
  }

  className = 'series-list ' + className

  return (  
    <div className={className}>
      <Search name="film-search" onChange={handleChange} />

      {series.map(s => (
        <SerialCard 
          id={s.id}
          name={s.name}
          image={s.image?.medium}
          genres={s.genres}
          rating={s.rating.average} />
      ))}
    </div>
  )
}