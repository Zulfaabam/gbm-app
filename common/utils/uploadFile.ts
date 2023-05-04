import { storage } from "@/firebase/clientApp";
import { User } from "firebase/auth";
import { ref, uploadBytes } from "firebase/storage";

const uploadFile = async (folder: string, file: File, user: User) => {
  if (file == null) return;

  let data,
    error = null;

  const timestamp: string = Date.now().toString();

  const fileRef = ref(
    storage,
    `${folder}/${user.uid}/${timestamp}-${file.name}`
  );

  try {
    data = await uploadBytes(fileRef, file);
  } catch (e) {
    error = e;
  }

  return { data, error };
};

export default uploadFile;
