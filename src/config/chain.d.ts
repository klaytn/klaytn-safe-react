import { ChainInfo } from '@gnosis.pm/safe-react-gateway-sdk'

type ChainName = ChainInfo['chainName']
export type ShortName = ChainInfo['shortName']

// Remain agnostic and follow CGW by using the following
export type ChainId = ChainInfo['chainId']

// A non-exhaustive list of chain ids
// Only use for edge cases and tests
export const CHAIN_ID: Record<ChainName, ChainId> = {
  UNKNOWN: '0',
  ETHEREUM: '1',
  RINKEBY: '4',
  VOLTA: '73799',
  BAOBAB: '1001',
  CYPRESS: '8217'
}

// Values match that required of onboard and returned by CGW
export enum WALLETS {
  SAFE_MOBILE = 'safeMobile',
  METAMASK = 'metamask'
}
