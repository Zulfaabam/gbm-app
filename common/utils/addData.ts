import { db } from "@/firebase/clientApp";
import { setDoc, doc } from "firebase/firestore";

const addData = async (folder: string, userId: string, body: any) => {
  let data,
    error = null;

  const timestamp: string = Date.now().toString();

  const docRef = doc(db, `${folder}-${userId}/${timestamp}`);

  try {
    data = await setDoc(docRef, body);
  } catch (err) {
    error = err;
  }

  return { data, error };
};

export default addData;