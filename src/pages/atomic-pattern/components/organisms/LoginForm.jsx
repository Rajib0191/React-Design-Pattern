import React, { useState } from "react";
import InputField from "../molecules/InputField";
import Button from "../atoms/Button";

const LoginForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({
          email: "",
          password: "",
        });
      }}
      className="w-1/5 p-6 bg-white rounded shadow-md"
    >
      <InputField
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
      />
      <InputField
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={handleChange}
      />
      <Button label="Login" onClick={() => onSubmit(formData)} />
    </form>
  );
};

export default LoginForm;
