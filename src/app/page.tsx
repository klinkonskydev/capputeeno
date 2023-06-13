'use client'

import { Suspense, useEffect } from 'react'

import HomeTemplate from 'templates/Home'
import CardList from 'components/CardList'
import Container from 'components/Container'
import CardListSkeleton from 'components/CardList/skeleton'
import { ProductFilter } from 'lib/graphql/types'
import { getProducts } from 'lib/graphql'
import { creteGraphqlParamsByUrl } from 'utils/create-graphql-params-by-url'

type HomeProps = {
  searchParams: ProductFilter
}

export default function Home({ searchParams }: HomeProps) {
  const graphqlParams = creteGraphqlParamsByUrl({ params: searchParams })
  const { products, isLoading, refetch } = getProducts(graphqlParams)

  useEffect(() => {
    refetch()
  }, [searchParams])

  return (
    <HomeTemplate>
      <Container>
        <Suspense fallback={<CardListSkeleton />}>
          <CardList products={products} isLoading={isLoading} />
        </Suspense>
      </Container>
    </HomeTemplate>
  )
}
