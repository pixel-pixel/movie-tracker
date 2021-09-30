import { async } from "firebase/node_modules/@firebase/util";
import { Dispatch } from "react";
import { User } from "../../common/intarfaces";
import firebaseService from "../../services";
import { SerialLikeAction } from "../types/serialLike";

export const addSerial = (user: User, serialID: string) => 
async(dispatch: Dispatch<SerialLikeAction>) => {
  try {
    dispatch({type: "SERIAL_LIKE_FETCH"})
    await firebaseService.addSerial(user, serialID)
    dispatch({type: "SERIAL_LIKE_FETCH_SUCCESS"})
  } catch (error) {
    dispatch({type: "SERIAL_LIKE_FETCH_ERROR", payload: error})
  }
}

export const removeSerial = (user: User, serialID: string) => 
async(dispatch: Dispatch<SerialLikeAction>) => {
  try {
    dispatch({type: "SERIAL_LIKE_FETCH"})
    await firebaseService.removeSerial(user, serialID)
    dispatch({type: "SERIAL_LIKE_FETCH_SUCCESS"})
  } catch (error) {
    dispatch({type: "SERIAL_LIKE_FETCH_ERROR", payload: error})
  }
}