import React from "react";
import Input from "../atoms/Input";

const InputField = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col gap-0.5 mb-3">
      <label
        htmlFor={type}
        className="block mb-0.5 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
