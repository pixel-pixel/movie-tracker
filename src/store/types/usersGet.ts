import { User } from "../../common/intarfaces";

export interface UsersGetState {
  users: User[],
  loading: boolean,
  error: any
}

export type UsersGetAction = 
  | GetUsersAction
  | GetUsersSuccessAction
  | GetUsersErrorAction

interface GetUsersAction {
  type: "GET_USERS"
}

interface GetUsersSuccessAction {
  type: "GET_USERS_SUCCESS"
  payload: User[]
}

interface GetUsersErrorAction {
  type: "GET_USERS_ERROR"
  payload: any
}