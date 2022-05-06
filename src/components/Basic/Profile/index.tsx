import React, { useEffect, useState } from "react";
import { Gap } from "@/components";
import { useAuth } from "@/usehooks/useAuth";
import { LedgerApi } from "@/apis/ledgerApi";
import { getToAccountIdentifier } from "@/utils/common";
import { Principal } from "@dfinity/principal";
export const Profile = ({ open }: { open: boolean }) => {
    const { principal, logOut }: any = useAuth();
    const [balance, setBalance] = useState<number>(0);
    const [id, setId] = useState<any>();
    const fetch = async () => {
        setId(
            getToAccountIdentifier(
                Principal.fromText("5hssk-kiaaa-aaaag-aaeva-cai"),
                principal
            )
        );
        const res = await LedgerApi.account_balance(
            getToAccountIdentifier(
                Principal.fromText("5hssk-kiaaa-aaaag-aaeva-cai"),
                principal
            )
        );
        setBalance(Number(res.e8s) / 1e8);
    };
    const handleClick = () => {
        logOut();
        location.reload();
    };
    useEffect(() => {
        principal && fetch();
    }, [principal, open]);

    return (
        <div>
            <div className="text-5xl font-medium">Your address</div>
            <Gap height={30} />
            <div className="text-3xl font-normal overflow-wrap: break-all">
                {id}
            </div>
            <Gap height={30} />
            <div className="text-5xl font-medium">Balance</div>
            <Gap height={20} />
            <div className="text-3xl font-normal overflow-wrap: break-all">
                {balance} ICP
            </div>
            <Gap height={30} />
            <div className="flex w-full justify-center">
                <button
                    className="bg-blue-400 px-[40px] py-[10px] rounded-lg text-white text-4xl hover:bg-blue-300"
                    onClick={() => handleClick()}
                >
                    Log out
                </button>
            </div>
        </div>
    );
};
