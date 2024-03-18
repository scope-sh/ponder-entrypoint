import { createConfig } from '@ponder/core';
import { http } from 'viem';

import entryPoint06Abi from './abi/entryPoint_0_6';
import entryPoint07Abi from './abi/entryPoint_0_7';

const ENTRYPOINT_0_6_ADDRESS = '0x5ff137d4b0fdcd49dca30c7cf57e578a026d2789';
const ENTRYPOINT_0_7_ADDRESS = '0x0000000071727de22e5e9d8baf0edac6f37da032';

export default createConfig({
  networks: {
    ethereum: { chainId: 1, transport: http(process.env.PONDER_RPC_URL_1) },
    goerli: { chainId: 5, transport: http(process.env.PONDER_RPC_URL_5) },
    sepolia: {
      chainId: 11155111,
      transport: http(process.env.PONDER_RPC_URL_11155111),
    },
    bsc: { chainId: 56, transport: http(process.env.PONDER_RPC_URL_56) },
    bscTestnet: { chainId: 97, transport: http(process.env.PONDER_RPC_URL_97) },
    polygon: { chainId: 137, transport: http(process.env.PONDER_RPC_URL_137) },
    polygonMumbai: {
      chainId: 80001,
      transport: http(process.env.PONDER_RPC_URL_80001),
    },
    polygonZkevm: {
      chainId: 1101,
      transport: http(process.env.PONDER_RPC_URL_1101),
    },
    polygonZkevmTestnet: {
      chainId: 1442,
      transport: http(process.env.PONDER_RPC_URL_1442),
    },
    fantom: { chainId: 250, transport: http(process.env.PONDER_RPC_URL_250) },
    fantomTestnet: {
      chainId: 4002,
      transport: http(process.env.PONDER_RPC_URL_4002),
    },
    opMainnet: { chainId: 10, transport: http(process.env.PONDER_RPC_URL_10) },
    opSepolia: {
      chainId: 11155420,
      transport: http(process.env.PONDER_RPC_URL_11155420),
    },
    arbitrum: {
      chainId: 42161,
      transport: http(process.env.PONDER_RPC_URL_42161),
    },
    arbitrumSepolia: {
      chainId: 421614,
      transport: http(process.env.PONDER_RPC_URL_421614),
    },
    arbitrumNova: {
      chainId: 42170,
      transport: http(process.env.PONDER_RPC_URL_42170),
    },
    moonriver: {
      chainId: 1285,
      transport: http(process.env.PONDER_RPC_URL_1285),
    },
    moonbeam: {
      chainId: 1284,
      transport: http(process.env.PONDER_RPC_URL_1284),
    },
    moonbaseAlpha: {
      chainId: 1287,
      transport: http(process.env.PONDER_RPC_URL_1287),
    },
    cronos: { chainId: 25, transport: http(process.env.PONDER_RPC_URL_25) },
    gnosis: { chainId: 100, transport: http(process.env.PONDER_RPC_URL_100) },
    gnosisChiado: {
      chainId: 10200,
      transport: http(process.env.PONDER_RPC_URL_10200),
    },
    celo: { chainId: 42220, transport: http(process.env.PONDER_RPC_URL_42220) },
    celoAlfajores: {
      chainId: 44787,
      transport: http(process.env.PONDER_RPC_URL_44787),
    },
    linea: {
      chainId: 59144,
      transport: http(process.env.PONDER_RPC_URL_59144),
    },
    lineaTestnet: {
      chainId: 59140,
      transport: http(process.env.PONDER_RPC_URL_59140),
    },
    base: { chainId: 8453, transport: http(process.env.PONDER_RPC_URL_8453) },
    baseSepolia: {
      chainId: 84532,
      transport: http(process.env.PONDER_RPC_URL_84532),
    },
    scroll: {
      chainId: 534352,
      transport: http(process.env.PONDER_RPC_URL_534352),
    },
    scrollSepolia: {
      chainId: 534351,
      transport: http(process.env.PONDER_RPC_URL_534351),
    },
    opBnb: { chainId: 204, transport: http(process.env.PONDER_RPC_URL_204) },
    opBnbTestnet: {
      chainId: 5611,
      transport: http(process.env.PONDER_RPC_URL_5611),
    },
    kroma: { chainId: 255, transport: http(process.env.PONDER_RPC_URL_255) },
    kromaTestnet: {
      chainId: 2358,
      transport: http(process.env.PONDER_RPC_URL_2358),
    },
    avalancheC: {
      chainId: 43114,
      transport: http(process.env.PONDER_RPC_URL_43114),
    },
    avalancheFuji: {
      chainId: 43113,
      transport: http(process.env.PONDER_RPC_URL_43113),
    },
    zora: {
      chainId: 7777777,
      transport: http(process.env.PONDER_RPC_URL_7777777),
    },
    zoraSepolia: {
      chainId: 999999999,
      transport: http(process.env.PONDER_RPC_URL_999999999),
    },
  },
  contracts: {
    'EntryPoint0.6': {
      abi: entryPoint06Abi,
      address: ENTRYPOINT_0_6_ADDRESS,
      network: {
        ethereum: process.env.PONDER_RPC_URL_1
          ? {
              startBlock: 17012204,
            }
          : undefined,
        goerli: process.env.PONDER_RPC_URL_5
          ? {
              startBlock: 8801632,
            }
          : undefined,
        sepolia: process.env.PONDER_RPC_URL_11155111
          ? {
              startBlock: 3257815,
            }
          : undefined,
        bsc: process.env.PONDER_RPC_URL_56
          ? {
              startBlock: 27202729,
            }
          : undefined,
        bscTestnet: process.env.PONDER_RPC_URL_97
          ? {
              startBlock: 28789129,
            }
          : undefined,
        polygon: process.env.PONDER_RPC_URL_137
          ? {
              startBlock: 41335185,
            }
          : undefined,
        polygonMumbai: process.env.PONDER_RPC_URL_80001
          ? {
              startBlock: 34166156,
            }
          : undefined,
        polygonZkevm: process.env.PONDER_RPC_URL_1101
          ? {
              startBlock: 184258,
            }
          : undefined,
        polygonZkevmTestnet: process.env.PONDER_RPC_URL_1442
          ? {
              startBlock: 578113,
            }
          : undefined,
        fantom: process.env.PONDER_RPC_URL_250
          ? {
              startBlock: 63515111,
            }
          : undefined,
        fantomTestnet: process.env.PONDER_RPC_URL_4002
          ? {
              startBlock: 15987221,
            }
          : undefined,
        opMainnet: process.env.PONDER_RPC_URL_10
          ? {
              startBlock: 88234528,
            }
          : undefined,
        opSepolia: process.env.PONDER_RPC_URL_11155420
          ? {
              startBlock: 3593614,
            }
          : undefined,
        arbitrum: process.env.PONDER_RPC_URL_42161
          ? {
              startBlock: 78720307,
            }
          : undefined,
        arbitrumSepolia: process.env.PONDER_RPC_URL_421614
          ? {
              startBlock: 623334,
            }
          : undefined,
        arbitrumNova: process.env.PONDER_RPC_URL_42170
          ? {
              startBlock: 7494602,
            }
          : undefined,
        moonriver: process.env.PONDER_RPC_URL_1285
          ? {
              startBlock: 4798917,
            }
          : undefined,
        moonbeam: process.env.PONDER_RPC_URL_1284
          ? {
              startBlock: 4026730,
            }
          : undefined,
        moonbaseAlpha: process.env.PONDER_RPC_URL_1287
          ? {
              startBlock: 4735374,
            }
          : undefined,
        cronos: process.env.PONDER_RPC_URL_25
          ? {
              startBlock: 9728229,
            }
          : undefined,
        gnosis: process.env.PONDER_RPC_URL_100
          ? {
              startBlock: 27364185,
            }
          : undefined,
        gnosisChiado: process.env.PONDER_RPC_URL_10200
          ? {
              startBlock: 3728232,
            }
          : undefined,
        celo: process.env.PONDER_RPC_URL_42220
          ? {
              startBlock: 21062508,
            }
          : undefined,
        celoAlfajores: process.env.PONDER_RPC_URL_44787
          ? {
              startBlock: 17649236,
            }
          : undefined,
        linea: process.env.PONDER_RPC_URL_59144
          ? {
              startBlock: 915,
            }
          : undefined,
        lineaTestnet: process.env.PONDER_RPC_URL_59140
          ? {
              startBlock: 465300,
            }
          : undefined,
        base: process.env.PONDER_RPC_URL_8453
          ? {
              startBlock: 1854367,
            }
          : undefined,
        baseSepolia: process.env.PONDER_RPC_URL_84532
          ? {
              startBlock: 1128910,
            }
          : undefined,
        scroll: process.env.PONDER_RPC_URL_534352
          ? {
              startBlock: 17,
            }
          : undefined,
        scrollSepolia: process.env.PONDER_RPC_URL_534351
          ? {
              startBlock: 91,
            }
          : undefined,
        opBnb: process.env.PONDER_RPC_URL_204
          ? {
              startBlock: 1125290,
            }
          : undefined,
        opBnbTestnet: process.env.PONDER_RPC_URL_5611
          ? {
              startBlock: 2108065,
            }
          : undefined,
        kroma: process.env.PONDER_RPC_URL_255
          ? {
              startBlock: 5197622,
            }
          : undefined,
        kromaTestnet: process.env.PONDER_RPC_URL_2358
          ? {
              startBlock: 7783408,
            }
          : undefined,
        avalancheC: process.env.PONDER_RPC_URL_43114
          ? {
              startBlock: 28865255,
            }
          : undefined,
        avalancheFuji: process.env.PONDER_RPC_URL_43113
          ? {
              startBlock: 20797033,
            }
          : undefined,
        zora: process.env.PONDER_RPC_URL_7777777
          ? {
              startBlock: 5223236,
            }
          : undefined,
        zoraSepolia: process.env.PONDER_RPC_URL_999999999
          ? {
              startBlock: 3465249,
            }
          : undefined,
      },
    },
    'EntryPoint0.7': {
      abi: entryPoint07Abi,
      address: ENTRYPOINT_0_7_ADDRESS,
      network: {
        ethereum: process.env.PONDER_RPC_URL_1
          ? {
              startBlock: 19274877,
            }
          : undefined,
        goerli: process.env.PONDER_RPC_URL_5
          ? {
              startBlock: 10568981,
            }
          : undefined,
        sepolia: process.env.PONDER_RPC_URL_11155111
          ? {
              startBlock: 5328753,
            }
          : undefined,
        bsc: process.env.PONDER_RPC_URL_56
          ? {
              startBlock: 36326227,
            }
          : undefined,
        bscTestnet: process.env.PONDER_RPC_URL_97
          ? {
              startBlock: 38058129,
            }
          : undefined,
        polygon: process.env.PONDER_RPC_URL_137
          ? {
              startBlock: 53784988,
            }
          : undefined,
        polygonMumbai: process.env.PONDER_RPC_URL_80001
          ? {
              startBlock: 46345465,
            }
          : undefined,
        opMainnet: process.env.PONDER_RPC_URL_10
          ? {
              startBlock: 116453058,
            }
          : undefined,
        opSepolia: process.env.PONDER_RPC_URL_11155420
          ? {
              startBlock: 8448043,
            }
          : undefined,
        arbitrum: process.env.PONDER_RPC_URL_42161
          ? {
              startBlock: 182947891,
            }
          : undefined,
        arbitrumSepolia: process.env.PONDER_RPC_URL_421614
          ? {
              startBlock: 16853333,
            }
          : undefined,
        gnosis: process.env.PONDER_RPC_URL_100
          ? {
              startBlock: 32559861,
            }
          : undefined,
        celo: process.env.PONDER_RPC_URL_42220
          ? {
              startBlock: 24242863,
            }
          : undefined,
        celoAlfajores: process.env.PONDER_RPC_URL_44787
          ? {
              startBlock: 22698902,
            }
          : undefined,
        linea: process.env.PONDER_RPC_URL_59144
          ? {
              startBlock: 2506675,
            }
          : undefined,
        base: process.env.PONDER_RPC_URL_8453
          ? {
              startBlock: 10920348,
            }
          : undefined,
        baseSepolia: process.env.PONDER_RPC_URL_84532
          ? {
              startBlock: 6556474,
            }
          : undefined,
        scroll: process.env.PONDER_RPC_URL_534352
          ? {
              startBlock: 3591634,
            }
          : undefined,
        scrollSepolia: process.env.PONDER_RPC_URL_534351
          ? {
              startBlock: 3061869,
            }
          : undefined,
        opBnb: process.env.PONDER_RPC_URL_204
          ? {
              startBlock: 17130896,
            }
          : undefined,
        avalancheC: process.env.PONDER_RPC_URL_43114
          ? {
              startBlock: 41958878,
            }
          : undefined,
        avalancheFuji: process.env.PONDER_RPC_URL_43113
          ? {
              startBlock: 30305092,
            }
          : undefined,
        zora: process.env.PONDER_RPC_URL_7777777
          ? {
              startBlock: 11017288,
            }
          : undefined,
        zoraSepolia: process.env.PONDER_RPC_URL_999999999
          ? {
              startBlock: 5324224,
            }
          : undefined,
      },
    },
  },
});
