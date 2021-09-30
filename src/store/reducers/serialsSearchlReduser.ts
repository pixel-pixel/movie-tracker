import { SerialsSearchAction, SerialsSearchState } from "../types/serialsSearch"

const initialState: SerialsSearchState = {
  filter: null,
  series: [],
  loading: false,
  error: null
}

export const serialsSearchReduser = (state = initialState, action: SerialsSearchAction): SerialsSearchState => {
  switch (action.type) {
    case "ADD_FILTER":
      return {...state, filter: action.payload}

    case "REMOVE_FILTER":
      return {...state, filter: null}

    case "SEARCH_SERIALS":
      return {...state, series: [], loading: true, error: null}

    case "SEARCH_SERIALS_SUCCESS":
      return {...state, series: action.payload, loading: false, error: null}

    case "SEARCH_SERIALS_ERROR": 
      return {...state, series: [], loading: false, error: true}

    default:
      return state
  }
}