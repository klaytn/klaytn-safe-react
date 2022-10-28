// Icons
import metamaskIcon from './icon-metamask.png'
import safeMobileIcon from './icon-safe-mobile.svg'

import { WALLET_PROVIDER } from 'src/logic/wallets/getWeb3'

const WALLET_ICONS: { [key in WALLET_PROVIDER]: { src: string; height: number } } = {
  [WALLET_PROVIDER.METAMASK]: {
    src: metamaskIcon,
    height: 25,
  },
  [WALLET_PROVIDER.SAFE_MOBILE]: {
    src: safeMobileIcon,
    height: 25,
  },
}

export default WALLET_ICONS
