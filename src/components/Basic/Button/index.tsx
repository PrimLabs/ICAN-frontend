import React from "react";
interface Props {
  width?: string;
  height?: string;
  onClick: Function;
  disabled?: boolean;
  children: React.ReactNode;
}
export const Button = ({
  width,
  height,
  onClick,
  children,
  disabled,
}: Props) => {
  return (
    <button
      className={`${disabled ? "bg-blue-300" : "bg-blue-500"} ${
        width ? width : "w-48"
      } ${
        height ? height : " h-20"
      } rounded-lg flex justify-center items-center text-white px-6 text-4xl hover:bg-blue-300`}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
