import { createConfig } from '@ponder/core';
import { http } from 'viem';

import entryPoint06Abi from './abi/entryPoint_0_6';
import entryPoint07Abi from './abi/entryPoint_0_7';

const ENTRYPOINT_0_6_ADDRESS = '0x5ff137d4b0fdcd49dca30c7cf57e578a026d2789';
const ENTRYPOINT_0_7_ADDRESS = '0x0000000071727de22e5e9d8baf0edac6f37da032';

export default createConfig({
  networks: {
    polygonMumbai: {
      chainId: 80001,
      transport: http(process.env.PONDER_RPC_URL_80001),
    },
  },
  contracts: {
    'EntryPoint0.6': {
      abi: entryPoint06Abi,
      address: ENTRYPOINT_0_6_ADDRESS,
      network: 'polygonMumbai',
      startBlock: 34166156,
    },
    'EntryPoint0.7': {
      abi: entryPoint07Abi,
      address: ENTRYPOINT_0_7_ADDRESS,
      network: 'polygonMumbai',
      startBlock: 46345465,
    },
  },
});
