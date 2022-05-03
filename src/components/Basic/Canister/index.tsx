import React from "react";
import { Principal } from "@dfinity/principal";
import { KitApi } from "@/apis/kitApi";
import { ManageApi } from "@/apis/manageApi";
import { useAuth } from "@/usehooks/useAuth";
import { TopupModal, DeleteModal, InstallModal } from "@/components";
import { useParams } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

interface Props {
    index: number;
    name: string;
    desc: string;
    canisterId: Principal;
}

export const Canister = ({ name, canisterId, index, desc }: Props) => {
    const { isAuth } = useAuth();
    const [topup, setTopup] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false);
    const [del, setDel] = useState<number>(0);
    const [install, setInstall] = useState<boolean>(false);
    const { hubId }: { hubId: string } = useParams();
    const fetch = async () => {
        console.time("status");
        const res = await ManageApi.getCanisterStatus(canisterId);
        console.log(res);
        console.timeEnd("status");
    };

    useEffect(() => {
        if (isAuth) fetch();
    }, [isAuth]);
    return (
        <>
            <DeleteModal
                open={del}
                setDel={setDel}
                canisterId={canisterId}
                hubId={hubId}
            />
            <InstallModal
                open={install}
                setOpen={setInstall}
                canisterId={canisterId}
            />
            <TopupModal
                open={topup}
                setTopup={setTopup}
                canisterId={canisterId}
                hubId={hubId}
            />
            <div
                className={`flex items-center justify-between w-full bg-slate-100 ${
                    !open ? "rounded" : "rounded-t"
                }  h-48 px-[40px]  hover:shadow-lg cursor-pointer`}
                onClick={() => setOpen(!open)}
            >
                <div className="flex items-center w-[120px] text-6xl">
                    {name}
                </div>

                <div
                    className="text-right"
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    <Menu
                        as="div"
                        className="relative inline-block text-left z-0"
                    >
                        <div className="w-[200px]">
                            <Menu.Button className="items-center inline-flex w-full h-24  justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-4xl font-medium text-white  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                Options
                                <ChevronDownIcon
                                    className="ml-2 -mr-1 h-10 w-10 text-violet-200 hover:text-violet-100"
                                    aria-hidden="true"
                                />
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute w-full text-5xl right-0 mt-2  origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="px-1 py-1 ">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`${
                                                    active
                                                        ? "bg-blue-200 text-white"
                                                        : "text-gray-900"
                                                } group flex w-full items-center rounded-md px-6 py-6`}
                                                onClick={() => {
                                                    setInstall(true);
                                                }}
                                            >
                                                Install
                                            </button>
                                        )}
                                    </Menu.Item>
                                </div>
                                <div className="px-1 py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`${
                                                    active
                                                        ? "bg-blue-200 text-white"
                                                        : "text-gray-900"
                                                } group flex w-full items-center rounded-md px-6 py-6`}
                                                onClick={() => {
                                                    setTopup(1);
                                                }}
                                            >
                                                Add cycles
                                            </button>
                                        )}
                                    </Menu.Item>
                                </div>
                                <div className="px-1 py-">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`${
                                                    active
                                                        ? "bg-blue-200 text-white"
                                                        : "text-gray-900"
                                                } group flex w-full items-center rounded-md px-6 py-6`}
                                                onClick={() => {
                                                    setDel(1);
                                                }}
                                            >
                                                Delete
                                            </button>
                                        )}
                                    </Menu.Item>
                                </div>
                                <div className="px-1 py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`${
                                                    active
                                                        ? "bg-blue-200 text-white"
                                                        : "text-gray-900"
                                                } group flex w-full items-center rounded-md px-6 py-6`}
                                            ></button>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
            <div
                className={`${
                    open ? "flex" : "hidden"
                } w-full flex-col bg-slate-50 rounded-b px-[40px] py-12`}
            >
                <div className="flex pb-10 text-4xl">Description: {desc}</div>
                <div className="flex pb-10 text-4xl">
                    Canister id: {String(canisterId)}
                </div>
            </div>
        </>
    );
};
