export interface ProductType {
  _id: string
  name: string
  image: string
  price: number
  listMedias: string[]
  htmlcontent: string
  slug: string
}
export interface GetProductsResponse {
  data: {
    products: ProductType[]
  }
}
