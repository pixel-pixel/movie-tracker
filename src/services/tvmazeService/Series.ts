export default interface Series {
  id: number
  url: string
  name: string
  type: string
  genres: string[]
  status: string
  runtime: number
  avarageRuntime: number
  premiered: string
  ended: string
  officialSite: string
  shedle: {
    time: string
    days: string[]
  }
  rating: {
    avarage: number
  }
  externals: {
    imdb: string
  }
  image: {
    medium: string
    original: string
  }
  sumary: string
}