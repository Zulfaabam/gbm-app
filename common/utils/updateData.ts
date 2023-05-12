import { db } from "@/firebase/clientApp";
import { doc, updateDoc } from "firebase/firestore";

export const updateData = async (folder: string, id: string, body: any) => {
  const docRef = doc(db, `${folder}/${id}`);

  await updateDoc(docRef, body);
};
