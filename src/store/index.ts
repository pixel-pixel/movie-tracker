import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReduser from "./reducers";

const store = createStore(rootReduser , applyMiddleware(thunk))

export default store