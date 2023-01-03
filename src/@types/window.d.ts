import { MetaMaskInpageProvider } from 'web3'

declare global {
  export interface Window {
    ethereum: MetaMaskInpageProvider
  }
}
