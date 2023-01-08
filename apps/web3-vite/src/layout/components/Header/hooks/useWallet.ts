import { MouseEvent } from 'react'
import { useTranslation } from 'react-i18next'

import { NoBalanceFound } from '../../../../errors/NoBalanceFound'
import { NoMetaMaskFound } from '../../../../errors/NoMetaMaskFound'
import { WalletRefused } from '../../../../errors/WalletRefused'
import { walletService } from '../../../../services/metamask.service'
import { useWallets } from '../../../../store/wallet'
import { toastError } from '../../../../utils/toasts/error'

export function useWallet() {
  const {
    setWallets,
    setWalletValue,
    value,
    destroyWalletValue,
    destroyWallets,
  } = useWallets((state) => state)
  const { t } = useTranslation()

  async function handleSetWallets() {
    try {
      const wallets = await walletService.getMetamaskWallet()
      const balance = await walletService.getWalletsBalance(wallets[0])

      setWallets(wallets)
      setWalletValue(balance)
    } catch (err) {
      if (err instanceof NoMetaMaskFound) {
        toastError(t('Toasts.Errors.ethereumNotFound'))
      }
      if (err instanceof WalletRefused) {
        toastError(t('Toasts.Errors.walletRefused'))
      }
      if (err instanceof NoBalanceFound) {
        toastError(t('Toasts.Errors.balanceNotFound'))
      }
      toastError(t('Toasts.Errors.genericError'))
    }
  }

  function handleRemoveWalletAndBalance(e: MouseEvent) {
    e.stopPropagation()
    walletService.destroyWallet()
    destroyWallets()
    destroyWalletValue()
  }
  return {
    value,
    handleSetWallets,
    handleRemoveWalletAndBalance,
  }
}
