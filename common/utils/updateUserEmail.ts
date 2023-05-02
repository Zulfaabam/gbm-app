import { Auth, updateEmail } from "firebase/auth";

const updateUserEmail = async (auth: Auth, email: string) => {
  if (!auth.currentUser) return;

  await updateEmail(auth.currentUser, email);
};

export default updateUserEmail;
