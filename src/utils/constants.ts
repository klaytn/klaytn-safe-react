import { CHAIN_ID } from 'src/config/chain.d'

export const APP_ENV = process.env.REACT_APP_ENV
export const NODE_ENV = process.env.NODE_ENV
export const IS_PRODUCTION = APP_ENV === 'production'
export const DEFAULT_CHAIN_ID =
  process.env.REACT_APP_DEFAULT_CHAIN_ID || (IS_PRODUCTION ? CHAIN_ID.CYPRESS : CHAIN_ID.BAOBAB)
export const PUBLIC_URL = process.env.PUBLIC_URL
export const TX_SERVICE_VERSION = '1'
export const INTERCOM_ID = IS_PRODUCTION ? process.env.REACT_APP_INTERCOM_ID : ''
export const BEAMER_ID = IS_PRODUCTION ? process.env.REACT_APP_BEAMER_ID : ''
export const SENTRY_DSN = process.env.REACT_APP_SENTRY_DSN || ''
export const PORTIS_ID = process.env.REACT_APP_PORTIS_ID ?? ''
export const FORTMATIC_KEY = process.env.REACT_APP_FORTMATIC_KEY ?? ''
export const INFURA_TOKEN = process.env.REACT_APP_INFURA_TOKEN || ''
export const SAFE_APPS_RPC_TOKEN = process.env.REACT_APP_SAFE_APPS_RPC_INFURA_TOKEN || ''
export const LATEST_SAFE_VERSION = process.env.REACT_APP_LATEST_SAFE_VERSION || '1.3.0'
export const APP_VERSION = process.env.REACT_APP_APP_VERSION || 'not-defined'
export const COLLECTIBLES_SOURCE = process.env.REACT_APP_COLLECTIBLES_SOURCE || 'Gnosis'
export const SAFE_POLLING_INTERVAL = process.env.NODE_ENV === 'test' ? 4500 : 15000
export const ETHERSCAN_API_KEY = process.env.REACT_APP_ETHERSCAN_API_KEY || ''
export const ETHGASSTATION_API_KEY = process.env.REACT_APP_ETHGASSTATION_API_KEY
export const IPFS_GATEWAY = process.env.REACT_APP_IPFS_GATEWAY
export const WC_BRIDGE = process.env.REACT_APP_WC_BRIDGE || ''

export const DEMO_SAFE_MAINNET = '0xfF501B324DC6d78dC9F983f140B9211c3EdB4dc7'

// Google Tag Manager
export const GOOGLE_TAG_MANAGER_ID = process.env.REACT_APP_GOOGLE_TAG_MANAGER_ID || ''
export const GOOGLE_TAG_MANAGER_AUTH_LIVE = process.env.REACT_APP_GOOGLE_TAG_MANAGER_LIVE_AUTH || ''
export const GOOGLE_TAG_MANAGER_AUTH_LATEST = process.env.REACT_APP_GOOGLE_TAG_MANAGER_LATEST_AUTH || ''
export const GOOGLE_TAG_MANAGER_DEVELOPMENT_AUTH = process.env.REACT_APP_GOOGLE_TAG_MANAGER_DEVELOPMENT_AUTH || ''

// Simulation
// api docs: https://www.notion.so/Simulate-API-Documentation-6f7009fe6d1a48c999ffeb7941efc104
export const TENDERLY_SIMULATE_ENDPOINT_URL = process.env.REACT_APP_TENDERLY_SIMULATE_ENDPOINT_URL || ''
export const TENDERLY_PROJECT_NAME = process.env.REACT_APP_TENDERLY_PROJECT_NAME || ''
export const TENDERLY_ORG_NAME = process.env.REACT_APP_TENDERLY_ORG_NAME || ''

// Cypress tests
export const E2E_MNEMONIC = process.env.REACT_APP_E2E_MNEMONIC || ''

// localStorage-related constants
export const LS_NAMESPACE = 'SAFE'
export const LS_SEPARATOR = '__'
export const LS_USE_PROD_CGW = 'useProdGateway'

// For debugging on dev
const isProdGateway = () => {
  try {
    return localStorage.getItem(`${LS_NAMESPACE}${LS_SEPARATOR}${LS_USE_PROD_CGW}`) === 'true'
  } catch (e) {
    return false
  }
}

export const GATEWAY_URL =
  process.env.REACT_APP_GATEWAY_URL ||
  (IS_PRODUCTION || isProdGateway() ? 'https://safe-client.gnosis.io' : 'https://safe-client.staging.gnosisdev.com')
