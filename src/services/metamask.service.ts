import Web3 from 'web3'

import { NoMetaMaskFound } from '../errors/NoMetaMaskFound'
import { WalletRefused } from '../errors/WalletRefused'

export class WalletBalance {
  private web3: Web3

  constructor() {
    if (!window.ethereum) {
      throw new Error('ethereum is not available')
    }
    this.web3 = new Web3(window.ethereum)
  }

  async getMetamaskWallet(): Promise<string[]> {
    if (!window.ethereum) {
      throw new NoMetaMaskFound('ethereum is not available')
    }

    const web3 = new Web3(window.ethereum)

    const wallet = await web3.eth.requestAccounts()

    if (!wallet) {
      throw new WalletRefused('wallet is not available')
    }

    return wallet
  }

  async getWalletsBalance(address: string): Promise<string> {
    const balance = await this.web3.eth.getBalance(address)

    const convertBalance = this.web3.utils.fromWei(balance)

    return convertBalance
  }
}
