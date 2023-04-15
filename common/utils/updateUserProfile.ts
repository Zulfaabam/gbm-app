import { updateProfile, Auth } from "firebase/auth";

const updateUserProfile = (
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
      console.log("update profile success");
    })
    .catch((error) => {
      console.log(error);
    });
};

export default updateUserProfile;
