'use client'

import Image from 'next/image'

import * as S from './styles'
import formatPrice from 'utils/format-price'
import { Product } from 'lib/graphql/types'

type CardProps = {
  priority?: boolean
} & Product

const Card = ({
  id,
  name,
  image_url,
  price_in_cents,
  priority = false
}: CardProps) => {
  const price = price_in_cents / 100

  return (
    <S.Wrapper href={`product/${id}`} prefetch={false} key={id}>
      <S.ImageWrapper>
        <Image
          src={image_url}
          alt={name}
          fill
          sizes={'(max-width: 768px) 300px, (min-width: 768px) 1fr'}
          priority={priority}
        />
      </S.ImageWrapper>

      <S.Content>
        <S.Title>{name}</S.Title>
        <S.Line />
        <S.Price aria-label="product price">{formatPrice(price)}</S.Price>
      </S.Content>
    </S.Wrapper>
  )
}

export default Card
