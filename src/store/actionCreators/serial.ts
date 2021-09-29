import { Dispatch } from "react";
import { SerialFilter } from "../../common/intarfaces";
import tvmazeService from "../../services/tvmazeService";
import { SerialAction } from "../types/serial";

export const addSerialSearchFilter = 
(filter: SerialFilter): SerialAction => ({type: "ADD_FILTER", payload: filter})

export const removeSerialSearchFilter =
(): SerialAction => ({type: "REMOVE_FILTER"})

export const searchSerial = (name: string) =>
async(dispatch: Dispatch<SerialAction>) => {
  try {
    dispatch({type: "SEARCH_SERIALS"})
    const series = await tvmazeService.searchSeries(name)
    dispatch({type: "SEARCH_SERIALS_SUCCESS", payload: series})
  } catch (error) {
    dispatch({type: "SEARCH_SERIALS_ERROR", payload: error})
  }
}