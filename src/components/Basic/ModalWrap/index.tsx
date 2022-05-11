import React, {useState, useEffect} from "react";
import {KitApi} from "@/apis/kitApi";
import {Input} from "@/components";

interface Props {
    open: boolean;
    setOpen: Function;
    children: React.ReactNode;
}

export const ModalWrap = ({open, setOpen, children}: Props) => {
    const [val, setVal] = useState<number>(1);
    const toggleClass = " transform translate-x-14";
    return (
        <div
            className={`fixed top-0 left-0 h-full w-full 
            ${open ? `flex` : `hidden`} items-center justify-center z-50`}
        >
            <div
                className="absolute w-full h-full bg-gray-900 opacity-25"
                onClick={() => setOpen(false)}
            />
            <div
                className="bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 w-[600px]  p-[20px] rounded shadow-lg z-50 overflow-y-auto">
                <div className="modal-content py-4 text-left px-6">
                    {children}
                </div>
            </div>
        </div>
    );
};
