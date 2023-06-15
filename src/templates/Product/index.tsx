'use client'

import Image from 'next/image'

import { getProduct } from 'lib/graphql'

import * as S from './styles'
import formatPrice from 'utils/format-price'
import BackIcon from 'components/Icons/BackIcon'
import { useRouter } from 'next/navigation'
import ShoppingBagIcon from 'components/Icons/ShoppingBagIcon'
import ProductSkeleton from './skeleton'

const ProductTemplate = ({ id }: { id: string }) => {
  const { product, isLoading } = getProduct({ id })
  const { back } = useRouter()

  return isLoading ? <ProductSkeleton /> : (
    <S.Wrapper as="main">
      <S.Link onClick={back}>
        <BackIcon title="Back to previous page" />
        Voltar
      </S.Link>

      <S.ContentWrapper>
        <S.ImageWrapper>
          <Image alt={product.name} src={product.image_url} priority fill sizes="100%" objectFit="cover" />
        </S.ImageWrapper>

        <S.Content>
          <div>
            <S.Heading>{product.name}</S.Heading>
            <S.Price aria-label="product price">
              {formatPrice(product.price_in_cents / 100)}
            </S.Price>
            <S.Info>
              *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
              R$900,00.
            </S.Info>
            <S.DesciptionTitle>DESCRIÇÃO</S.DesciptionTitle>
            <S.Description>{product.description}</S.Description>
          </div>

          <S.ButtonWrapper>
            <S.Button>
              <ShoppingBagIcon />
              ADICIONAR AO CARRINHO
            </S.Button>
          </S.ButtonWrapper>
        </S.Content>
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default ProductTemplate
