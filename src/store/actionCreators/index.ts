import * as UserActionCreators from "./user"
import * as SerialsSearchActionCreators from "./search"
import * as SerialActionCreator from './serial'
import * as SerialLikeActionCreator from './serialLike'

export default {
  ...UserActionCreators,
  ...SerialsSearchActionCreators,
  ...SerialActionCreator,
  ...SerialLikeActionCreator,
}