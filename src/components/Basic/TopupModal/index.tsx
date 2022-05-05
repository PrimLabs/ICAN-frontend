import React, { useState, useEffect } from "react";
import { KitApi } from "@/apis/kitApi";
import { BucketApi } from "@/apis/bucketApi";
import { Input } from "@/components";
import { Principal } from "@dfinity/principal";
import { toast } from "react-toastify";
import Storage from "@/utils/storage";
import {ManageApi} from "@/apis/manageApi"
interface Props {
    open: number;
    setTopup: Function;
    canisterId: Principal;
    setStatus: Function;
    hubId: string;
}
export const TopupModal = ({ open, setTopup, canisterId, hubId,setStatus }: Props) => {
    const [toggle, setToggle] = useState(true);
    const [val, setVal] = useState<number>(1);

    const handleClick = async () => {
        toast.promise(BucketApi(hubId).depositCycles(canisterId, val), {
            pending: "Adding cycles to canister 😄",
            success: {
                render(){
                (async() =>{ setStatus(undefined);
                        const res = await ManageApi.getCanisterStatus(canisterId);
                        setStatus(res);
                    })();
                    return `success !`;
                }
            },
            error: {
                render({ data }) {
                    return `🤯 ${data}`;
                },
            },
        });
        setTopup(false);
    };
    const toggleClass = " transform translate-x-14";
    return (
        <div
            className={`fixed top-0 left-0 h-full w-full 
            ${open ? `flex` : `hidden`} items-center justify-center z-50`}
        >
            <div
                className="absolute w-full h-full bg-gray-900 opacity-25"
                onClick={() => setTopup(0)}
            ></div>
            <div className="bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 w-[600px]  p-[20px] rounded shadow-lg z-50 overflow-y-auto">
                <div className="modal-content py-4 text-left px-6">
                    <div className="flex justify-between items-center pb-[20px]">
                        <p className="text-7xl font-medium">
                            Add cycles to canister
                        </p>

                        <div
                            className="close-icon cursor-pointer z-50"
                            onClick={() => setTopup(0)}
                        >
                            <svg
                                className="fill-current text-black"
                                xmlns="http://www.w3.org/2000/svg"
                                width="36"
                                height="36"
                                viewBox="0 0 18 18"
                            >
                                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                            </svg>
                        </div>
                    </div>
                    <form
                        className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8"
                        action="#"
                    >
                        <div>
                            <label className="block mb-2 font-medium text-4xl text-gray-900 dark:text-gray-300">
                                amount (unit T)
                            </label>
                            <Input
                                id="name"
                                onChange={(e) => {
                                    setVal(e.target.value);
                                }}
                                value={val}
                                placeholder="1"
                            />
                        </div>
                    </form>
                    <div className="flex justify-center py-[30px]">
                        {/* <button className="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2">
                            Action
                        </button> */}
                        <button
                            className="bg-blue-400 px-[40px] py-[10px] rounded-lg text-white text-4xl hover:bg-indigo-400"
                            onClick={() => handleClick()}
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
