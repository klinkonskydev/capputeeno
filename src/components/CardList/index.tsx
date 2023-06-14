'use client'

import { Product } from 'lib/graphql/types'
import Cart from 'components/Card'

import * as S from './styles'
import CardListSkeleton from './skeleton'

type CardListProps = {
  products: Product[]
  isLoading: boolean
}

const CardList = ({ isLoading, products }: CardListProps) => {
  return isLoading ? (
    <CardListSkeleton />
  ) : (
    <S.Wrapper>
      {products?.map((product, index) => (
        <Cart key={product.id} priority={index >= 4} {...product} />
      ))}
    </S.Wrapper>
  )
}

export default CardList
