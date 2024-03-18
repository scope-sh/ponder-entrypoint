import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  UserOp: p.createTable({
    id: p.string(),
    hash: p.hex(),
    txHash: p.hex(),
    chainId: p.int(),
    actualGasCost: p.bigint(),
    actualGasUsed: p.bigint(),
    nonce: p.bigint(),
    paymaster: p.hex(),
    sender: p.hex(),
    success: p.boolean(),
    entryPoint: p.hex(),
  }),
}));
