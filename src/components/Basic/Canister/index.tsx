import React, { useEffect, useState } from "react";
import { Principal } from "@dfinity/principal";
import { KitApi } from "@/apis/kitApi";
import { ManageApi } from "@/apis/manageApi";
import { useAuth } from "@/usehooks/useAuth";
import { TopupModal, DeleteModal, InstallModal } from "@/components";
import { useParams } from "react-router-dom";

interface Props {
    index: number;
    name: string;
    desc: string;
    canisterId: Principal;
}
export const Canister = ({ name, canisterId, index, desc }: Props) => {
    const { isAuth } = useAuth();
    const [topup, setTopup] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false);
    const [del, setDel] = useState<number>(0);
    const [install, setInstall] = useState<boolean>(false);
    const { hubId }: { hubId: string } = useParams();
    const fetch = async () => {
        console.time("status");
        const res = await ManageApi.getCanisterStatus(canisterId);
        console.log(res);
        console.timeEnd("status");
    };

    useEffect(() => {
        if (isAuth) fetch();
    }, [isAuth]);
    return (
        <>
            <DeleteModal
                open={del}
                setDel={setDel}
                canisterId={canisterId}
                hubId={hubId}
            />
            <InstallModal
                open={install}
                setOpen={setInstall}
                canisterId={canisterId}
            />
            <TopupModal
                open={topup}
                setTopup={setTopup}
                canisterId={canisterId}
                hubId={hubId}
            />
            <div
                className={`flex items-center justify-between w-full bg-slate-100 ${
                    !open ? "rounded" : "rounded-t"
                }  h-48 px-[40px]  hover:shadow-lg cursor-pointer`}
                onClick={() => setOpen(!open)}
            >
                <div className="flex items-center w-[120px] text-6xl">
                    {name}
                </div>
                <div className="flex items-center justify-center w-[120px] py-[10px] bg-green-400 rounded text-5xl font-medium text-white">
                    active
                </div>
                <button
                    className="bg-blue-400 w-[120px] py-[10px] font-medium rounded text-white text-5xl hover:bg-blue-300"
                    onClick={(e) => {
                        setInstall(true);
                        e.stopPropagation();
                    }}
                >
                    install
                </button>
                <button
                    className="bg-blue-300 w-[120px] py-[10px] font-medium rounded text-white text-5xl hover:bg-blue-300"
                    disabled
                >
                    stop
                </button>
                <button
                    className="bg-blue-400 w-[120px] py-[10px] font-medium rounded text-white text-5xl hover:bg-blue-300"
                    onClick={(e) => {
                        setTopup(1);
                        e.stopPropagation();
                    }}
                >
                    top up
                </button>
                <button
                    className="text-red-700 w-[120px] py-[10px] text-5xl font-medium hover:text-white border-[2px] border-red-700 hover:bg-red-600 focus:ring-4 focus:ring-red-300 rounded  text-center"
                    onClick={(e) => {
                        setDel(1);
                        e.stopPropagation();
                    }}
                >
                    delete
                </button>
            </div>
            <div
                className={`${
                    open ? "flex" : "hidden"
                } w-full bg-slate-50 rounded-b px-[40px] py-12 text-3xl`}
            >
                {desc}
            </div>
        </>
    );
};
