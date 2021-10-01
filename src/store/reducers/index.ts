import { combineReducers } from "redux";
import { serialLikeReduser } from "./serialLike";
import { serialReduser } from "./serialReduser";
import { serialsSearchReduser } from "./searchlReduser";
import { userReducer } from "./userReduser";

const rootReduser = combineReducers({
  user: userReducer,
  search: serialsSearchReduser,
  serial: serialReduser,
  serialLike: serialLikeReduser,
})

export default rootReduser 
export type RootState = ReturnType<typeof rootReduser>