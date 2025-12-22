import React from "react";

export default function CustomInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
}) {
  return (
    <div className="flex flex-col w-full">
      {label && <label className="mb-1 font-medium text-gray-700">{label}</label>}
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
      />
    </div>
  );
}
