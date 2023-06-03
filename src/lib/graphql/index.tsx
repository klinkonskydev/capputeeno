import { SortFilterItem } from 'lib/constants'
import productsMock from './products-mock'

type GetProductsParams = {
  query?: string
} & Omit<SortFilterItem, 'title' | 'slug'>

export const getProducts = async ({
  reverse,
  sortKey,
  query
}: GetProductsParams) => {
  return reverse ? productsMock.reverse() : productsMock
}
