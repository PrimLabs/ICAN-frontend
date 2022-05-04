import { width } from "@mui/system";

interface Props {
    width?: number;
    height?: number;
}
export const Skeleton = ({ width, height }: Props) => {
    return (
        <div
            className={`flex animate-pulse flex-row items-center w-[${
                width ? width : "100px"
            }] h-[${height ? height : "24px"}] justify-center space-x-5`}
        >
            <div className="w-full h-full bg-gray-300 rounded-md "></div>
        </div>
    );
};
