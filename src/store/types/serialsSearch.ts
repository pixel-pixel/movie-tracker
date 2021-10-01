import { Serial, SerialFilter } from "../../common/intarfaces";

export interface SerialsSearchState {
  series: Serial[]
  loading: boolean
  error: any
}

export type SerialsSearchAction =
  | SearchSerialsAction
  | SearchSerialsSuccessAction
  | SearchSerialsErrorAction

interface SearchSerialsAction {
  type: "SEARCH_SERIALS"
}

interface SearchSerialsSuccessAction {
  type: "SEARCH_SERIALS_SUCCESS"
  payload: Serial[]
}

interface SearchSerialsErrorAction {
  type: "SEARCH_SERIALS_ERROR"
  payload: any
}