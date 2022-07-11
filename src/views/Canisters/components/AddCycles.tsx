import React, {useEffect, useState} from "react";
import {DktApi} from "@/apis/dktApi";
import {Input} from "@/components";
import {toast} from "react-toastify";
import Storage from "@/utils/storage";
import {Principal} from "@dfinity/principal";
import {useAuth} from "@/usehooks/useAuth";
import {BucketApi} from "@/apis/bucketApi";
import {getToAccountIdentifier} from "@/utils/common";
import {LedgerApi} from "@/apis/ledgerApi";
import {Gap} from "@/components";
import {BurnArgs} from "@/declarations/XTC";
import {XTCApi} from "@/apis/XTCApi";

export const AddCycles =
  ({
     open,
     setOpen,
     hubId,
     setStatus,
   }: {
    open: boolean;
    setOpen: Function;
    hubId: string;
    setStatus: Function;
  }) => {
    const [toggle, setToggle] = useState(true);
    const [amount, setAmount] = useState<number>(0);
    const [topUpWay, setTopUpWay] = useState<0 | 1>(0)
    const [balance, setBalance] = useState<any>(0);
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
      toast.promise(DktApi.tranformIcp(Principal.fromText(hubId), amount), {
        pending: "Adding cycles 😄",
        success: {
          render() {
            (async () => {
              const res = await BucketApi(hubId).getStatus();
              setStatus(res.ok);
            })();
            return `success !`;
          },
        },
        error: {
          render({data}) {
            return `🤯 ${data}`;
          },
        },
      });
      setOpen(false);
    };

    const topUpHubWithXTC = () => {
      const burnArg: BurnArgs = {
        canister_id: Principal.from(hubId),
        amount: BigInt(Number(amount) * 1e12)
      }
      toast.promise(
        XTCApi.burn(burnArg),
        {
          pending: `Adding cycles 😄`,
          success: `success 🥳`,
          error: "Error",
        }
      ).then()
      setOpen(false)
      setAmount(0);
    }
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
    }, [principal, open]);
    return (
      <div className="flex flex-col justify-center">
        <div className="flex justify-between items-center pb-[20px]">
          <p className="text-5xl font-medium">Add cycles to Management Hub</p>
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
              <path
                d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
            </svg>
          </div>
          {" "}
        </div>
        <div className={"flex mb-10 text-4xl border-b-2 border-black"}>
          <div onClick={() => setTopUpWay(0)} className={"mr-10 cursor-pointer hover:bg-rgba(192,192,192,0.4)"}>
            With Balance
          </div>
          <div onClick={() => setTopUpWay(1)} className={"cursor-pointer hover:bg-rgba(192,192,192,0.4)"}>
            With XTC
          </div>
        </div>
        <div className="text-5xl text-wrap font-light pb-6">
          {!topUpWay ? <>
            Your balance is: <span className="font-normal">{balance}</span> ICP
          </> : <>
            Amount(XTC 1XTC = 1T Cycle)
          </>}
        </div>
        <Input
          id="asdsdssdssd"
          type="number"
          placeholder={!topUpWay ? "min 0.1" : "0"}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          value={amount}
        />
        <Gap height={20}/>
        <button
          className={`px-[40px] py-[10px] rounded-lg text-white text-4xl ${
            !topUpWay ?
              !balance || balance <= amount || amount < 0.1
                ? "bg-blue-200"
                : "bg-blue-500"
              : amount > 0
                ? "bg-blue-500"
                : "bg-blue-200"
          } hover:bg-blue-200`}
          onClick={() => !topUpWay ? handleClick() : topUpHubWithXTC()}
          disabled={!topUpWay ? !balance || balance < amount || amount < 0.1 : amount <= 0}
        >
          Add
        </button>
      </div>
    );
  };
