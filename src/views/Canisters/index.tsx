import React, { useEffect, useState } from "react";
import { Canister, ModalWrap, Button } from "@/components";
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
import { AddCycles, Upgrade } from "./components";
import Create from "../Create";
import Storage from "@/utils/storage";
import { useParams } from "react-router-dom";
const items = ["name", "status", "install", "stop/start", "top up", "delete"];

interface Props {}

export const Canisters = () => {
  const [list, setList] = useState([]);
  const [icp, setIcp] = useState(0);
  const [status, setStatus] = useState<any>();
  const [version, setVersion] = useState<number | undefined>(undefined);
  const [addCycles, setAddCycles] = useState<boolean>(false);
  const [balance, setBalance] = useState<any>();
  const [create, setCreate] = useState<boolean>(false);
  const [upgrade, setUpgrade] = useState<boolean>(false);
  const { hubId, name }: { hubId: string; name: string } = useParams();
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
        (async () => {
          const res = await BucketApi(hubId).getVersion();
          setVersion(res);
        })();
      }
    }
  }, [principal, hubId]);
  return (
    <>
      <div className=" flex flex-col pl-[200px] pr-[80px] py-[80px] w-full ">
        <div className="flex items-center text-8xl font-medium pb-[40px]">
          {`${name}`} <Gap width={6} />
          {console.log(version, "aaaaaa")}
          {version != undefined && Number(version) < 1 ? (
            <Button width="w-40" height="h-14" onClick={() => setUpgrade(true)}>
              Upgrade
            </Button>
          ) : (
            ""
          )}
        </div>
        <div className="flex align-center text-5xl font-medium pb-[40px]">
          Hub Status
        </div>
        <div className="flex items-center pb-[40px]">
          <div
            className="flex flex-col w-96 h-96 bg-slate-100 rounded p-8 items-center justify-center hover:shadow-lg cursor-pointer"
            onClick={() => setCreate(true)}
          >
            <Icon name="add" width="72" height="72" />
          </div>
          <Gap width={40} />
          <div className="flex flex-col w-96 h-96 bg-slate-100 rounded p-8">
            <div className="flex justify-between items-center h-[33px]">
              <div className="flex align-center text-4xl font-medium ">
                Memory used
              </div>
            </div>
            <Gap height={30} />
            <div className="flex w-full justify-center items-center">
              <RadialProgress
                value={
                  status ? Number(status.memory) / (1024 * 1024 * 1024 * 4) : 0
                }
                size="10rem"
                thickness="1rem"
                className="text-4xl"
              >
                {status
                  ? Math.floor(Number(status.memory) / (1024 * 1024 * 1024 * 4))
                  : 0}{" "}
                %
              </RadialProgress>
            </div>
          </div>
          <Gap width={40} />
          <div className="flex flex-col w-fit h-96 bg-slate-100 rounded p-8">
            <div className="flex justify-between items-center h-[33px]">
              <div className="flex align-center text-4xl font-medium">
                Cycles balance
              </div>
              <button
                className="flex items-center justify-center px-4 h-full  text-3xl font-medium  border-[2px] border-salte-100 hover:bg-slate-50 focus:ring-4 focus:ring-slate-300 rounded  text-center "
                onClick={() => setAddCycles(true)}
              >
                add cycles
              </button>
            </div>
            <Gap height={30} />
            <div className="flex w-full justify-center items-center text-6xl font-medium pb-3 px-44">
              {status ? Number(status.cycle_balance) / 1e12 : "0"} T
            </div>
            <div className="flex w-full justify-center items-center text-4xl ">
              $ {status ? (Number(status.cycle_balance) / 1e12) * 1.36 : "0"}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between h-[40px] mb-[20px] px-[40px] ">
          <div className="w-[120px] text-5xl font-medium">Name</div>
          <div className="w-[120px] text-5xl font-medium">Status</div>
          <div className="w-[120px] text-5xl font-medium">Cycles</div>
          <div className="w-[300px] text-5xl font-medium">Memory used</div>
          <div className="w-[200px] text-5xl font-medium">Options</div>
        </div>
        {list.map((res: any, index) => (
          <div key={index}>
            {/* @ts-ignore */}
            <Canister
              key={String(res.canister_id)}
              name={res.name}
              desc={res.description}
              index={index}
              canisterId={res.canister_id}
              setList={setList}
              setSuperStatus={setStatus}
            />
          </div>
        ))}
      </div>
      <CreateModal
        open={create}
        setCreate={setCreate}
        bucket={hubId}
        setList={setList}
        setStatus={setStatus}
        controllers={[]}
      />
      <ModalWrap setOpen={setAddCycles} open={addCycles}>
        <AddCycles
          setOpen={setAddCycles}
          hubId={hubId}
          setStatus={setStatus}
          open={addCycles}
        />
      </ModalWrap>
      <ModalWrap setOpen={setUpgrade} open={upgrade}>
        <Upgrade
          setOpen={setUpgrade}
          hubId={hubId}
          open={upgrade}
          setVersion={setVersion}
        />
      </ModalWrap>
    </>
  );
};
