import { Dispatch } from "react";
import { SignUpValues } from "../../common/intarfaces";
import { SignInValues } from "../../common/intarfaces";
import firebaseService from "../../services";
import { UserAction } from "../types/user";

export const signUp = ({name, email, password}: SignUpValues) => 
async (dispatch: Dispatch<UserAction>) => {
  try {
    dispatch({type: "FETCH_USER"})
    const user = await firebaseService.signUp(name, email, password)
    dispatch({type: "FETCH_USER_SUCCESS", payload: user})    
  } catch (error) {
    dispatch({type: "FETCH_USER_ERROR", payload: error})
  }
}


export const signIn = ({email, password}: SignInValues) => 
async (dispatch: Dispatch<UserAction>) => {
  try {
    dispatch({type: "FETCH_USER"})
    //TODO get user from db
    await firebaseService.signIn(email, password)
    dispatch({type: "FETCH_USER_SUCCESS", payload: {
      id: 0,
      name: "fd", 
      email,
      iamgeURL: null,
      serialIds: [],
      actorIDs: [],
      friendIDs: [],
      news: []
    }})
  } catch (error) {
    dispatch({type: "FETCH_USER_ERROR", payload: error})
  }
}

export const signOut = () => 
async (dispatch: Dispatch<UserAction>) => {
  try {
    dispatch({type: "FORGET_USER"})
    await firebaseService.signOut()
  } catch (error) {
     dispatch({type: "FETCH_USER_ERROR", payload: error})
  }
}