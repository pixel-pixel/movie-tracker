import * as UserActionCreators from "./user"
import * as SerialsSearchActionCreators from "./search"
import * as SerialActionCreator from './serial'
import * as SerialLikeActionCreator from './serialLike'
import * as UsersGetActionCreator from "./usersGet"

export default {
  ...UserActionCreators,
  ...SerialsSearchActionCreators,
  ...SerialActionCreator,
  ...SerialLikeActionCreator,
  ...UsersGetActionCreator,
}