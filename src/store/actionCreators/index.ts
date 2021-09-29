import * as UserActionCreators from "./user"
import * as SerialActionCreators from "./serial"

export default {
  ...UserActionCreators,
  ...SerialActionCreators
}