import React, { useState, useEffect } from "react";
import { Input } from "@/components";
import Icon from "@/icons/Icon";
import { KitApi } from "@/apis/kitApi";
import { ManageApi, Mode } from "@/apis/manageApi";
import { BucketApi } from "@/apis/bucketApi";
import { Principal } from "@dfinity/principal";
import { useAuth } from "@/usehooks/useAuth";
import { toast } from "react-toastify";
import { Gap } from "..";

interface Props {
  open: boolean;
  setOpen: Function;
  hubId: string;
  setStatus: Function;
  canisterId: Principal;
}
export const InstallModal = ({
  open,
  setOpen,
  hubId,
  canisterId,
  setStatus,
}: Props) => {
  const { principal } = useAuth();
  const [toggle, setToggle] = useState(true);
  const [file, setFile] = useState<string>("");
  const [data, setData] = useState<Array<number>>([]);
  const [mode, setMode] = useState<number>(1);
  const getMode = (number): Mode => {
    switch (number) {
      case 1:
        return { install: null };
      case 2:
        return { reinstall: null };
      case 3:
        return { upgrade: null };
      default:
        return { install: null };
    }
  };
  const handleFile = (e) => {
    //@ts-ignore

    const file = document.getElementById("wasm_install").files[0];
    console.log(file);
    if (!file) return;
    console.log(file);
    setFile(file.name);
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = (e) => {
      //@ts-ignore
      const result = e.target.result;
      //@ts-ignore
      const tData = new Uint8Array(result);
      const data = [];
      for (let i = 0; i < tData.length; i++) {
        //@ts-ignore
        data.push(tData[i]);
      }
      console.log(data);
      setData(data);
    };
  };
  useEffect(() => {}, [open]);
  const handleClick = async () => {
    if (principal) {
      toast.promise(ManageApi.intall_code(data, getMode(mode), canisterId), {
        pending: "installing canister 😄",
        success: {
          render() {
            (async () => {
              setStatus(undefined);
              const res = await BucketApi(hubId).canisterStatus(canisterId);
              setStatus(res.ok);
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
      setOpen(false);
    }
  };
  const toggleClass = "transform translate-x-14";
  return (
    <div
      className={`fixed w-full h-full top-0 left-0
            ${open ? `flex` : `hidden`} items-center justify-center z-50`}
    >
      <div
        className="absolute w-full h-full bg-gray-900 opacity-25"
        onClick={() => setOpen(false)}
      ></div>
      <div className="bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 w-[600px]  p-[20px] rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-[20px]">
            <p className="text-5xl font-medium">Install Canister</p>

            <div
              className="close-icon cursor-pointer z-50"
              onClick={() => setOpen(false)}
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

          <label className="block mb-2 font-medium text-4xl text-gray-900 dark:text-gray-300">
            Wasm File
          </label>
          {file ? (
            <div className="flex w-full items-center justify-between">
              <div className="text-3xl">{file}</div>
              <div
                className="close-icon cursor-pointer z-50"
                onClick={() => setFile("")}
              >
                <svg
                  className="fill-current text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                </svg>
              </div>
            </div>
          ) : (
            <div className="border border-dashed  rounded border-gray-500 relative">
              <input
                id="wasm_install"
                type="file"
                multiple
                className="cursor-pointer absolute opacity-0 w-full h-full p-20 z-50"
                onChange={(e) => handleFile(e)}
              />
              <div className="text-center p-10 flex flex-col items-center justify-center h-full w-full">
                <Icon name="file" />
                <p className="text-3xl">Select File or Drop File</p>
              </div>
            </div>
          )}

          <Gap height={30} />
          <label className="block mb-2 font-medium text-4xl text-gray-900 dark:text-gray-300">
            Mode
          </label>
          <div className="flex justify-center">
            <div className="mb-3 w-full">
              <select
                className="form-select appearance-none
                                block w-full
                                px-12
                                py-4
                                text-4xl
                                font-normal
                                bg-white bg-clip-padding bg-no-repeat
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                onChange={(e) => {
                  setMode(Number(e.target.value));
                }}
              >
                <option value="1">Install</option>
                <option value="2">Reinstall</option>
                <option value="3">Upgrade</option>
              </select>
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
              Install
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
