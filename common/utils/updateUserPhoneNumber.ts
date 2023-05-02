import { updatePhoneNumber, Auth, PhoneAuthCredential } from "firebase/auth";

const updateUserPhoneNumber = async (
  auth: Auth,
  phoneCredential: PhoneAuthCredential
) => {
  if (!auth.currentUser) return;

  await updatePhoneNumber(auth.currentUser, phoneCredential);
};

export default updateUserPhoneNumber;
