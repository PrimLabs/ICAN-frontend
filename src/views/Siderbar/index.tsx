import React, { useEffect } from "react";
import Icon from "@/icons/Icon";
import { Principal } from "@dfinity/principal";
import { Gap, ModalWrap, Profile, ToolTip } from "@/components";
import { useAuth } from "@/usehooks/useAuth";
import Storage from "@/utils/storage";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "flowbite";
import "tailwindcss/tailwind.css";
import "@/index.css";
import { RootState } from "@/redux/store";

export const SiderBar = () => {
  const [profile, setProfile] = React.useState<boolean>(false);
  const [hubs, setHubs] = React.useState<any>();
  const [open, setOpen] = React.useState<boolean>(false);
  const { buckets } = useSelector((state: RootState) => state);
  const history = useHistory();
  const {
    IILogIn,
    plugLogIn,
    isAuth,
    principal,
    logOut,
    subAccountId,
  }: {
    IILogIn: Function;
    plugLogIn: Function;
    isAuth: boolean;
    principal: Principal;
    logOut: Function;
    subAccountId: string;
  } = useAuth();
  useEffect(() => {
    principal && setHubs(Storage.getBucketsStorage(String(principal)));
    principal && console.log(Storage.getBucketsStorage(String(principal)));
  }, [principal, buckets]);
  return (
    <>
      <ModalWrap open={profile} setOpen={setProfile}>
        <Profile open={profile} />
      </ModalWrap>

      <div
        className={`fixed h-full ${
          open ? "w-[200px]" : "w-[100px]"
        } top-1 rounded shadow-2xl bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-25 border border-gray-200 flex flex-col justify-start items-center overflow-x-visible overflow-y-scroll noBar`}
      >
        <Gap height={20} />
        {open ? (
          <div
            className="mb-[20px] rounded-[12px] h-[40px] w-[180px] flex justify-center items-center text-2xl p-12 gap-10 hover:shadow cursor-pointer hover:bg-slate-100"
            onClick={() => {
              setOpen(false);
            }}
          >
            <Icon name="left" width="24" />
          </div>
        ) : (
          <div
            className="mb-[20px] rounded-[12px] h-[40px] w-[80px] flex justify-center items-center text-2xl p-12 gap-10 hover:shadow cursor-pointer hover:bg-slate-100"
            onClick={() => {
              setOpen(true);
            }}
          >
            <Icon name="right" width="24" />
          </div>
        )}
        {open ? (
          <div
            className="mb-[20px] rounded-[12px] h-[40px] w-[180px] flex items-center text-2xl p-12 gap-10 hover:shadow hover: cursor-pointer hover:bg-slate-100"
            onClick={() => {
              history.push("/");
            }}
          >
            <Icon name="home" width="24" /> Home
          </div>
        ) : (
          <div
            className="mb-[20px] rounded-[12px] h-[40px] w-[80px] flex justify-center items-center text-2xl p-12 gap-10 hover:shadow hover: cursor-pointer hover:bg-slate-100"
            onClick={() => {
              history.push("/");
            }}
          >
            <Icon name="home" width="24" />
          </div>
        )}

        {isAuth ? (
          open ? (
            <div
              className="mb-[20px] rounded-[12px] h-[40px] w-[180px] flex items-center text-2xl p-12 gap-10 hover:shadow hover: cursor-pointer hover:bg-slate-50"
              onClick={() => {
                setProfile(true);
              }}
            >
              <Icon name="account" width="24" /> Profile
            </div>
          ) : (
            <div
              className="mb-[20px] rounded-[12px] h-[40px] w-[80px] flex justify-center items-center text-2xl p-12 gap-10 hover:shadow hover: cursor-pointer hover:bg-slate-50"
              onClick={() => {
                setProfile(true);
              }}
            >
              <Icon name="account" width="24" />
            </div>
          )
        ) : open ? (
          <div
            className="mb-[20px] rounded-[12px] h-[40px] w-[180px] flex items-center text-2xl p-12 gap-10 hover:shadow hover: cursor-pointer hover:bg-slate-50"
            onClick={() => IILogIn()}
          >
            <Icon name="login" /> Login
          </div>
        ) : (
          <div
            className="mb-[20px] rounded-[12px] h-[40px] w-[80px] flex justify-center items-center text-2xl p-12 gap-10 hover:shadow hover: cursor-pointer hover:bg-slate-50"
            onClick={() => IILogIn()}
          >
            <Icon name="login" />
          </div>
        )}
        {open ? (
          <div
            className="mb-[20px] rounded-[12px] h-[40px] w-[180px] flex items-center text-2xl p-12 gap-10 hover:shadow hover: cursor-pointer hover:bg-slate-100"
            onClick={() => {
              history.push("/createhub");
            }}
          >
            <Icon name="add" width="24" /> Create hub
          </div>
        ) : (
          <div
            className="mb-[20px] rounded-[12px] h-[40px] w-[80px] flex justify-center items-center text-2xl p-12 gap-10 hover:shadow hover: cursor-pointer hover:bg-slate-100"
            onClick={() => {
              history.push("/createhub");
            }}
          >
            <Icon name="add" width="24" />
          </div>
        )}
        {isAuth &&
          buckets.map((v, k) => {
            return open ? (
              <div
                key={k}
                className="mb-[20px] rounded-[12px] h-[40px] w-[180px] flex items-center text-2xl p-12 gap-10 hover:shadow hover: cursor-pointer hover:bg-slate-100"
                onClick={() => {
                  history.push(`/hub/${v[0]}/${v[1]}`);
                }}
              >
                <Icon name="station" width="24" /> Hub {v[0]}
              </div>
            ) : (
              <div
                key={k}
                className="mb-[20px] rounded-[12px] h-[40px] w-[80px] flex  justify-center items-center text-2xl p-12 gap-10 hover:shadow hover: cursor-pointer hover:bg-slate-100"
                onClick={() => {
                  history.push(`/hub/${v[0]}/${v[1]}`);
                }}
              >
                <Icon name="station" width="24" />
              </div>
            );
          })}
      </div>
    </>
  );
};
