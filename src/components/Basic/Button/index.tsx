import React from "react";
interface Props {
  width?: string;
  height?: string;
  onClick: Function;
  children: React.ReactNode;
}
export const Button = ({width,height,onClick,children}: Props) => {
  return <button
              className={`bg-blue-400 ${width ? width : "w-40"} ${height ? height : " h-96"} rounded-lg text-white text-4xl hover:bg-blue-300`}
              onClick={() => onClick()}
            >
              {children}
            </button> 
}