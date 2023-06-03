'use client'

import Cart from 'components/Card'
import { Products } from 'lib/graphql/products-mock'

import * as S from './styles'

type CardListProps = {
  products: Products
}

const CardList = ({ products }: CardListProps) => {
  return (
    <S.Wrapper>
      {products.map((product) => (
        <Cart key={product.title} {...product} />
      ))}
    </S.Wrapper>
  )
}

export default CardList
