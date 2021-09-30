import { Series } from "."
import Serial from "./Series"

const URL = 'https://api.tvmaze.com/'
const searchSeriesURL = 'https://api.tvmaze.com/search/shows?q='
const getSerialURL = 'https://api.tvmaze.com/shows/'

async function searchSeries(name: string | null) {
  if (!name) return []

  const response = await fetch(searchSeriesURL + name)
  const json: {show: Serial}[] = await response.json()
  const seriesArr = json.map(el => el.show)

  return seriesArr
}

async  function getSerialById(id: number) {
  const response = await fetch(getSerialURL + id)
  const json: Series = await response.json()
  return json
}

const tvmazeService = {
  searchSeries,
  getSerialById
}

export default tvmazeService