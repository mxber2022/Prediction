import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { cookieStorage, createStorage } from "wagmi";
import {
  mainnet,
  sepolia,
  baseSepolia,
  modeTestnet,
  hederaTestnet,
  rootstockTestnet,
  optimismSepolia,
  arbitrumSepolia,
} from "wagmi/chains";
import { Chain } from "wagmi/chains";

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) throw new Error("Project ID is not defined");

export const citrea = {
  id: 5115,
  name: "CitreaTestnet",
  nativeCurrency: {
    decimals: 5115,
    name: "CitreaTestnet",
    symbol: "CBTC",
  },
  rpcUrls: {
    public: { http: ["https://rpc.testnet.citrea.xyz"] },
    default: { http: ["https://rpc.testnet.citrea.xyz"] },
  },
  blockExplorers: {
    etherscan: { name: "SnowTrace", url: "https://snowtrace.io" },
    default: { name: "SnowTrace", url: "https://snowtrace.io" },
  },
} as const satisfies Chain;

export const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// Create wagmiConfig
const chains = [
  sepolia,
  rootstockTestnet,
  optimismSepolia,
  arbitrumSepolia,
  citrea,
] as const;
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});
