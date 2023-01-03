import Web3 from 'web3'

export async function getMetamaskWallet(): Promise<string[]> {
  if (!window.ethereum) {
    throw new Error('ethereum is not available')
  }

  const web3 = new Web3(window.ethereum)

  const wallet = await web3.eth.requestAccounts()

  if (!wallet) {
    throw new Error('wallet is not available')
  }

  return wallet
}
