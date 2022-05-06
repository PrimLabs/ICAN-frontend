import React, { useEffect } from "react";
import Icon from "@/icons/Icon";
import { Principal } from "@dfinity/principal";
import { Gap, ModalWrap, Profile } from "@/components";
import { useAuth } from "@/usehooks/useAuth";
import Storage from "@/utils/storage";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "flowbite";
import "tailwindcss/tailwind.css";
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
    }, [principal, buckets]);
    return (
        <>
            <ModalWrap open={profile} setOpen={setProfile}>
                <Profile open={profile} />
            </ModalWrap>
            <div className="fixed h-full w-[120px]  top-1 rounded shadow-2xl bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-25 border border-gray-200 flex flex-col justify-start items-center ">
                <Gap height={40} />
                {isAuth ? (
                    <>
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
                        <div
                            id="tooltip-profile"
                            role="tooltip"
                            className="inline-block absolute invisible z-10 py-2 px-3 text-2xl font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                        >
                            user info
                            <div
                                className="tooltip-arrow"
                                data-popper-arrow
                            ></div>
                        </div>
                    </>
                ) : (
                    <div
                        className="bg-blue-100 mb-[40px] rounded h-[90px] w-[90px] flex justify-center items-center hover:shadow hover: cursor-pointer"
                        onClick={() => IILogIn()}
                    >
                        <Icon name="login" />
                    </div>
                )}
                <div
                    data-tooltip-target="tooltip-right"
                    data-tooltip-placement="right"
                    className="bg-blue-100 mb-[40px] rounded h-[90px] w-[90px] flex justify-center items-center hover:shadow hover: cursor-pointer"
                    onClick={() => {
                        history.push("/createhub");
                    }}
                >
                    <Icon name="add" />
                </div>
                <div
                    id="tooltip-right"
                    role="tooltip"
                    className="inline-block absolute invisible z-10 py-2 px-3 text-2xl font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                    create hub
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
                {isAuth &&
                    buckets.map((v, k) => {
                        return (
                            <div
                                key={k}
                                className="bg-blue-100 mb-[40px] rounded h-[90px] w-[90px] flex justify-center items-center hover:shadow hover: cursor-pointer"
                                onClick={() => {
                                    history.push(`/hub/${v}`);
                                }}
                            >
                                <Icon name="station" />
                            </div>
                        );
                    })}
            </div>
        </>
    );
};
