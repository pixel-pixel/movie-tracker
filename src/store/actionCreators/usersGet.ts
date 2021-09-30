import { Dispatch } from "react";
import firebaseService from "../../services";
import { UsersGetAction } from "../types/usersGet";

export const getAllUsers = () => 
async(dispatch: Dispatch<UsersGetAction>) => {
  try {
    dispatch({type: "GET_USERS"})
    const users = await firebaseService.getAllUsers()
    dispatch({type: "GET_USERS_SUCCESS", payload: users})
  } catch (error) {
    dispatch({type: "GET_USERS_ERROR", payload: error})
  }
}