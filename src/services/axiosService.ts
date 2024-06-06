import type { GetProductsResponse, ProductType } from '@/types/Product'
import axios, { type AxiosInstance, type AxiosResponse } from 'axios'

class AxiosService {
  private axiosInstance: AxiosInstance

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  public async request<T>(query: string, variables?: object): Promise<AxiosResponse<T>> {
    const response = await this.axiosInstance.post<T>('', {
      query,
      variables
    })
    return response
  }

}
const axiosService = new AxiosService('https://ric.loidirieng.com/graphql')


export default  axiosService
