'use client'
import Image from 'next/image'

import * as S from './styles'
import formatPrice from 'utils/format-price'
import { Product } from 'lib/graphql/products-mock'

const Card = ({ title, price, slug, imgURL }: Product) => {
  return (
    <S.Wrapper href={slug}>
      <S.ImageWrapper>
        <Image src={imgURL} alt={title} fill />
      </S.ImageWrapper>

      <S.Content>
        <S.Title>{title}</S.Title>
        <hr />
        <S.Price aria-label="product price">{formatPrice(price)}</S.Price>
      </S.Content>
    </S.Wrapper>
  )
}

export default Card
