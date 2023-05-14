import { storage } from "@/firebase/clientApp";
import { User } from "firebase/auth";
import { ref, uploadBytes } from "firebase/storage";

const uploadPhoto = async (folder: string, image: File, user: User) => {
  if (image == null) return;

  let data,
    error = null;

  const imageRef = ref(storage, `${folder}/${image.name + "-" + user.uid}`);

  try {
    data = await uploadBytes(imageRef, image);
  } catch (e) {
    error = e;
  }

  return { data, error };
};

export default uploadPhoto;
