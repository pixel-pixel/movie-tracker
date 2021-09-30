import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'

import tvmazeService, { Series } from '../services/tvmazeService';
import { State } from '../Oldstore';

export function useFindSeries() {
  // const [series, setSeries] = useState<Series[]>([])

  // const findText = useSelector<State, State['findText']>(state => state.findText)
  
  // useEffect(() => {
  //   tvmazeService.searchSeries(findText)
  //   .then(series => {
  //     setSeries(series)
  //   })
  // }, [findText])

  // return series

  return []
}