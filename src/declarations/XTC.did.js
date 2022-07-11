export const idlFactory = ({IDL}) => {
  const BurnArgs = IDL.Record({
    'canister_id': IDL.Principal,
    'amount': IDL.Nat64,
  });
  const BurnError = IDL.Variant({
    'InsufficientBalance': IDL.Null,
    'InvalidTokenContract': IDL.Null,
    'NotSufficientLiquidity': IDL.Null,
  });
  const BurnResult = IDL.Variant({'Ok': IDL.Nat64, 'Err': BurnError});
  return IDL.Service({'burn': IDL.Func([BurnArgs], [BurnResult], [])});
};
export const init = ({IDL}) => {
  return [];
};
