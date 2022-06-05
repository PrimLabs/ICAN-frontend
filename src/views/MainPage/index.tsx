import Icon from "@/icons/Icon";
import React, { useState } from "react";
import { Gap } from "@/components";
import { useAuth } from "@/usehooks/useAuth";
import { ToolTip } from "@/components";
import copy from "copy-to-clipboard";
//@ts-ignore
import iCan from "../../public/assets/1.jpg";
export default () => {
  const { isAuth, IILogIn }: any = useAuth();
  const [copied, setCopy] = useState(false);
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <img src={iCan} height="200" width="400" />
      <div className="grid grid-rows-1 grid-flow-col gap-4">
        <ToolTip title={`twitter`} placement="top">
          <div
            className="flex items-center rounded bg-slate-100 hover hover:shadow-lg cursor-pointer w-[80px] h-[80px] px-8"
            onClick={() => {
              window.open(`https://twitter.com/iCAN_DAPP`, "_blank");
            }}
          >
            <Icon name="twitter" />
          </div>
        </ToolTip>

        <ToolTip title={`github`} placement="top">
          <div
            className="flex items-center rounded bg-slate-100 hover hover:shadow-lg cursor-pointer w-[80px] h-[80px] px-8"
            onClick={() => {
              window.open(
                `https://github.com/PrimLabs/iCAN-Interface`,
                "_blank"
              );
            }}
          >
            <Icon name="github" />
          </div>
        </ToolTip>

        <ToolTip title={`document`} placement="top">
          <div
            onClick={() => {
              window.open(`https://2609367266.gitbook.io/ican/`, "_blank");
            }}
            className="flex items-center rounded bg-slate-100 hover hover:shadow-lg cursor-pointer w-[80px] h-[80px] px-8"
          >
            <Icon name="document" />
          </div>
        </ToolTip>

        <ToolTip title={`mail ${copied ? "copied" : ""}`} placement="top">
          <div
            onClick={() => {
              copy("team@icantool.app");
              setCopy(true);
              setTimeout(() => setCopy(false), 1000);
            }}
            className="flex items-center rounded bg-slate-100 hover hover:shadow-lg cursor-pointer w-[80px] h-[80px] px-8"
          >
            <Icon name="mail" />
          </div>
        </ToolTip>
        <ToolTip title={`discord`} placement="top">
          <div
            onClick={() => {
              window.open(`https://discord.gg/2Gw2EVj9uw`, "_blank");
            }}
            className="flex items-center rounded bg-slate-100 hover hover:shadow-lg cursor-pointer w-[80px] h-[80px] px-8"
          >
            <Icon name="discord" />
          </div>
        </ToolTip>
      </div>
      <Gap height={30} />
      {isAuth ? (
        ""
      ) : (
        <>
          <div className="text-5xl">Please login first</div>
          <Gap height={30} />
          <div
            className="bg-blue-100 mb-[40px] rounded h-[90px] w-[90px] flex justify-center items-center hover:shadow hover: cursor-pointer"
            onClick={() => IILogIn()}
          >
            <Icon name="login" />
          </div>
        </>
      )}
    </div>
  );
};
