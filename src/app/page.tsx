'use client'

import { getProducts } from 'lib/graphql'
import { FilterParams, ProductFilter } from 'lib/graphql/types'
import { useEffect } from 'react'
import HomeTemplate from 'templates/Home'
import { creteGraphqlParamsByUrl } from 'utils/create-graphql-params-by-url'

export type HomeProps = {
  searchParams: Omit<FilterParams, 'filter'> & ProductFilter
}

export default function Home({ searchParams }: HomeProps) {
  const graphqlParams = creteGraphqlParamsByUrl(searchParams)
  const { products, isLoading, refetch, totalProducts } =
    getProducts(graphqlParams)

  useEffect(() => {
    refetch()
  }, [searchParams, refetch])

  return (
    <HomeTemplate
      products={products}
      isLoading={isLoading}
      totalProducts={totalProducts}
    />
  )
}
