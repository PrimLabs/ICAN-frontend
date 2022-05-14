import React from "react";
import "./index.css";

interface Props {
  id: string;
  placeholder: string;
  onChange: Function;
  required?: boolean;
  error?: string;
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
    <>
      <input
        type={type ? type : "text"}
        id={id}
        className={
          !error
            ? "bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            : "bg-red-50 border border-red-500 text-3xl rounded-lg focus:ring-red-500  focus:border-red-500 block w-full p-2.5 "
        }
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        required
      />
      {error ? (
        <p className="mt-2 text-2xl text-red-600 dark:text-red-500">{error}</p>
      ) : (
        ""
      )}
    </>
  );
};
