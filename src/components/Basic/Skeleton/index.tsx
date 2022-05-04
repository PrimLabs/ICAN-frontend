import React from "react";
interface Props {
    width?: string;
    height?: string;
}
export const Skeleton = ({ width, height }: Props) => {
    return (
        <div
            className={`flex animate-pulse flex-row items-center w-[${
                width ? width : "30px"
            }] h-[${height ? height : "24px"}] justify-center space-x-5`}
        >
            <div className="w-full h-full bg-gray-300 rounded-md "></div>
        </div>
    );
};
