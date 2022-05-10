import React from "react";
interface Props {
    width?: number;
    height?: number;
}
export const Gap = ({ width, height }: Props) => {
    return <div style={{ width: `${width}px`, height: `${height}px` }}/>;
};
