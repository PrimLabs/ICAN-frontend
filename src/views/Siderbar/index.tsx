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

      <div className="fixed h-full w-[120px]  top-1 rounded shadow-2xl bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-25 border border-gray-200 flex flex-col justify-start items-center overflow-x-visible overflow-y-scroll noBar">
        <Gap height={40} />

        <ToolTip title="home" placement="right">
          <div
            className="bg-blue-100 mb-[40px] rounded h-[90px] w-[90px] flex justify-center items-center hover:shadow hover: cursor-pointer"
            onClick={() => {
              history.push("/");
            }}
          >
            <Icon name="home" />
          </div>
        </ToolTip>

        {isAuth ? (
          <>
            <ToolTip title="profile" placement="right">
              <div
                data-tooltip-target="tooltip-profile"
                data-tooltip-placement="right"
                className="bg-blue-100 mb-[40px] rounded h-[90px] w-[90px] flex justify-center items-center hover:shadow hover: cursor-pointer"
                onClick={() => {
                  setProfile(true);
                }}
              >
                <Icon name="account" />
              </div>
            </ToolTip>
          </>
        ) : (
          <ToolTip title="login" placement="right">
            <div
              className="bg-blue-100 mb-[40px] rounded h-[90px] w-[90px] flex justify-center items-center hover:shadow hover: cursor-pointer"
              onClick={() => IILogIn()}
            >
              <Icon name="login" />
            </div>
          </ToolTip>
        )}
        <ToolTip title="create hub" placement="right">
          <div
            className="bg-blue-100 mb-[40px] rounded h-[90px] w-[90px] flex justify-center items-center hover:shadow hover: cursor-pointer"
            onClick={() => {
              history.push("/createhub");
            }}
          >
            <Icon name="add" />
          </div>
        </ToolTip>

        {isAuth &&
          buckets.map((v, k) => {
            return (
              <ToolTip title={`hub ${v[0]}`} placement="right">
                <div
                  key={k}
                  className="bg-blue-100 mb-[40px] rounded h-[90px] w-[90px] flex justify-center items-center hover:shadow hover: cursor-pointer"
                  onClick={() => {
                    history.push(`/hub/${v[0]}/${v[1]}`);
                  }}
                >
                  <Icon name="station" />
                </div>
              </ToolTip>
            );
          })}
        <div
          id={"tooltip-hub"}
          role="tooltip"
          className="inline-block absolute invisible z-10 py-2 px-3 text-2xl font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          hub
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </>
  );
};
