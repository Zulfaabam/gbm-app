import { updateProfile, Auth } from "firebase/auth";

export const updateUserProfile = (
  auth: Auth,
  displayName: string,
  photoURL: string
) => {
  if (!auth.currentUser) return;

  updateProfile(auth.currentUser, {
    displayName: displayName,
    photoURL: photoURL,
  })
    .then(() => {
      console.log("success");
    })
    .catch((error) => {
      console.log(error);
    });
};
