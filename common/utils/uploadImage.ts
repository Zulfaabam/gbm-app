import { storage } from "@/firebase/clientApp";
import { User } from "firebase/auth";
import { ref, uploadBytes } from "firebase/storage";

const uploadImage = async (image: File, user: User) => {
  if (image == null) return;

  let data,
    error = null;

  const imageRef = ref(storage, `user-photo/${image.name + user.uid}`);

  try {
    data = await uploadBytes(imageRef, image);
  } catch (e) {
    error = e;
  }

  return { data, error };

  // uploadBytes(imageRef, image)
  //   .then((res) => {
  //     getDownloadURL(res.ref)
  //       .then((url) => console.log(url))
  //       .catch((error) => console.log(error));
  //     console.log("upload image success");
  //   })
  //   .catch((error) => console.log(error));
};

export default uploadImage;
