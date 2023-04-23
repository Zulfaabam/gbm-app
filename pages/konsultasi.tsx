import RequiredLogin from "@/components/RequiredLogin";
import MainLayout from "@/components/layouts/MainLayout";
import { AuthContext } from "context/AuthContext";
import React, { useContext } from "react";

const konsultasi = () => {
  const user = useContext(AuthContext);

  if (user == null)
    return (
      <MainLayout>
        <div className="py-7 max-w-8xl min-h-screen mx-auto flex flex-col justify-center items-center">
          <RequiredLogin />
        </div>
      </MainLayout>
    );

  return (
    <MainLayout>
      <div className="py-7 max-w-8xl min-h-screen mx-auto flex flex-col justify-center items-center">
        Konsul
      </div>
    </MainLayout>
  );
};

export default konsultasi;
