import axios from 'axios'

export class HttpClient {
  private baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async post<T, K>(uri: string, data: T): Promise<K> {
    try {
      const { data: response } = await axios.post<K>(
        `${this.baseUrl}${uri}`,
        data,
      )

      return response
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  async get<T>(uri: string): Promise<T> {
    try {
      const { data: response } = await axios.get<T>(`${this.baseUrl}${uri}`)

      return response
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  async put<T, K>(uri: string, data: T): Promise<K> {
    try {
      const { data: response } = await axios.put<K>(
        `${this.baseUrl}${uri}`,
        data,
      )

      return response
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  async destroy(uri: string): Promise<void> {
    try {
      await axios.delete(`${this.baseUrl}${uri}`)
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  async patch<T, K>(uri: string, data: T): Promise<K> {
    try {
      const { data: response } = await axios.patch<K>(
        `${this.baseUrl}${uri}`,
        data,
      )

      return response
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  bearerHeader(token: string): void {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  }
}
