import React, { useEffect, useState } from "react";
import { Canister, ModalWrap } from "@/components";
import { Gap, Input } from "@/components";
import { BucketApi } from "@/apis/bucketApi";
import { Principal } from "@dfinity/principal";
import { RadialProgress } from "react-daisyui";
import { useSelector } from "react-redux";
import { useAuth } from "@/usehooks/useAuth";
import Icon from "@/icons/Icon";
import { RootState } from "@/redux/store";
import { LedgerApi } from "@/apis/ledgerApi";
import { CreateModal } from "@/components";
import { DktApi } from "@/apis/dktApi";
import { getToAccountIdentifier } from "@/utils/common";
import { AddCycles } from "./components";
import Create from "../Create";
import Storage from "@/utils/storage";
import { useParams } from "react-router-dom";
const items = ["name", "status", "install", "stop/start", "top up", "delete"];
interface Props {}
export const Canisters = () => {
    const [list, setList] = useState([]);
    const [icp, setIcp] = useState(0);
    const [status, setStatus] = useState<any>();
    const [addCycles, setAddCycles] = useState<boolean>(false);
    const [balance, setBalance] = useState<any>();
    const [create, setCreate] = useState<boolean>(false);
    const { hubId }: { hubId: string } = useParams();
    console.log(hubId, "dafdsfasf");
    const {
        isAuth,
        logOut,
        IILogIn,
        subAccountId,
        principal,
    }: {
        IILogIn: Function;
        isAuth: boolean;
        logOut: Function;
        subAccountId: string;
        principal: Principal;
    } = useAuth();

    useEffect(() => {
        if (principal) {
            if (hubId) {
                (async () => {
                    const res = await BucketApi(hubId).getCanisters();
                    if (res.ok) setList(res.ok);
                })();
                (async () => {
                    const res = await BucketApi(hubId).getStatus();
                    setStatus(res.ok);
                })();
            }
        }
    }, [principal, hubId]);
    return (
        <>
            <div className=" flex flex-col pl-[200px] pr-[80px] py-[80px] w-full ">
                <div className="flex align-center text-8xl font-medium pb-[40px]">
                    Manage Your Canister
                </div>
                <div className="flex align-center text-5xl font-medium pb-[40px]">
                    Station Status
                </div>
                <div className="flex items-center pb-[40px]">
                    <div className="flex flex-col w-[300px] h-[200px] bg-slate-100 rounded p-8">
                        <div className="flex justify-between items-center h-[33px]">
                            <div className="flex align-center text-4xl font-medium ">
                                Memory used
                            </div>
                        </div>
                        <Gap height={30} />
                        <div className="flex w-full justify-center items-center">
                            <RadialProgress
                                value={
                                    status
                                        ? Number(status.memory) /
                                          (1024 * 1024 * 1024 * 4)
                                        : 0
                                }
                                size="10rem"
                                thickness="1rem"
                                className="text-4xl"
                            >
                                {status
                                    ? Math.floor(
                                          Number(status.memory) /
                                              (1024 * 1024 * 1024 * 4)
                                      )
                                    : 0}{" "}
                                %
                            </RadialProgress>
                        </div>
                    </div>
                    <Gap width={40} />
                    <div className="flex flex-col w-[600px] h-[200px] bg-slate-100 rounded p-8">
                        <div className="flex justify-between items-center h-[33px]">
                            <div className="flex align-center text-4xl font-medium">
                                Cycles balance
                            </div>
                            <button
                                className=" w-[120px] h-full  text-3xl font-medium  border-[2px] border-salte-100 hover:bg-slate-50 focus:ring-4 focus:ring-slate-300 rounded  text-center "
                                onClick={() => setAddCycles(true)}
                            >
                                add cycles
                            </button>
                        </div>
                        <Gap height={30} />
                        <div className="flex w-full justify-center items-center text-6xl font-medium pb-3">
                            {status ? Number(status.cycle_balance) / 1e12 : "0"}{" "}
                            T
                        </div>
                        <div className="flex w-full justify-center items-center text-4xl ">
                            {status
                                ? (Number(status.cycle_balance) / 1e12) * 1.36
                                : "0"}{" "}
                            $
                        </div>
                    </div>
                    <Gap width={40} />
                    <div
                        className="flex flex-col w-[200px] h-[200px] bg-slate-100 rounded p-8 items-center justify-center hover:shadow-lg cursor-pointer"
                        onClick={() => setCreate(true)}
                    >
                        <Icon name="add" width="72" height="72" />
                    </div>
                </div>
                <div className="flex items-center justify-between h-[40px] mb-[20px] px-[40px] ">
                    {items.map((res) => (
                        <div className="w-[120px] text-5xl font-medium">
                            {res}
                        </div>
                    ))}
                </div>
                {list.map((res: any, index) => (
                    <>
                        <div>
                            {/* @ts-ignore */}
                            <Canister
                                key={index}
                                name={res.name}
                                desc={res.description}
                                index={index}
                                canisterId={res.canister_id}
                            />
                        </div>
                        <Gap height={30} />
                    </>
                ))}
            </div>
            <CreateModal open={create} setCreate={setCreate} bucket={hubId} />
            <ModalWrap setOpen={setAddCycles} open={addCycles}>
                <AddCycles setOpen={setAddCycles} hubId={hubId} />
            </ModalWrap>
        </>
    );
};
