import { updateProfile, Auth } from "firebase/auth";

const updateUserProfile = async (
  auth: Auth,
  displayName: string,
  photoURL: string
) => {
  if (!auth.currentUser) return;

  await updateProfile(auth.currentUser, {
    displayName: displayName,
    photoURL: photoURL,
  });
};

export default updateUserProfile;
