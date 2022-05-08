import React, { useEffect, useState } from "react";
import { Gap } from "@/components";
import { useAuth } from "@/usehooks/useAuth";
import { LedgerApi } from "@/apis/ledgerApi";
import { getToAccountIdentifier } from "@/utils/common";
import { Principal } from "@dfinity/principal";
import Icon from "@/icons/Icon";
export const Profile = ({ open }: { open: boolean }) => {
  const { principal, logOut }: any = useAuth();
  const [balance, setBalance] = useState<number>(0);
  const [id, setId] = useState<any>();
  const [refresh, setRefresh] = useState<boolean>(false);
  const fetch = async () => {
    setId(
      getToAccountIdentifier(
        Principal.fromText("5hssk-kiaaa-aaaag-aaeva-cai"),
        principal
      )
    );
    (async () => {
      setRefresh(true);
      const res = await LedgerApi.account_balance(
        getToAccountIdentifier(
          Principal.fromText("5hssk-kiaaa-aaaag-aaeva-cai"),
          principal
        )
      );
      setRefresh(false);
      setBalance(Number(res.e8s) / 1e8);
    })();
  };
  const handleClick = () => {
    logOut();
    location.reload();
  };
  const handleRefresh = () => {
    if (principal) {
      (async () => {
        setRefresh(true);
        const res = await LedgerApi.account_balance(
          getToAccountIdentifier(
            Principal.fromText("5hssk-kiaaa-aaaag-aaeva-cai"),
            principal
          )
        );
        setRefresh(false);
        setBalance(Number(res.e8s) / 1e8);
      })();
    }
  };
  useEffect(() => {
    principal && fetch();
  }, [principal, open]);

  return (
    <div>
      <div className="text-5xl font-medium">Your address</div>
      <Gap height={30} />
      <div className="text-3xl font-normal overflow-wrap: break-all">{id}</div>
      <Gap height={30} />
      <div className="flex items-center text-5xl font-medium">
        Balance <Gap width={6} />
        <div
          className="transform rotate-180 flex items-center justify-center w-14 h-14 rounded border-2 border-slate-200 hover:shadow-md cursor-pointer"
          onClick={() => handleRefresh()}
        >
          <Icon name="refresh" spin={refresh} />
        </div>
      </div>
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
