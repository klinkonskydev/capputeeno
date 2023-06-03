'use client'
import axios, { AxiosPromise } from 'axios'

import { getProductsQuery } from './queries/getProducts'
import { Products } from './types'
import { useQuery } from '@tanstack/react-query'

const default_port = 'http://localhost:3333'
const PORT = process.env.NEXT_PUBLIC_GRAPQH_QL ?? default_port

type FetcherParams = {
  page: number
  perPage: number
  order?: string
}

const fetcher = (variables: FetcherParams): AxiosPromise<Products> => {
  return axios.post<Products>(PORT, { query: getProductsQuery, variables })
}

type GetProducsParams = {
  page: number
  perPage: number
  order?: string
}

export const getProducts = ({ page, perPage, order }: GetProducsParams) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data } = useQuery({
    queryFn: () => fetcher({ page, perPage, order }),
    queryKey: ['getAllProducts']
  })

  return {
    products: data?.data.data.allProducts ?? []
  }
}
