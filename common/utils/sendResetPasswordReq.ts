import { Auth, sendPasswordResetEmail } from "firebase/auth";

const sendResetPasswordReq = (auth: Auth, email: string) => {
  if (!auth.currentUser) return;

  sendPasswordResetEmail(auth, email)
    .then(() => alert("Password reset email dikirim, cek email"))
    .catch((error) => alert(error));
};

export default sendResetPasswordReq;
