import React, { useState } from "react";
import { Input } from "@/components";
import { ManageApi } from "@/apis/manageApi";
import { BucketApi } from "@/apis/bucketApi";
import { Principal } from "@dfinity/principal";
import { toast } from "react-toastify";
import { useAuth } from "@/usehooks/useAuth";
import Storage from "@/utils/storage";
interface Props {
  open: number;
  setDel: Function;
  canisterId: Principal;
  running: boolean;
  setStatus: Function;
  hubId: string;
}
export const StopModal = ({
  open,
  setDel,
  canisterId,
  hubId,
  running,
  setStatus,
}: Props) => {
  const handleClick = async () => {
    if (running)
      toast.promise(BucketApi(hubId).stopCanister(canisterId), {
        pending: "stopping canister ",
        success: {
          render() {
            (async () => {
              setStatus(undefined);
              const res = await ManageApi.getCanisterStatus(canisterId);
              setStatus(res);
            })();
            return `success !`;
          },
        },
        error: {
          render({ data }) {
            return `🤯 ${data}`;
          },
        },
      });
    else
      toast.promise(BucketApi(hubId).startCanister(canisterId), {
        pending: "start canister ",
        success: {
          render() {
            (async () => {
              setStatus(undefined);
              const res = await ManageApi.getCanisterStatus(canisterId);
              setStatus(res);
            })();
            return `success !`;
          },
        },
        error: {
          render({ data }) {
            return `🤯 ${data}`;
          },
        },
      });
    setDel(false);
  };

  const toggleClass = " transform translate-x-14";
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full 
            ${open ? `flex` : `hidden`} items-center justify-center z-50`}
    >
      <div
        className="absolute w-full h-full bg-gray-900 opacity-25"
        onClick={() => setDel(false)}
      ></div>
      <div className="bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 w-[600px]  p-[20px] rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-[20px]">
            <p className="text-5xl font-medium">
              {`Are you sure to ${running ? "stop" : "start"} this canister ?`}
            </p>
            <div
              className="close-icon cursor-pointer z-50"
              onClick={() => setDel(false)}
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

          <div className="flex justify-center py-[30px]">
            {/* <button className="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2">
                            Action
                        </button> */}
            <button
              className="bg-blue-400 px-[40px] py-[10px] rounded-lg text-white text-4xl hover:bg-blue-300"
              onClick={() => handleClick()}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
