import { sorting } from 'lib/constants'

import CrossDown from 'components/Icons/CrossDown'
import Dropdown from 'components/Dropdown'

import * as S from './styles'
import SortFilterItem from './FilterBySlug'

const FilterBy = () => {
  return (
    <Dropdown
      title={
        <S.Title role="button" aria-haspopup="true">
          Filtrar por <CrossDown />
        </S.Title>
      }
    >
      <S.ListWrapper>
        {sorting.map((item) => (
          <SortFilterItem item={item} key={item.title} />
        ))}
      </S.ListWrapper>
    </Dropdown>
  )
}

export default FilterBy
