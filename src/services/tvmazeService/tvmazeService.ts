import Series from "./Series"

const searchSeriesURL = 'https://api.tvmaze.com/search/shows?q='

async function searchSeries(name: string) {
  const response = await fetch(searchSeriesURL + name)
  const json: {show: Series}[] = await response.json()
  const seriesArr = json.map(el => el.show)

  return seriesArr
}

const tvmazeService = {
  searchSeries
}

export default tvmazeService