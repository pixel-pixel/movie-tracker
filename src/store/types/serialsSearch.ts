import { Serial, SerialFilter } from "../../common/intarfaces";

export interface SerialsSearchState {
  filter: SerialFilter | null
  series: Serial[]
  loading: boolean
  error: any
}

export type SerialsSearchAction =
  | AddFilterAction
  | RemoveFilterAction
  | SearchSerialsAction
  | SearchSerialsSuccessAction
  | SearchSerialsErrorAction

interface AddFilterAction {
  type: "ADD_FILTER"
  payload: SerialFilter
}

interface RemoveFilterAction {
  type: "REMOVE_FILTER"
}

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