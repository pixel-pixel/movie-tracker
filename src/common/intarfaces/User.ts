// export interface User {
//   id: number
//   name: string
//   iamgeURL: string | null
//   serialIds: string[]
//   actorIDs: string[]
//   friendIDs: string[]
//   news: {userID: number, serialID: number}[]
// }

export class User {
  id: number
  name: string
  email: string
  iamgeURL: string | null
  serialIds: string[]
  actorIDs: string[]
  friendIDs: string[]
  news: {userID: number, serialID: number}[]

  constructor(id: number, name: string, email: string) {
    this.id = id
    this.name = name
    this.email = email
    this.iamgeURL = null
    this.serialIds = []
    this.actorIDs = []
    this.friendIDs = []
    this.news = []
  }
}