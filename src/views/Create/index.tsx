import React, { useEffect, useState } from "react";
import { Canister } from "@/components";
import { Gap, Input, Skeleton, Button } from "@/components";
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
import { Box, Tab, Tabs } from "@mui/material";
import { toast } from "react-toastify";
import Storage from "@/utils/storage";
import { KitApi } from "@/apis/kitApi";
export default () => {
  const [icp, setIcp] = useState(0);
  const [status, setStatus] = useState<any>();
  const [balance, setBalance] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [value, setValue] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [addId, setAddId] = useState<string>("");
  const [addName, setAddName] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
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
    toast.promise(DktApi.createBucket(name, icp), {
      pending: "creating Manage Hub",
      success: {
        render() {
          DktApi.getBucket();
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
  const checkPrincipal = (text: string) => {
    try {
      Principal.fromText(text);
      return true;
    } catch (e) {
      return false;
    }
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
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
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
  }, [principal]);
  const create = (
    <>
      {" "}
      <div className=" text-8xl font-medium pb-[60px]">
        {" "}
        Create your Management Hub
      </div>
      <div className="text-5xl text-wrap font-light pb-6 w-[800px]">
        Management Hub is a Canister owned by your Internet Identity.
      </div>
      <div className="text-5xl text-wrap font-light pb-6 w-[800px]">
        Please transfer some ICP to this address first:
      </div>
      <div className="text-5xl text-wrap pb-6 w-[800px]">
        {getToAccountIdentifier(
          Principal.fromText("5hssk-kiaaa-aaaag-aaeva-cai"),
          principal
        )}
      </div>
      <div className="flex items-center text-5xl text-wrap font-light pb-6 w-[800px]">
        Your balance is: <span className="font-normal">{balance}</span> ICP{" "}
        <Gap width={6} />
        <div
          className="transform rotate-180 flex items-center justify-center w-14 h-14 rounded border-2 border-slate-200 hover:shadow-md cursor-pointer"
          onClick={() => handleRefresh()}
        >
          <Icon name="refresh" spin={refresh} />
        </div>
      </div>
      <Gap height={50} />
      <div className="text-5xl  text-wrap font-light pb-12 w-[800px]">
        Convert ICP to cycles to create a Management Hub. (It takes 20-30s)
      </div>
      <div className="w-[260px]">
        <div className="text-4xl  text-wrap font-medium pb-2 ">Hub name</div>
        <Input
          id="asdsdssd"
          placeholder="maximum 8 characters"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
      </div>
      <Gap height={20} />
      <div className="w-[260px]">
        <div className="text-4xl text-wrap font-medium pb-2">ICP amout:</div>
        <Input
          type="number"
          placeholder="minimum 0.2 icp"
          onChange={(e) => {
            setIcp(e.target.value);
          }}
          value={icp}
        />
      </div>
      <Gap height={20} />
      <button
        className={`px-[40px] py-[10px] rounded-lg text-white text-4xl ${
          loading ||
          !balance ||
          balance < icp ||
          Number(icp) < 0.2 ||
          name.length > 8
            ? "bg-blue-200"
            : "bg-blue-500"
        } hover:bg-blue-200`}
        onClick={() => handleCreate()}
        disabled={
          loading || !balance || balance < icp || icp < 0.2 || name.length > 8
        }
      >
        Create
      </button>
      <Gap height={20} />
    </>
  );

  const add = (
    <>
      <div className=" text-8xl font-medium pb-[60px]">
        {" "}
        Add an exsiting Management Hub
      </div>
      <div className="flex flex-col px-72 items-center">
        <div className="text-4xl font-medium w-full flex">
          Input management hub canister id（Make sure you are one of the
          controllers）{" "}
        </div>
        <Gap height={24} />
        <Input
          placeholder="xxxxx-...-xxx"
          onChange={(e) => {
            setIsValid(checkPrincipal(e.target.value));
            setAddId(e.target.value);
          }}
          value={addId}
        />
        <Gap height={24} />
        <div className="text-4xl font-medium w-full flex">Hub name</div>
        <Gap height={24} />
        <Input
          placeholder="abc"
          onChange={(e) => {
            setIsValid(e.target.value.length < 9);
            setAddName(e.target.value);
          }}
          value={addName}
        />
        <Gap height={24} />
        <Button
          onClick={() => {
            toast.promise(DktApi.addHub(addId, addName), {
              pending: "adding Management Hub",
              success: {
                render() {
                  DktApi.getBucket();
                  return `add Management hub success !`;
                },
              },
              error: {
                render({ data }) {
                  setLoading(false);
                  return `🤯 ${data}`;
                },
              },
            });
            setAddName("");
            setAddId("");
          }}
          disabled={!isValid}
        >
          Add
        </Button>
      </div>
    </>
  );
  return (
    <div className="flex flex-col w-full h-screen items-center">
      <div className="modal-content py-24 text-left px-6">
        <Box className="">
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Create" />
            <Tab label="Add" />
          </Tabs>
        </Box>
      </div>
      <Gap height={12} />
      {value ? add : create}
    </div>
  );
};
