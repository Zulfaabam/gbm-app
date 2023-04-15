import { Auth, updateEmail } from "firebase/auth";

const updateUserEmail = (auth: Auth, email: string) => {
  if (!auth.currentUser) return;

  updateEmail(auth.currentUser, email)
    .then(() => {
      console.log("update email success");
    })
    .catch((error) => {
      console.log(error);
    });
};

export default updateUserEmail;
