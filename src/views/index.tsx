import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { SiderBar } from "./Siderbar";
import { Canisters } from "./Canisters";
import Create from "./Create";
import {
    CreateModal,
    TopupModal,
    DeleteModal,
    ModalWrap,
    Gap,
} from "@/components";
import Icon from "@/icons/Icon";
import { DktApi } from "@/apis/dktApi";
import { LedgerApi } from "@/apis/ledgerApi";
import { Principal } from "@dfinity/principal";
import { useAuth } from "@/usehooks/useAuth";
import "tailwindcss/tailwind.css";
export default () => {
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
        if (principal) DktApi.getBucket();
    }, [principal]);

    return (
        <div className="flex min-h-screen bg-white">
            <SiderBar />
            {principal ? (
                <Switch>
                    <Route exact path="/createhub" render={() => <Create />} />
                    <Route
                        exact
                        path="/hub/:hubId"
                        render={() => <Canisters />}
                    />
                </Switch>
            ) : (
                <div className="flex flex-col w-full h-screen items-center justify-center text-12xl">
                    <div className="text-8xl">Please Login first</div>
                    <Gap height={30} />
                    <div
                        className="bg-blue-100 mb-[40px] rounded h-[90px] w-[90px] flex justify-center items-center hover:shadow hover: cursor-pointer"
                        onClick={() => IILogIn()}
                    >
                        <Icon name="login" />
                    </div>
                </div>
            )}
        </div>
    );
};
