import { SortFilterItem } from "lib/constants"

type GetProductsParams = {
  query?: string
} & Omit<SortFilterItem, 'title' | 'slug'>

export const getProducts = async ({ reverse, sortKey, query }: GetProductsParams) => {
  return []
}
