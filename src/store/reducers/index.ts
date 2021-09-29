import { combineReducers } from "redux";
import { serialReduser } from "./serialReduser";
import { userReducer } from "./userReduser";

const rootReduser = combineReducers({
  user: userReducer,
  serial: serialReduser
})

export default rootReduser 
export type RootState = ReturnType<typeof rootReduser>