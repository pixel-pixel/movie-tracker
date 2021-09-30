import { Dispatch } from "react";
import { UsersGetAction } from "../types/usersGet";

export const getAllUsers = () => 
async(dispatch: Dispatch<UsersGetAction>) => {
  try {
    dispatch({type: "GET_USERS"})
    //firebase
    
  } catch (error) {
    dispatch({type: "GET_USERS_ERROR", payload: error})
  }
}