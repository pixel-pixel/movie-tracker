import { combineReducers } from "redux";
import { serialReduser } from "./serialReduser";
import { serialsSearchReduser } from "./serialsSearchlReduser";
import { userReducer } from "./userReduser";

const rootReduser = combineReducers({
  user: userReducer,
  serialSearch: serialsSearchReduser,
  serial: serialReduser,
})

export default rootReduser 
export type RootState = ReturnType<typeof rootReduser>