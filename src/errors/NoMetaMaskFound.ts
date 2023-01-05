export class NoMetaMaskFound extends Error{
    public message:string;
    public exception:string

    constructor(message:string, exception:string){
      super()
      this.message = message
      this.exception = exception
    }
 }