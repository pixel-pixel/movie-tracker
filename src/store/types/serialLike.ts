export interface SerialLikeState {
  loading: boolean
  error: any
}

export type SerialLikeAction =
  | SerialLikeFetchAction
  | SerialLikeFetchSuccessAction
  | SerialLikeFetchErrorAction

interface SerialLikeFetchAction {
  type: "SERIAL_LIKE_FETCH"
}

interface SerialLikeFetchSuccessAction {
  type: "SERIAL_LIKE_FETCH_SUCCESS"
}

interface SerialLikeFetchErrorAction {
  type: "SERIAL_LIKE_FETCH_ERROR"
  payload: any
}