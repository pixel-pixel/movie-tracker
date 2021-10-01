import { Dispatch } from "react";
import { Serial, SerialFilter } from "../../common/intarfaces";
import tvmazeService from "../../services/tvmazeService";
import { SerialsSearchAction } from "../types/serialsSearch";

export const searchSerials = (...filters: SerialFilter[]) =>
async(dispatch: Dispatch<SerialsSearchAction>) => {
  try {
    dispatch({type: "SEARCH_SERIALS"})
    const series = await tvmazeService.searchSeries(...filters)
    console.log(series)
    dispatch({type: "SEARCH_SERIALS_SUCCESS", payload: series})
  } catch (error) {
    dispatch({type: "SEARCH_SERIALS_ERROR", payload: error})
  }
}