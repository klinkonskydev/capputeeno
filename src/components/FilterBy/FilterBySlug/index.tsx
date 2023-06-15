import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { SortFilterItem } from 'lib/constants'
import { createUrl } from 'utils/create-url'

import * as S from '../styles'
import createQueryString from 'utils/create-query-string'

const SortFilterItem = ({ item }: { item: SortFilterItem }) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const sortField = searchParams.get('sortField')
  const sortOrder = searchParams.get('sortOrder')

  const [active, setActive] = useState(sortField === item.sortField)

  useEffect(() => {
    const sortFieldIsEqual = sortField === item.sortField
    const sortOrderIsEqual = sortOrder ? sortOrder === item.sortOrder : true
    const isActive = sortFieldIsEqual && sortOrderIsEqual
    setActive(isActive)
  }, [searchParams, item.sortField, item.sortOrder])

  const sortFieldQueryString = createQueryString({
    name: 'sortField',
    value: item?.sortField ?? '',
    order: item.sortOrder,
    searchParams,
    deleteOrder: !item?.sortOrder
  })

  const withoutSortFieldQueryString = createQueryString({
    name: 'sortField',
    value: '',
    searchParams,
    deleteOrder: true
  })

  const href = item.sortField
    ? createUrl({
      pathname,
      params: new URLSearchParams(sortFieldQueryString)
    })
    : createUrl({
      pathname,
      params: new URLSearchParams(withoutSortFieldQueryString)
    })

  return (
    <li>
      <S.Link prefetch={false} href={href} isActive={active}>
        {item.title}
      </S.Link>
    </li>
  )
}

export default SortFilterItem
