import { User } from "../../common/intarfaces"
import { UserAction } from "../types"

interface UserState {
  user: User | null
  error: string | null
  loading: boolean
}

const initialState: UserState = {
  user: null,
  error: null,
  loading: false, 
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case "FETCH_USER": 
      return {loading: true, user: null, error: null}

    case "FETCH_USER_SUCCESS":
      return {loading: false, user: action.payload, error: null}

    case "FETCH_USER_ERROR":
      return {error: action.payload, loading: false, user: null}

    case "FORGET_USER":
      return {loading: false, user:  null, error: null}

    default:
      return state
  }
}