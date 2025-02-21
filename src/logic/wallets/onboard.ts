import Onboard from 'bnc-onboard'
import { API, Initialization } from 'bnc-onboard/dist/src/interfaces'
import { FEATURES } from '@gnosis.pm/safe-react-gateway-sdk'

import { _getChainId, getChainName } from 'src/config'
import transactionDataCheck from 'src/logic/wallets/transactionDataCheck'
import { getSupportedWallets } from 'src/logic/wallets/utils/walletList'
import { ChainId, CHAIN_ID } from 'src/config/chain.d'
import { loadFromStorageWithExpiry, removeFromStorageWithExpiry, saveToStorageWithExpiry } from 'src/utils/storage'
import { store } from 'src/store'
import updateProviderWallet from 'src/logic/wallets/store/actions/updateProviderWallet'
import updateProviderAccount from 'src/logic/wallets/store/actions/updateProviderAccount'
import updateProviderNetwork from 'src/logic/wallets/store/actions/updateProviderNetwork'
import updateProviderEns from 'src/logic/wallets/store/actions/updateProviderEns'
import { closeAllNotifications } from '../notifications/store/notifications'
import { getChains } from 'src/config/cache/chains'
import { shouldSwitchNetwork, switchNetwork } from 'src/logic/wallets/utils/network'
import { isPairingModule } from 'src/logic/wallets/pairing/utils'
import { checksumAddress } from 'src/utils/checksumAddress'

const LAST_USED_PROVIDER_KEY = 'SAFE__lastUsedProvider'

export const saveLastUsedProvider = (name: string): void => {
  const expireInDays = (days: number) => 60 * 60 * 24 * 1000 * days
  const expiry = isPairingModule(name) ? expireInDays(1) : expireInDays(365)
  saveToStorageWithExpiry(LAST_USED_PROVIDER_KEY, name, expiry)
}

export const loadLastUsedProvider = (): string | undefined => {
  return loadFromStorageWithExpiry<string>(LAST_USED_PROVIDER_KEY)
}

export const removeLastUsedProvider = (): void => {
  removeFromStorageWithExpiry(LAST_USED_PROVIDER_KEY)
}

const getNetworkName = (chainId: ChainId) => {
  // 'mainnet' is hardcoded in onboard v1
  const NETWORK_NAMES: Record<ChainId, string> = {
    [CHAIN_ID.ETHEREUM]: 'mainnet',
  }

  // Ledger requires lowercase names
  return NETWORK_NAMES[chainId] || getChainName().toLowerCase()
}

const hasENSSupport = (chainId: ChainId): boolean => {
  return getChains().some((chain) => chain.chainId === chainId && chain.features.includes(FEATURES.DOMAIN_LOOKUP))
}

export const BLOCK_POLLING_INTERVAL = 1000 * 60 * 60 // 1 hour

const getOnboard = (chainId: ChainId): API => {
  const config: Initialization = {
    networkId: parseInt(chainId, 10),
    networkName: getNetworkName(chainId),
    blockPollingInterval: BLOCK_POLLING_INTERVAL,
    subscriptions: {
      wallet: async (wallet) => {
        store.dispatch(updateProviderWallet(wallet.name || ''))
      },
      address: (address) => {
        store.dispatch(updateProviderAccount(checksumAddress(address) || ''))
      },
      network: (networkId) => {
        store.dispatch(updateProviderNetwork(networkId?.toString() || ''))
        store.dispatch(closeAllNotifications())
      },
      ens: hasENSSupport(chainId)
        ? (ens) => {
            store.dispatch(updateProviderEns(ens?.name || ''))
          }
        : undefined,
    },
    walletSelect: {
      description: 'Please select a wallet to connect to the Klaytn Safe',
      wallets: getSupportedWallets(chainId),
    },
    walletCheck: [
      { checkName: 'derivationPath' },
      { checkName: 'connect' },
      { checkName: 'accounts' },
      { checkName: 'network' },
      transactionDataCheck(),
    ],
  }

  return Onboard(config)
}

let currentOnboardInstance: API
const onboard = (): API => {
  const chainId = _getChainId()
  if (!currentOnboardInstance || currentOnboardInstance.getState().appNetworkId.toString() !== chainId) {
    currentOnboardInstance = getOnboard(chainId)
  }

  return currentOnboardInstance
}
export default onboard

export const checkWallet = async (): Promise<boolean> => {
  const wallet = onboard().getState().wallet

  if (shouldSwitchNetwork(wallet)) {
    switchNetwork(wallet, _getChainId()).catch((e) => e.log())
  }

  let isWalletConnected = false
  try {
    // Onboard requests `walletSelect()` be called first but we don't
    // want to open the modal
    isWalletConnected = await onboard().walletCheck()
  } catch {}

  return isWalletConnected
}
