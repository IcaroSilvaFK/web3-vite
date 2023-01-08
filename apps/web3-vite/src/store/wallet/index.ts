import create from 'zustand'

interface IUseWalletProps {
  wallets: string[] | null
  value: string | null
  setWallets(wallets: string[]): void
  destroyWallets(): void
  setWalletValue(value: string): void
  destroyWalletValue(): void
}

export const useWallets = create<IUseWalletProps>()((set) => ({
  wallets: null,
  value: null,
  setWallets(wallets) {
    set((state) => ({ ...state, wallets }))
  },
  destroyWallets() {
    set((state) => ({ ...state, wallets: null }))
  },
  setWalletValue(value) {
    set((state) => ({ ...state, value }))
  },
  destroyWalletValue() {
    set((state) => ({ ...state, value: null }))
  },
}))
