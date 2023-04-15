import { updatePhoneNumber, Auth, PhoneAuthCredential } from "firebase/auth";

const updateUserPhoneNumber = (
  auth: Auth,
  phoneCredential: PhoneAuthCredential
) => {
  if (!auth.currentUser) return;

  updatePhoneNumber(auth.currentUser, phoneCredential)
    .then(() => {
      console.log("success");
    })
    .catch((error) => {
      console.log(error);
    });
};

export default updateUserPhoneNumber;
