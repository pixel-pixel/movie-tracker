import React, { FC } from "react";
import SerialCard from "../../components/SerialCard";
import { useFindSeries } from "../../hooks";
import "./SeriesList.scss"

export const SeriesList: FC = () => {
  const series = useFindSeries()

  return (  
    <div className="series-list">
      {series.map(s => (
        <SerialCard 
          name={s.name}
          image={s.image?.medium}
          summary={s.summary}
          genres={s.genres}
          rating={s.rating.average} />
      ))}
    </div>
  )
}