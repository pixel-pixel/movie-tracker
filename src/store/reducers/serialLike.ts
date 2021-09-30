import { SerialLikeAction, SerialLikeState } from "../types/serialLike"

const initialState: SerialLikeState = {
  loading: false,
  error: null
}

export const serialLikeReduser = (state = initialState, action: SerialLikeAction): SerialLikeState => {
  switch (action.type) {
    case "SERIAL_LIKE_FETCH": 
      return {loading: true, error: null}

    case "SERIAL_LIKE_FETCH_SUCCESS": 
      return {loading: false, error: null}

    case "SERIAL_LIKE_FETCH_ERROR":
      return {loading: false, error: action.payload}

    default:
      return state
  }
}