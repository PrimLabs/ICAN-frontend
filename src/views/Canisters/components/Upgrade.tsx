import React, { useState } from "react";
import { Input } from "@/components";
import { BucketApi } from "@/apis/bucketApi";
import { Principal } from "@dfinity/principal";
import { toast } from "react-toastify";
import { useAuth } from "@/usehooks/useAuth";
import Storage from "@/utils/storage";
import LoadingButton from "@mui/lab/LoadingButton"
import {ManageApi} from "@/apis/manageApi"
//@ts-ignore
import hubWasm from "@/public/assets/hub.wasm";
interface Props {
  open: boolean;
  setOpen: Function;
  hubId: string;
}
export const Upgrade = ({
  open,
  setOpen,
  hubId,
}: Props) => {
  const [loading,setLoading] = React.useState(false);
  const handleClick = async () => {
    setLoading(true); 
    const xhr = new XMLHttpRequest();
    xhr.open('get', hubWasm);
    xhr.responseType = 'blob';
    xhr.send();
    xhr.onload = function () {
      if (this.status === 200 || this.status === 304) {
        console.log(this.response)
        const reader = new FileReader();
        reader.readAsArrayBuffer(this.response);
        reader.onload = async (e) => {
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
            const res = await ManageApi.intall_code(data,{ upgrade: null }, Principal.fromText(hubId));
            console.log(res);
           setLoading(false);
           setOpen(false); 
        };
        }
    };



     
  };

  const toggleClass = " transform translate-x-14";
  return (
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-[20px]">
            <p className="text-5xl font-medium">
              Do you want to upgrade hub  ?
            </p>
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

          <div className="flex justify-center py-[30px]">
            <LoadingButton loading={loading} onClick={() => handleClick()} variant="outlined" style={{width:"200px"}}>Yes</LoadingButton>
          </div>
        </div>
  );
};
