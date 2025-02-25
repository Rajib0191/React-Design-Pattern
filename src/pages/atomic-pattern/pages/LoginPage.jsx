import React, { useEffect, useState } from "react";
import AuthTemplate from "../components/templates/AuthTemplate";
import LoginForm from "../components/organisms/LoginForm";
import UserRowCard from "../components/atoms/UserRowCard";

const LoginPage = () => {
  const [showData, setShowData] = useState(null);
  const handleLogin = (data) => {
    if (data) {
      setShowData(data);
    }
  };

  useEffect(() => {
    if (showData) {
      const timeout = setTimeout(() => {
        setShowData(null);
      }, 3000);

      return () => clearTimeout(timeout); // Cleanup previous timeout
    }
  }, [showData]);

  return (
    <AuthTemplate>
      {showData && <UserRowCard data={showData} />}
      <LoginForm onSubmit={handleLogin} />
    </AuthTemplate>
  );
};

export default LoginPage;
