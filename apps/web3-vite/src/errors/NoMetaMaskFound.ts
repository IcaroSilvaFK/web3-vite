export class NoMetaMaskFound extends Error {
  public message: string
  public exception: string | undefined

  constructor(message: string, exception?: string) {
    super()
    this.message = message
    this.exception = exception
  }
}
