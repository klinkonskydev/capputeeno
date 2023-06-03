'use client'
import Image from 'next/image'

import * as S from './styles'
import formatPrice from 'utils/format-price'
import { Product } from 'lib/graphql/types'

const Card = ({ id, name, image_url, price_in_cents }: Product) => {
  const price = price_in_cents / 100
  return (
    <S.Wrapper href={`product/${id}`}>
      <S.ImageWrapper>
        <Image src={image_url} alt={name} fill />
      </S.ImageWrapper>

      <S.Content>
        <S.Title>{name}</S.Title>
        <hr />
        <S.Price aria-label="product price">{formatPrice(price)}</S.Price>
      </S.Content>
    </S.Wrapper>
  )
}

export default Card
