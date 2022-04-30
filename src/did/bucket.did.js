export const idlFactory = ({ IDL }) => {
    const Error = IDL.Variant({
        Transfer_Failed: IDL.Null,
        Insufficient_Cycles: IDL.Null,
        Invalid_CanisterId: IDL.Null,
        Invalid_Caller: IDL.Null,
        No_Wasm: IDL.Null,
    });
    const Result = IDL.Variant({ ok: IDL.Null, err: Error });
    const canister_settings = IDL.Record({
        freezing_threshold: IDL.Opt(IDL.Nat),
        controllers: IDL.Opt(IDL.Vec(IDL.Principal)),
        memory_allocation: IDL.Opt(IDL.Nat),
        compute_allocation: IDL.Opt(IDL.Nat),
    });
    const DeployArgs = IDL.Record({
        preserve_wasm: IDL.Bool,
        name: IDL.Text,
        wasm: IDL.Vec(IDL.Nat8),
        description: IDL.Text,
        cycle_amount: IDL.Nat,
        settings: IDL.Opt(canister_settings),
    });
    const Result_4 = IDL.Variant({ ok: IDL.Principal, err: Error });
    const Canister = IDL.Record({
        name: IDL.Text,
        canister_id: IDL.Principal,
        wasm: IDL.Opt(IDL.Vec(IDL.Nat8)),
        description: IDL.Text,
    });
    const Result_3 = IDL.Variant({ ok: IDL.Vec(Canister), err: Error });
    const Status = IDL.Record({ memory: IDL.Nat, cycle_balance: IDL.Nat });
    const Result_2 = IDL.Variant({ ok: Status, err: Error });
    const Result_1 = IDL.Variant({ ok: IDL.Vec(IDL.Nat8), err: Error });
    const TransformArgs = IDL.Record({ icp_amount: IDL.Nat64 });
    const DevBucket = IDL.Service({
        changeOwner: IDL.Func([IDL.Principal], [Result], []),
        delCanister: IDL.Func(
            [IDL.Principal, IDL.Opt(IDL.Principal)],
            [Result],
            []
        ),
        deployCanister: IDL.Func([DeployArgs], [Result_4], []),
        depositCycles: IDL.Func([IDL.Principal, IDL.Nat], [Result], []),
        getCanisters: IDL.Func([], [Result_3], ["query"]),
        getOwner: IDL.Func([], [IDL.Principal], ["query"]),
        getStatus: IDL.Func([], [Result_2], ["query"]),
        getWasm: IDL.Func([IDL.Principal], [Result_1], ["query"]),
        installCycleWasm: IDL.Func([IDL.Vec(IDL.Nat8)], [], []),
        putCanister: IDL.Func([Canister], [Result], []),
        transformIcp: IDL.Func([TransformArgs], [Result], []),
        wallet_receive: IDL.Func([], [], []),
    });
    return DevBucket;
};
export const init = ({ IDL }) => {
    return [IDL.Principal];
};
