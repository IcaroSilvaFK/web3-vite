import { MouseEvent } from 'react'
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
      if (err instanceof NoMetaMaskFound) {
        toastError(err.message)
      }
      if (err instanceof WalletRefused) {
        toastError(err.message)
      }
      console.log(err)
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
