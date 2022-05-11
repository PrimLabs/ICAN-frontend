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
import MainPage from "./MainPage";
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
        console.log(DktApi)
        if (principal) DktApi.getBucket();
    }, [principal]);

    return (
        <div className="flex min-h-screen bg-white">
            <SiderBar />
            {principal ? (
                <Switch>
                    <Route exact path="/" render={() => <MainPage />} />
                    <Route exact path="/createhub" render={() => <Create />} />
                    <Route
                        exact
                        path="/hub/:name/:hubId"
                        render={() => <Canisters />}
                    />
                </Switch>
            ) : (
                <MainPage />
            )}
        </div>
    );
};
