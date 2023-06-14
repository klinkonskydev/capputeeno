'use client'

import { Suspense, useEffect } from 'react'
import NextNProgress from 'nextjs-progressbar'

import { FilterParams, ProductFilter } from 'lib/graphql/types'
import { getProducts } from 'lib/graphql'
import { creteGraphqlParamsByUrl } from 'utils/create-graphql-params-by-url'
import HomeTemplate from 'templates/Home'
import CardList from 'components/CardList'
import Container from 'components/Container'
import CardListSkeleton from 'components/CardList/skeleton'
import Pagination from 'components/Pagination'

type HomeProps = {
  searchParams: Omit<FilterParams, 'filter'> & ProductFilter
}

export default function Home({ searchParams }: HomeProps) {
  const graphqlParams = creteGraphqlParamsByUrl(searchParams)
  const { products, isLoading, refetch, totalProducts } = getProducts(graphqlParams)

  useEffect(() => {
    refetch()
  }, [searchParams, refetch])

  return (
    <HomeTemplate>
      <Container>
        <Suspense fallback={<CardListSkeleton />}>
          <CardList products={products} isLoading={isLoading} />
        </Suspense>
        <NextNProgress color="#FFA585" startPosition={0.3} stopDelayMs={200} height={8} showOnShallow={true} />
        <Pagination totalProduct={totalProducts} />
      </Container>
    </HomeTemplate>
  )
}
