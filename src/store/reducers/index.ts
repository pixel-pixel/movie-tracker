import { combineReducers } from "redux";
import { userReducer } from "./userReduser";

const rootReduser = combineReducers({
  user: userReducer
})

export default rootReduser 
export type RootState = ReturnType<typeof rootReduser>