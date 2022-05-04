import React, { useEffect, useState } from "react";
import { DktApi } from "@/apis/dktApi";
import { Input } from "@/components";
import { toast } from "react-toastify";
import Storage from "@/utils/storage";
import { Principal } from "@dfinity/principal";
import { useAuth } from "@/usehooks/useAuth";
import { getToAccountIdentifier } from "@/utils/common";
import { LedgerApi } from "@/apis/ledgerApi";
import { Gap } from "@/components";

export const AddCycles = ({
    setOpen,
    hubId,
}: {
    setOpen: Function;
    hubId: string;
}) => {
    const [toggle, setToggle] = useState(true);
    const [icp, setIcp] = useState<number>(0);
    const [balance, setBalance] = useState<any>();
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
    const handleClick = async () => {
        toast.promise(DktApi.tranformIcp(Principal.fromText(hubId), icp), {
            pending: "Adding cycles 😄",
            success: "success 🥳",
            error: {
                render({ data }) {
                    return `🤯 ${data}`;
                },
            },
        });
        setOpen(false);
    };
    useEffect(() => {
        console.log(principal);
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
        <div className="flex flex-col justify-center">
            <div className="flex justify-between items-center pb-[20px]">
                <p className="text-7xl font-medium">Add cycles to Manage Hub</p>
                <div
                    className="close-icon cursor-pointer z-50"
                    onClick={() => setOpen(0)}
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
                </div>{" "}
            </div>
            <div className="text-5xl text-wrap font-light pb-6">
                Your balance is: <span className="font-normal">{balance}</span>{" "}
                ICP
            </div>
            <Input
                id="asdsdssdssd"
                type="number"
                placeholder="min 0.1"
                onChange={(e) => {
                    setIcp(e.target.value);
                }}
                value={icp}
            />
            <Gap height={20} />
            <button
                className={`px-[40px] py-[10px] rounded-lg text-white text-4xl ${
                    !balance || balance <= icp || icp >= 0.1
                        ? "bg-blue-200"
                        : "bg-blue-500"
                } hover:bg-blue-200`}
                onClick={() => handleClick()}
                disabled={!balance || balance < icp || icp >= 0.1}
            >
                Add
            </button>
        </div>
    );
};
