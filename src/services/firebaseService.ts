import { initializeApp } from "firebase/app"
import { 
  createUserWithEmailAndPassword, 
  getAuth, 
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth"

const app = initializeApp({
  apiKey: "AIzaSyBUMloGU8stnSbFWe38XJXHj_Eqz-dzRJ8",
  authDomain: "movie-tracker-ce0ff.firebaseapp.com",
  projectId: "movie-tracker-ce0ff",
  messagingSenderId: "1068318498783",
  appId: "1:1068318498783:web:342f903d978eed52acae6a",
  measurementId: "G-JCTS9HDTG9"
})

const auth = getAuth(app)

const signUp = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
}
const signIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
}
const signOut = () => auth.signOut()
const onAuthChanged = (func: any) => onAuthStateChanged(auth, func)

const firebaseService ={
  signUp,
  signIn,
  signOut,
  onAuthChanged
}

export default firebaseService