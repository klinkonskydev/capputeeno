import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import * as S from './styles'

const CardSkeleton = () => {
  return (
    <S.Wrapper href="/">
      <S.ImageWrapper>
        <Skeleton width="100%" height="100%" />
      </S.ImageWrapper>

      <S.Content>
        <Skeleton width={170} height={20} />
        <S.Line />
        <Skeleton width={90} height={20} />
      </S.Content>
    </S.Wrapper>
  )
}

export default CardSkeleton
