'use client'
import axios, { AxiosPromise } from 'axios'
import { useQuery } from '@tanstack/react-query'

import { getProductsQuery } from './queries/getProducts'
import { FilterParams } from './types'
import { ProductsResponse } from './types'
import { ProductResponse } from './types'
import { getProductQuery } from './queries/getProduct'
import { Product } from './types'

const default_port = 'http://localhost:3333'
const PORT = process.env.NEXT_PUBLIC_GRAPQH_QL ?? default_port

const fetcher = <T, E>(variables: E, query: string): AxiosPromise<T> => {
  return axios.post<T>(PORT, { query, variables })
}

export const getProducts = (params: FilterParams) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, isLoading, refetch } = useQuery({
    queryFn: () =>
      fetcher<ProductsResponse, FilterParams>(params, getProductsQuery),
    queryKey: ['getAllProducts', params?.filter?.category]
  })

  return {
    products: data?.data.data.allProducts ?? [],
    totalProducts: data?.data?.data?._allProductsMeta?.count ?? 0,
    isLoading,
    refetch
  }
}

type GetProductParam = {
  id: string
}

export const getProduct = (params: GetProductParam) => {
  // eslint-disable-next-line
  const { data, isLoading } = useQuery({
    queryFn: () =>
      fetcher<ProductResponse, GetProductParam>(params, getProductQuery),
    queryKey: ['getProduct', params?.id]
  })

  return {
    product: data?.data.data.Product ?? ({} as Product),
    isLoading
  }
}
