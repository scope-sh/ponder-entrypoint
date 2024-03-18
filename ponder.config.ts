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
        ethereum: { startBlock: 17012204 },
        goerli: { startBlock: 8801632 },
        sepolia: { startBlock: 3257815 },
        bsc: { startBlock: 27202729 },
        bscTestnet: { startBlock: 28789129 },
        polygon: { startBlock: 41335185 },
        polygonMumbai: { startBlock: 34166156 },
        polygonZkevm: { startBlock: 184258 },
        polygonZkevmTestnet: { startBlock: 578113 },
        fantom: { startBlock: 63515111 },
        fantomTestnet: { startBlock: 15987221 },
        opMainnet: { startBlock: 88234528 },
        opSepolia: { startBlock: 3593614 },
        arbitrum: { startBlock: 78720307 },
        arbitrumSepolia: { startBlock: 623334 },
        arbitrumNova: { startBlock: 7494602 },
        moonriver: { startBlock: 4798917 },
        moonbeam: { startBlock: 4026730 },
        moonbaseAlpha: { startBlock: 4735374 },
        cronos: { startBlock: 9728229 },
        gnosis: { startBlock: 27364185 },
        gnosisChiado: { startBlock: 3728232 },
        celo: { startBlock: 21062508 },
        celoAlfajores: { startBlock: 17649236 },
        linea: { startBlock: 915 },
        lineaTestnet: { startBlock: 465300 },
        base: { startBlock: 1854367 },
        baseSepolia: { startBlock: 1128910 },
        scroll: { startBlock: 17 },
        scrollSepolia: { startBlock: 91 },
        opBnb: { startBlock: 1125290 },
        opBnbTestnet: { startBlock: 2108065 },
        kroma: { startBlock: 5197622 },
        kromaTestnet: { startBlock: 7783408 },
        avalancheC: { startBlock: 28865255 },
        avalancheFuji: { startBlock: 20797033 },
        zora: { startBlock: 5223236 },
        zoraSepolia: { startBlock: 3465249 },
      },
    },
    'EntryPoint0.7': {
      abi: entryPoint07Abi,
      address: ENTRYPOINT_0_7_ADDRESS,
      network: {
        ethereum: { startBlock: 19274877 },
        goerli: { startBlock: 10568981 },
        sepolia: { startBlock: 5328753 },
        bsc: { startBlock: 36326227 },
        bscTestnet: { startBlock: 38058129 },
        polygon: { startBlock: 53784988 },
        polygonMumbai: { startBlock: 46345465 },
        opMainnet: { startBlock: 116453058 },
        opSepolia: { startBlock: 8448043 },
        arbitrum: { startBlock: 182947891 },
        arbitrumSepolia: { startBlock: 16853333 },
        gnosis: { startBlock: 32559861 },
        celo: { startBlock: 24242863 },
        celoAlfajores: { startBlock: 22698902 },
        linea: { startBlock: 2506675 },
        base: { startBlock: 10920348 },
        baseSepolia: { startBlock: 6556474 },
        scroll: { startBlock: 3591634 },
        scrollSepolia: { startBlock: 3061869 },
        opBnb: { startBlock: 17130896 },
        avalancheC: { startBlock: 41958878 },
        avalancheFuji: { startBlock: 30305092 },
        zora: { startBlock: 11017288 },
        zoraSepolia: { startBlock: 5324224 },
      },
    },
  },
});
