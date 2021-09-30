import { Dispatch } from "react";
import { SerialFilter } from "../../common/intarfaces";
import tvmazeService from "../../services/tvmazeService";
import { SerialsSearchAction } from "../types/serialsSearch";

export const addSerialSearchFilter = 
(filter: SerialFilter): SerialsSearchAction => ({type: "ADD_FILTER", payload: filter})

export const removeSerialSearchFilter =
(): SerialsSearchAction => ({type: "REMOVE_FILTER"})

export const searchSerials = (name: string) =>
async(dispatch: Dispatch<SerialsSearchAction>) => {
  try {
    dispatch({type: "SEARCH_SERIALS"})
    const series = await tvmazeService.searchSeries(name)
    dispatch({type: "SEARCH_SERIALS_SUCCESS", payload: series})
  } catch (error) {
    dispatch({type: "SEARCH_SERIALS_ERROR", payload: error})
  }
}