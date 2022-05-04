import React, { useEffect } from "react";
import Icon from "@/icons/Icon";
import { Principal } from "@dfinity/principal";
import { Gap, ModalWrap, Profile } from "@/components";
import { useAuth } from "@/usehooks/useAuth";
import Storage from "@/utils/storage";
import { useHistory } from "react-router-dom";
import "tailwindcss/tailwind.css";

export const SiderBar = () => {
    const [profile, setProfile] = React.useState<boolean>(false);
    const [buckets, setBuckets] = React.useState<any>();
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
        principal && setBuckets(Storage.getBucketsStorage(String(principal)));
    }, [principal]);
    return (
        <>
            <ModalWrap open={profile} setOpen={setProfile}>
                <Profile open={profile} />
            </ModalWrap>
            <div className="fixed h-full w-[120px]  top-1 rounded shadow-2xl bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-25 border border-gray-200 flex flex-col justify-start items-center ">
                <Gap height={40} />
                <div
                    className="bg-blue-100 mb-[40px] rounded h-[90px] w-[90px] flex justify-center items-center hover:shadow hover: cursor-pointer"
                    onClick={() => (isAuth ? logOut() : IILogIn())}
                >
                    <Icon name="login" />
                </div>
                <div
                    className="bg-blue-100 mb-[40px] rounded h-[90px] w-[90px] flex justify-center items-center hover:shadow hover: cursor-pointer"
                    onClick={() => {
                        history.push("/createhub");
                    }}
                >
                    <Icon name="add" />
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
                {isAuth ? (
                    <div
                        className="bg-blue-100 mb-[40px] rounded h-[90px] w-[90px] flex justify-center items-center hover:shadow hover: cursor-pointer"
                        onClick={() => {
                            setProfile(true);
                        }}
                    >
                        <Icon name="account" />
                    </div>
                ) : null}
            </div>
        </>
    );
};
