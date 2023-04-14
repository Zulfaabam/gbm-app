import { storage } from "@/firebase/clientApp";
import { User } from "firebase/auth";
import { ref, uploadBytes } from "firebase/storage";

const uploadImage = (image: File, user: User) => {
  if (image == null) return;

  const imageRef = ref(storage, `user-photo/${image.name + user.uid}`);

  uploadBytes(imageRef, image)
    .then(() => {
      console.log("upload image success");
    })
    .catch((error) => console.log(error));
};

export default uploadImage;
