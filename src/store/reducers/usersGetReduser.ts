import { UsersGetAction, UsersGetState } from "../types/usersGet"

const initialState: UsersGetState = {
  users: [],
  loading: false,
  error: null
}

export const usersGetReduser = (state = initialState, action: UsersGetAction): UsersGetState => {
  switch (action.type) {
    case "GET_USERS":
      return {users: [], loading: true, error: null}

    case "GET_USERS_SUCCESS":
      return {users: action.payload, loading: false, error: null}

    case "GET_USERS_ERROR":
      return {users: [], loading: false, error: action.payload}

    default:
      return state
  }
}