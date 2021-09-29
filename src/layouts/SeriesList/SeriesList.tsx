import React, { FC, HTMLAttributes } from "react";
import { Serial } from "../../common/intarfaces";
import SerialCard from "../../components/SerialCard";
import { useFindSeries } from "../../hooks";
import "./SeriesList.scss"

export interface SeriesListProps extends HTMLAttributes<HTMLDivElement> {
  series: Serial[]
}

export const SeriesList: FC<SeriesListProps> = ({
  series,
  className,
  ...props
}) => {
  className = 'series-list ' + className

  return (  
    <div className={className}>
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