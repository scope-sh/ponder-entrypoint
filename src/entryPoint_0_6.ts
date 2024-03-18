import { ponder } from '@/generated';

import { isIndexing0_6 } from './utils';

if (isIndexing0_6) {
  ponder.on('EntryPoint0.6:UserOperationEvent', async ({ event, context }) => {
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
}
