import React from "react";

interface Props {
  id: string;
  placeholder: string;
  onChange: Function;
  required?: boolean;
  error?: boolean;
  value: any;
  type?: string;
  readOnly?: boolean;
}

export const Input = ({
  id,
  placeholder,
  required,
  onChange,
  value,
  error,
  type,
  readOnly,
}: Props) => {
  return (
    <input
      type="text"
      id={id}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
      placeholder={placeholder}
      required
    ></input>
  );
};
