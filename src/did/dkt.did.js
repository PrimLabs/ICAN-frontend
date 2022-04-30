export const idlFactory = ({ IDL }) => {
    const Result_1 = IDL.Variant({ ok: IDL.Principal, err: IDL.Text });
    const TransformArgs = IDL.Record({
        to_canister_id: IDL.Principal,
        icp_amount: IDL.Nat64,
    });
    const Error = IDL.Variant({
        Transfer_Failed: IDL.Null,
        Insufficient_Icp: IDL.Null,
    });
    const Result = IDL.Variant({ ok: IDL.Null, err: Error });
    return IDL.Service({
        changeAdministrator: IDL.Func([IDL.Principal], [IDL.Text], []),
        createBucket: IDL.Func([IDL.Nat64], [Result_1], []),
        getBucket: IDL.Func([], [IDL.Vec(IDL.Principal)], ["query"]),
        installW: IDL.Func([IDL.Vec(IDL.Nat8)], [IDL.Text], []),
        transformIcp: IDL.Func([TransformArgs], [Result], []),
        uploadCycleWasm: IDL.Func([IDL.Vec(IDL.Nat8)], [IDL.Text], []),
        wallet_receive: IDL.Func([], [], []),
    });
};
export const init = ({ IDL }) => {
    return [];
};
