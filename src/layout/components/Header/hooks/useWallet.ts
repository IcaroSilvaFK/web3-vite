import { MouseEvent } from 'react'
import { WalletBalance } from '../../../../services/metamask.service'
import { useWallets } from '../../../../store/wallet'

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
    const wallets = await web3.getMetamaskWallet()
    const balance = await web3.getWalletsBalance(wallets[0])

    setWallets(wallets)
    setWalletValue(balance)
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
