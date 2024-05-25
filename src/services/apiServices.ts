import type { GetProductsResponse, ProductType } from '@/types/Product'
import axios, { type AxiosInstance, type AxiosResponse } from 'axios'

class GraphQLService {
  private axiosInstance: AxiosInstance

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  private async request<T>(query: string, variables?: object): Promise<AxiosResponse<T>> {
    const response = await this.axiosInstance.post<T>('', {
      query,
      variables
    })
    return response
  }
  public async getProducts(keyword?: string): Promise<AxiosResponse<GetProductsResponse>> {
    const query = `
      query Products($query: productFindInput) {
        products(query: $query) {
          _id
          name
          image
          price
          listMedias
          htmlcontent
          slug
        }
      }
    `

    const variables = keyword
      ? {
          query: {
            name: {
              regex: keyword
            }
          }
        }
      : {}
    return this.request<GetProductsResponse>(query, variables)
  }
}
const graphqlService = new GraphQLService('https://ric.loidirieng.com/graphql')

export default graphqlService
