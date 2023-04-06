import { firebaseApp } from "../clientApp";
import {
  signInWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const auth = getAuth(firebaseApp);

const provider = new GoogleAuthProvider();

export async function signIn(email: string, password: string) {
  let result = null,
    error = null;

  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export async function signInWithGoogle() {
  let result = null,
    error = null;

  try {
    result = await signInWithPopup(auth, provider);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
