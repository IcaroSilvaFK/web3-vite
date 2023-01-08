import Web3 from 'web3'

import { NoBalanceFound } from '../errors/NoBalanceFound'
import { NoMetaMaskFound } from '../errors/NoMetaMaskFound'
import { WalletRefused } from '../errors/WalletRefused'

interface ICreateNewTransactionRequestProps {
  from: string
  to: string
  amount: number
}

class WalletBalance {
  private web3: Web3 | undefined

  // constructor() {
  //   this.web3 = new Web3(window.ethereum)
  // }

  async getMetamaskWallet(): Promise<string[]> {
    if (!window.ethereum) {
      throw new NoMetaMaskFound('ethereum is not available')
    }

    // const web3 = new Web3(window.ethereum)

    this.web3 = new Web3(window.ethereum)

    const wallet = await this.web3!.eth.requestAccounts()

    if (!wallet) {
      throw new WalletRefused('wallet is not available')
    }

    return wallet
  }

  async getWalletsBalance(address: string): Promise<string> {
    try {
      const balance = await this.web3!.eth.getBalance(address)

      const convertBalance = this.web3!.utils.fromWei(balance)
      return convertBalance
    } catch (err) {
      console.log(err)
      throw new NoBalanceFound('Balance is invalid')
    }
  }

  convertBalance(balance: string): string {
    try {
      const convertBalance = this.web3!.utils.fromWei(balance)
      return convertBalance
    } catch (err) {
      console.log(err)
      throw new NoBalanceFound('Balance is invalid')
    }
  }

  async createTransaction(props: ICreateNewTransactionRequestProps) {
    try {
      const { amount, from, to } = props
      const nonce = await this.web3!.eth.getTransactionCount(from, 'latest')

      const objectTransaction = {
        from,
        to,
        value: this.web3!.utils.toWei(String(amount)),
        gas: 21000,
        nonce,
      }

      const transaction = await this.web3!.eth.sendTransaction(
        objectTransaction,
      )

      return transaction
    } catch (err) {
      console.log(err)
    }
  }

  async destroyWallet() {
    try {
      this.web3!.eth.clearSubscriptions((error) => {
        throw new Error(error as any)
      })
    } catch (err) {
      console.log(err)
    }
  }
}

export const walletService = new WalletBalance()
