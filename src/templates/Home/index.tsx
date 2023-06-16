'use client'

import { getProducts } from 'lib/graphql'
import { creteGraphqlParamsByUrl } from 'utils/create-graphql-params-by-url'
import Tabs, { Tab } from 'components/Tabs'
import FilterBy from 'components/FilterBy'
import CardList from 'components/CardList'
import CardListSkeleton from 'components/CardList/skeleton'
import Pagination from 'components/Pagination'
import Container from 'components/Container'

import * as S from './styles'
import { Suspense, useEffect } from 'react'
import { FilterParams, Product, ProductFilter } from 'lib/graphql/types'

const tabs: Tab[] = [
  {
    label: 'TODOS',
    param: ''
  },
  {
    label: 'CAMISETAS',
    param: 't-shirts'
  },
  {
    label: 'CANECAS',
    param: 'mugs'
  }
]

export type HomeTemplateProps = {
  products: Product[]
  isLoading: boolean
  totalProducts: number
}

export default function HomeTemplate({ totalProducts, products, isLoading }: HomeTemplateProps) {
  return (
    <S.Wrapper>
      <Container>
        <S.Header>
          <S.TabsWrapper>
            <Tabs tabs={tabs} />
          </S.TabsWrapper>

          <FilterBy />
        </S.Header>
      </Container>

      <S.ContentWrapper>
        <Pagination totalProduct={totalProducts} />
        <Suspense fallback={<CardListSkeleton />}>
          <CardList products={products} isLoading={isLoading} />
        </Suspense>
        <Pagination totalProduct={totalProducts} />
      </S.ContentWrapper>
    </S.Wrapper>
  )
}
