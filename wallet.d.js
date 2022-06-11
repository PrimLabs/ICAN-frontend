export const idlFactory = ({ IDL }) => {
  const Action = IDL.Variant({
    Create_Canister: IDL.Null,
    Stop_Canister: IDL.Null,
    Del_Canister: IDL.Null,
    Install: IDL.Null,
    Start_Canister: IDL.Null,
    Del_Owner: IDL.Null,
    Add_Owner: IDL.Null,
  });
  const Propose = IDL.Record({
    result: IDL.Bool,
    principal: IDL.Principal,
    action: Action,
    content: IDL.Text,
    wasm: IDL.Opt(IDL.Vec(IDL.Nat8)),
    file_key: IDL.Text,
    index: IDL.Nat,
  });
  const Error = IDL.Variant({
    Transfer_Failed: IDL.Null,
    Invalid_Propose_index: IDL.Null,
    Insufficient_Cycles: IDL.Null,
    Invalid_Propose_Result: IDL.Null,
    No_Record: IDL.Null,
    Invalid_CanisterId: IDL.Null,
    Invalid_Caller: IDL.Null,
    No_Wasm: IDL.Null,
  });
  const Result_9 = IDL.Variant({ ok: IDL.Nat, err: Error });
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
  const Result_8 = IDL.Variant({ ok: IDL.Principal, err: Error });
  const Canister = IDL.Record({
    name: IDL.Text,
    canister_id: IDL.Principal,
    wasm: IDL.Opt(IDL.Vec(IDL.Nat8)),
    description: IDL.Text,
  });
  const Result_7 = IDL.Variant({ ok: IDL.Vec(Canister), err: Error });
  const Result_6 = IDL.Variant({
    ok: IDL.Vec(IDL.Principal),
    err: Error,
  });
  const Result_5 = IDL.Variant({ ok: IDL.Vec(Propose), err: Error });
  const Time = IDL.Int;
  const Record = IDL.Record({
    method: IDL.Variant({
      stop: IDL.Null,
      deposit: IDL.Null,
      deploy: IDL.Null,
      start: IDL.Null,
    }),
    times: Time,
    canister_id: IDL.Principal,
    amount: IDL.Nat,
  });
  const Result_4 = IDL.Variant({ ok: IDL.Vec(Record), err: Error });
  const Status = IDL.Record({ memory: IDL.Nat, cycle_balance: IDL.Nat });
  const Result_3 = IDL.Variant({ ok: Status, err: Error });
  const Result_2 = IDL.Variant({ ok: IDL.Vec(IDL.Nat8), err: Error });
  const Result_1 = IDL.Variant({ ok: IDL.Text, err: IDL.Text });
  const hub = IDL.Service({
    addPropose: IDL.Func([Propose], [Result_9], []),
    changeOwner: IDL.Func([IDL.Principal], [Result], []),
    delCanister: IDL.Func(
      [IDL.Principal, IDL.Opt(IDL.Principal)],
      [Result],
      []
    ),
    deployCanister: IDL.Func([DeployArgs], [Result_8], []),
    depositCycles: IDL.Func([IDL.Principal, IDL.Nat], [Result], []),
    execPropose: IDL.Func([IDL.Nat], [Result], []),
    getCanisters: IDL.Func([], [Result_7], ["query"]),
    getOwner: IDL.Func([], [IDL.Principal], ["query"]),
    getOwners: IDL.Func([], [Result_6], ["query"]),
    getProposes: IDL.Func([], [Result_5], ["query"]),
    getRecords: IDL.Func([IDL.Principal], [Result_4], ["query"]),
    getStatus: IDL.Func([], [Result_3], ["query"]),
    getWasm: IDL.Func([IDL.Principal], [Result_2], ["query"]),
    installCycleWasm: IDL.Func([IDL.Vec(IDL.Nat8)], [], []),
    putCanister: IDL.Func([Canister], [Result], []),
    startCanister: IDL.Func([IDL.Principal], [Result_1], []),
    stopCanister: IDL.Func([IDL.Principal], [Result_1], []),
    votePropose: IDL.Func([IDL.Nat, IDL.Bool], [Result], []),
    wallet_receive: IDL.Func([], [], []),
  });
  return hub;
};
export const init = ({ IDL }) => {
  return [IDL.Nat, IDL.Vec(IDL.Principal)];
};
