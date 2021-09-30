import { combineReducers } from "redux";
import { serialLikeReduser } from "./serialLike";
import { serialReduser } from "./serialReduser";
import { serialsSearchReduser } from "./serialsSearchlReduser";
import { userReducer } from "./userReduser";
import { usersGetReduser } from "./usersGetReduser";

const rootReduser = combineReducers({
  user: userReducer,
  serialSearch: serialsSearchReduser,
  serial: serialReduser,
  serialLike: serialLikeReduser,
  usersGet: usersGetReduser,
})

export default rootReduser 
export type RootState = ReturnType<typeof rootReduser>