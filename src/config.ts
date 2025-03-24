import { http, createConfig, injected } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

export const config = createConfig({
  connectors: [],
  chains: [sepolia],
	  transports: {
	    [sepolia.id]: http("https://eth-sepolia.g.alchemy.com/v2/etrIgG_nYfgRW_UjM979op3cUefnb1WQ"),
  },
})