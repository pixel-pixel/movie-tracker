import * as UserActionCreators from "./user"
import * as SerialsSearchActionCreators from "./serialSearch"
import * as SerialActionCreator from './serial'

export default {
  ...UserActionCreators,
  ...SerialsSearchActionCreators,
  ...SerialActionCreator,
}