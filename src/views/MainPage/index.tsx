import Icon from "@/icons/Icon";
import React from "react";
import { Gap } from "@/components";
import { useAuth } from "@/usehooks/useAuth";

//@ts-ignore
import iCan from "../../public/assets/1.jpg";
export default () => {
  const { isAuth, IILogIn }: any = useAuth();
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <img src={iCan} height="200" width="400" />
      <div className="grid grid-rows-1 grid-flow-col gap-4">
        <div
          data-tooltip-target="tooltip-twitter"
          data-tooltip-placement="top"
          className="flex items-center rounded bg-slate-100 hover hover:shadow-lg cursor-pointer w-[80px] h-[80px] px-8"
        >
          <Icon name="twitter" />
        </div>
        <div
          data-tooltip-target="tooltip-github"
          data-tooltip-placement="top"
          className="flex items-center rounded bg-slate-100 hover hover:shadow-lg cursor-pointer w-[80px] h-[80px] px-8"
        >
          <Icon name="github" />
        </div>
        <div
          id="tooltip-github"
          role="tooltip"
          className="inline-block absolute invisible z-10 py-2 px-3 text-2xl font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          github
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <div
          id="tooltip-twitter"
          role="tooltip"
          className="inline-block absolute invisible z-10 py-2 px-3 text-2xl font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          twitter
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <div className="flex items-center rounded bg-slate-100 hover hover:shadow-lg cursor-pointer w-[80px] h-[80px] px-8">
          <Icon name="discord" />
        </div>
        <div className="flex items-center rounded bg-slate-100 hover hover:shadow-lg cursor-pointer w-[80px] h-[80px] px-8">
          <Icon name="document" />
        </div>

        {/* <Gap height={30} />
                <div className="flex items-center rounded bg-slate-100 hover hover:shadow-lg cursor-pointer w-[80px] h-[80px] px-8">
                    <Icon name="twitter" />
                </div> */}
      </div>
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
