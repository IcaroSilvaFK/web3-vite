import { MouseEvent } from 'react'
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

  async function handleSetWallets() {
    try {
      const wallets = await walletService.getMetamaskWallet()
      const balance = await walletService.getWalletsBalance(wallets[0])

      setWallets(wallets)
      setWalletValue(balance)
    } catch (err) {
      const error = <{ message: string }>err

      if (err instanceof NoMetaMaskFound) {
        toastError(err.message)
      }
      if (err instanceof WalletRefused) {
        toastError(err.message)
      }
      if (err instanceof NoBalanceFound) {
        toastError(err.message)
      }

      toastError(error.message)
    }
  }

  function handleRemoveWalletAndBalance(e: MouseEvent) {
    e.stopPropagation()
    destroyWallets()
    destroyWalletValue()
  }
  return {
    value,
    handleSetWallets,
    handleRemoveWalletAndBalance,
  }
}
