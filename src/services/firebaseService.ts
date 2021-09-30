import { initializeApp } from "firebase/app"
import { getDatabase, ref, set, get, child, update, remove, onValue } from "firebase/database"
import { 
  createUserWithEmailAndPassword, 
  getAuth, 
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth"
import { User } from "../common/intarfaces"

const app = initializeApp({
  apiKey: "AIzaSyBUMloGU8stnSbFWe38XJXHj_Eqz-dzRJ8",
  authDomain: "movie-tracker-ce0ff.firebaseapp.com",
  projectId: "movie-tracker-ce0ff",
  messagingSenderId: "1068318498783",
  appId: "1:1068318498783:web:342f903d978eed52acae6a",
  measurementId: "G-JCTS9HDTG9",
  databaseURL: 'https://movie-tracker-ce0ff-default-rtdb.europe-west1.firebasedatabase.app'
})

const auth = getAuth(app)
const db = getDatabase()

const signUp = async(
  name: string, 
  email: string, 
  password: string, 
  onUpdate: (user: User) => void
  ) => {
  const authRes = await createUserWithEmailAndPassword(auth, email, password)
  const id = authRes.user.uid
  const user = new User(id, name)

  await set(ref(db, 'Users/' + id), user)
  
  onValue(ref(db, 'Users/' + id), snap => {
    onUpdate(snap.val() as User)
  })
}

const signIn = async(
  email: string, 
  password: string,
  onUpdate: (user: User) => void
  ) => {
  const authRes = await signInWithEmailAndPassword(auth, email, password)
  const id = authRes.user.uid
  const user = await get(child(ref(db), 'Users/' + id))

  if (!user.exists()) throw Error("User don't esists")

  onValue(ref(db, 'Users/' + id), snap => {
    onUpdate(snap.val() as User)
  })
}

const addSerial = (user: User, serialID: string) => {
  const serialIDs = [...(user.serialIDs ?? []), serialID]
  return update(ref(db, "Users/" + user.id), {serialIDs})
}

const removeSerial = (user: User, serialID: string) => {
  const serialIDs = user.serialIDs.filter(el => el !== serialID)
  return update(ref(db, "Users/" + user.id), {serialIDs})
}

const getAllUsers = async() => {
  const usersObj = await (await get(child(ref(db), 'Users/'))).val()
  const userArr = []

  for(let key in usersObj) {
    userArr.push(usersObj[key])
  }

  console.log(userArr)
  return userArr as User[]
}

const signOut = () => auth.signOut()
const onAuthChanged = (func: any) => onAuthStateChanged(auth, func)

const firebaseService = {
  signUp,
  signIn,
  signOut,
  onAuthChanged,
  addSerial,
  removeSerial,
  getAllUsers,
}

export default firebaseService