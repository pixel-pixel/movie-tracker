import { initializeApp } from "firebase/app"
import { getDatabase, ref, set, get, child, update, remove } from "firebase/database"
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

const signUp = async(name: string, email: string, password: string) => {
  await createUserWithEmailAndPassword(auth, email, password)
  
  const id = await (await get(child(ref(db), 'Users/'))).size
  const user = new User(id, name, email)

  await set(ref(db, 'Users/' + id), user)
  return user
}
const signIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
}
const signOut = () => auth.signOut()
const onAuthChanged = (func: any) => onAuthStateChanged(auth, func)

const firebaseService = {
  signUp,
  signIn,
  signOut,
  onAuthChanged
}

export default firebaseService