import React, { FC, HTMLAttributes, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Filter, Serial } from "../../common/intarfaces";
import FilterComponent from "../../components/Filter";
import Search from "../../components/Search";
import SerialCard from "../../components/SerialCard";
import { useFindSeries, useTSelector } from "../../hooks";
import { useActions } from "../../hooks/useActions";
import { genresFilter, nameFilter } from "../../tools/Filters";
import "./SeriesList.scss"

export interface SeriesListProps extends HTMLAttributes<HTMLDivElement> {
  filters?: Filter<Serial>[]
}

export const SeriesList: FC<SeriesListProps> = ({
  filters = [],
  className,
  ...props
}) => {
  const [name, setName] = useState('')
  const [genres, setGenres] = useState<string[]>([])
  const { series } = useTSelector(s => s.search)
  const { searchSerials } = useActions() 
  useEffect(() => {
    console.log(9)
    searchSerials(nameFilter(name), genresFilter(genres), ...filters)
  }, [name, genres, ...filters])

  const handleChange = (e: any) => {
    const name: string = e.target.value
    setName(name)
  }

  className = 'series-list ' + className

  return (  
    <div className={className}>
      <Search name="film-search" onChange={handleChange} />
      <FilterComponent by={['drama', 'comedy', 'romance']} selected={genres} setSelected={setGenres} />

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