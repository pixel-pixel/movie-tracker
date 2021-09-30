import { User } from "../../common/intarfaces"

export interface UserState {
  user: User | null
  error: string | null
  loading: boolean
}

export type UserAction = 
  | FetchUserAction
  | FetchUserSuccessAction
  | FetchUserErrorAction
  | ForgetUserAction

interface FetchUserAction {
  type: "FETCH_USER"
}

interface FetchUserSuccessAction {
  type: "FETCH_USER_SUCCESS"
  payload: User
}

interface FetchUserErrorAction {
  type: "FETCH_USER_ERROR"
  payload: any
}

interface ForgetUserAction {
  type: "FORGET_USER"
}