import React, { useContext } from "react";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { AuthContext } from "context/AuthContext";

const MainLayout: React.FC = ({ children }) => {
  const user = useContext(AuthContext);

  return (
    <>
      <Navbar user={user} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
