import { Dispatch } from "react";
import { SignUpValues } from "../../common/intarfaces";
import { SignInValues } from "../../common/intarfaces";
import firebaseService from "../../services";
import { UserAction } from "../types";

export const signUp = ({name, email, password, password2}: SignUpValues) => 
async (dispatch: Dispatch<UserAction>) => {
  try {
    dispatch({type: "FETCH_USER"})
    await firebaseService.signUp(email, password)
    //TODO add user to db
    dispatch({type: "FETCH_USER_SUCCESS", payload: {
      name,
      iamgeURL: null,
      filmsIDs: [],
      actorsIDs: [],
      friendsIDs: []
    }})    
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
      name: "fd", 
      iamgeURL: null,
      filmsIDs: [],
      actorsIDs: [],
      friendsIDs: []
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