import Icon from "@/icons/Icon";
import React from "react";
import { Gap } from "@/components";
// import iCan from "@/public/assets/1.jpg";
export default () => {
    return (
        <div className="flex flex-col w-full items-center justify-center">
            <img src="../../public/assets/1.jpg" height="200" width="400" />
            <div className="flex items-center rounded bg-slate-100 hover hover:shadow-lg cursor-pointer w-[400px] h-[80px] px-8">
                <Icon name="twitter" />
            </div>
            <Gap height={30} />
            <div className="flex items-center rounded bg-slate-100 hover hover:shadow-lg cursor-pointer w-[400px] h-[80px] px-8">
                <Icon name="github" />
            </div>
            <Gap height={30} />
            <div className="flex items-center rounded bg-slate-100 hover hover:shadow-lg cursor-pointer w-[400px] h-[80px] px-8">
                <Icon name="discord" />
            </div>
            <Gap height={30} />
            <div className="flex items-center rounded bg-slate-100 hover hover:shadow-lg cursor-pointer w-[400px] h-[80px] px-8">
                <Icon name="twitter" />
            </div>
            <Gap height={30} />
            <div className="flex items-center rounded bg-slate-100 hover hover:shadow-lg cursor-pointer w-[400px] h-[80px] px-8">
                <Icon name="twitter" />
            </div>
        </div>
    );
};
