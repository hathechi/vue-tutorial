import { type AxiosResponse } from 'axios'
import type { GetProductsResponse } from '@/types/Product'
import axiosService from '@/services/axiosService'
import { getApi, postApi } from '@/services/apiService'

class ProductService {
  // static async getProducts(keyword?: string): Promise<AxiosResponse<GetProductsResponse>> {
  //   const query = `
  //     query Products($query: productFindInput) {
  //       products(query: $query) {
  //         _id
  //         name
  //         image
  //         price
  //         listMedias
  //         htmlcontent
  //         slug
  //       }
  //     }
  //   `
  //
  //   const variables = keyword
  //     ? {
  //       query: {
  //         name: {
  //           regex: keyword
  //         }
  //       }
  //     }
  //     : {}
  //   return axiosService.request<GetProductsResponse>(query, variables)
  // }

  static async getData(keyword: string) {
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
    const data = { query, variables }
    return postApi({ url: '/', data: data })
  }


}

export default ProductService