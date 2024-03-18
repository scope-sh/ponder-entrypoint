import { ponder } from '@/generated';

import { isIndexing0_7 } from './utils';

if (isIndexing0_7) {
  ponder.on('EntryPoint0.7:UserOperationEvent', async ({ event, context }) => {
    await context.db.UserOp.create({
      id: `${context.network.chainId}-${event.args.userOpHash}`,
      data: {
        hash: event.args.userOpHash,
        chainId: context.network.chainId,
        txHash: event.transaction.hash,
        actualGasCost: event.args.actualGasCost,
        actualGasUsed: event.args.actualGasUsed,
        nonce: event.args.nonce,
        paymaster: event.args.paymaster,
        sender: event.args.sender,
        success: event.args.success,
        entryPoint: event.log.address,
      },
    });
  });

  ponder.on('EntryPoint0.7:AccountDeployed', async ({ event, context }) => {
    await context.db.AccountDeployed.create({
      id: `${context.network.chainId}-${event.args.userOpHash}`,
      data: {
        hash: event.transaction.hash,
        chainId: context.network.chainId,
        txHash: event.transaction.hash,
        factory: event.args.factory,
        paymaster: event.args.paymaster,
        sender: event.args.sender,
        userOpHash: event.args.userOpHash,
        entryPoint: event.log.address,
      },
    });
  });
}
