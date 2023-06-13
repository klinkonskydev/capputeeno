import CardSkeleton from 'components/Card/skeleton'

import * as S from './styles'

const CardListSkeleton = () => {
  const loadingArray = new Array(16).fill('')

  return (
    <S.Wrapper>
      {loadingArray.map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </S.Wrapper>
  )
}

export default CardListSkeleton
