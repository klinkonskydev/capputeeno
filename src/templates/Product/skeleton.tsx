'use client'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import * as S from './styles'

const ProductSkeleton = () => {
  return (
    <S.Wrapper as="main">
      <S.Link>
        <Skeleton width={70} height={22} />
      </S.Link>

      <S.ContentWrapper>
        <S.ImageWrapper>
          <Skeleton width="100%" height="100%" />
        </S.ImageWrapper>

        <S.Content>
          <div>
            <Skeleton width="90%" height={48} />

            <S.Price>
              <Skeleton width={87} height={30} />
            </S.Price>

            <S.Info>
              <Skeleton width="100%" height={18} />
            </S.Info>

            <S.DesciptionTitle>
              <Skeleton width={90} height={24} />
            </S.DesciptionTitle>

            <Skeleton width="100%" height={84} />
          </div>

          <S.ButtonWrapper>
            <Skeleton width="50%" height={49} />
          </S.ButtonWrapper>
        </S.Content>
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default ProductSkeleton
