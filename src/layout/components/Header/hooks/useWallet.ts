import { MouseEvent } from 'react'
import { NoBalanceFound } from '../../../../errors/NoBalanceFound'

import { NoMetaMaskFound } from '../../../../errors/NoMetaMaskFound'
import { WalletRefused } from '../../../../errors/WalletRefused'
import { WalletBalance } from '../../../../services/metamask.service'
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
  const web3 = new WalletBalance()

  async function handleSetWallets() {
    try {
      const wallets = await web3.getMetamaskWallet()
      const balance = await web3.getWalletsBalance(wallets[0])

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
