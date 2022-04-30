import React, { useEffect, useState } from "react";
import { Canister } from "@/components";
import { Gap, Input } from "@/components";
import { BucketApi } from "@/apis/bucketApi";
import { Principal } from "@dfinity/principal";
import { RadialProgress } from "react-daisyui";
import { useSelector } from "react-redux";
import { useAuth } from "@/usehooks/useAuth";
import Icon from "@/icons/Icon";
import { RootState } from "@/redux/store";
import { LedgerApi } from "@/apis/ledgerApi";
import { DktApi } from "@/apis/dktApi";
import { getToAccountIdentifier } from "@/utils/common";
import { toast } from "react-toastify";
import Storage from "@/utils/storage";
export default () => {
    const [icp, setIcp] = useState(0);
    const [status, setStatus] = useState<any>();
    const [balance, setBalance] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
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
    const handleCreate = () => {
        console.log(icp);
        setLoading(true);
        toast.promise(DktApi.createBucket(icp), {
            pending: "creating Manage Hub",
            success: {
                render() {
                    DktApi.getBucket();
                    setLoading(false);
                    return `success !`;
                },
            },
            error: {
                render({ data }) {
                    setLoading(false);
                    return `🤯 ${data}`;
                },
            },
        });
    };
    useEffect(() => {
        if (principal) {
            (async () => {
                const res = await LedgerApi.account_balance(
                    getToAccountIdentifier(
                        Principal.fromText("5hssk-kiaaa-aaaag-aaeva-cai"),
                        principal
                    )
                );
                setBalance(Number(res.e8s) / 1e8);
            })();
        }
    }, [principal]);

    return (
        <div className="flex flex-col w-full h-screen items-center justify-center">
            <div className=" text-8xl font-medium pb-[60px]">
                {" "}
                Create your Manage hub
            </div>
            <div className="text-5xl text-wrap font-light pb-6 w-[800px]">
                Mange hub is a Canister owned by your Internet Identity.
            </div>

            <div className="text-5xl text-wrap font-light pb-6 w-[800px]">
                Please transfer some ICP to your address fisrt:
            </div>
            <div className="text-5xl text-wrap pb-6 w-[800px]">
                {getToAccountIdentifier(
                    Principal.fromText("5hssk-kiaaa-aaaag-aaeva-cai"),
                    principal
                )}
            </div>
            <div className="text-5xl text-wrap font-light pb-6 w-[800px]">
                Your balance is: <span className="font-normal">{balance}</span>{" "}
                ICP
            </div>
            <Gap height={50} />
            <div className="text-5xl  text-wrap font-light pb-12 w-[800px]">
                Convert icp to cycles to create a manage hub. We will charge 0.2
                icp to keep ICAN running,The rest will be added to your mange
                hub
            </div>
            <div className="w-[260px]">
                <Input
                    id="asdsdssd"
                    type="number"
                    placeholder="minimum 0.3 icp"
                    onChange={(e) => {
                        setIcp(e.target.value);
                    }}
                    value={icp}
                />
            </div>
            <Gap height={20} />
            <button
                className={`px-[40px] py-[10px] rounded-lg text-white text-4xl ${
                    loading || !balance || balance < icp || Number(icp) < 0.3
                        ? "bg-blue-200"
                        : "bg-blue-500"
                } hover:bg-blue-200`}
                onClick={() => handleCreate()}
                disabled={loading || !balance || balance < icp || icp < 0.3}
            >
                Create
            </button>
            <Gap height={20} />
        </div>
    );
};
