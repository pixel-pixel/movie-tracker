import React, { FC } from "react";

import SerialCard from "../../components/SerialCard";
import { useFindSeries } from "../../hooks";

export const SearchPage: FC = () => {
  const series = useFindSeries()

  return (  
    <>
      {series.map(s => (
        <SerialCard 
          name={s.name}
          image={s.image?.medium}
          summary={s.summary}
          genres={s.genres}
          rating={s.rating.average} />
      ))}
    </>
  )
}