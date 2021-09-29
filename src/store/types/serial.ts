import { Serial, SerialFilter } from "../../common/intarfaces";

export interface SerialState {
  filter: SerialFilter | null
  series: Serial[]
  loading: boolean
  error: any
}

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

export type SerialAction =
  | AddFilterAction
  | RemoveFilterAction
  | SearchSerialsAction
  | SearchSerialsSuccessAction
  | SearchSerialsErrorAction