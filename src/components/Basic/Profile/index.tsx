import React, { useEffect, useState } from "react";
import { Gap } from "@/components";
import { useAuth } from "@/usehooks/useAuth";
import { LedgerApi } from "@/apis/ledgerApi";
import { getToAccountIdentifier } from "@/utils/common";
import { Principal } from "@dfinity/principal";
export const Profile = () => {
    const { principal } = useAuth();
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
    useEffect(() => {
        principal && fetch();
    }, [principal]);

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
        </div>
    );
};
