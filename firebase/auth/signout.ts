import { getAuth, signOut } from "firebase/auth";
import { firebaseApp, auth } from "../clientApp";

export default async function logOut() {
  let result = null,
    error = null;

  try {
    result = await signOut(auth);
  } catch (e) {
    error = e;
  }

  return { res: result, error };
}
