import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { SortFilterItem } from 'lib/constants'
import { createUrl } from 'utils/create-url'

import * as S from '../styles'
import createQueryString from 'utils/create-query-string'

const SortFilterItem = ({ item }: { item: SortFilterItem }) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [active, setActive] = useState(
    searchParams.get('sortField') === item.sortField
  )

  useEffect(() => {
    const sortFieldIsEqual = searchParams.get('sortField') === item.sortField
    const sortOrderIsEqual = searchParams.get('sortOrder')
      ? searchParams.get('sortOrder') === item.sortOrder
      : true
    const isActive = sortFieldIsEqual && sortOrderIsEqual
    setActive(isActive)
  }, [searchParams, item.sortField, item.sortOrder])

  const sortField = createQueryString({
    name: 'sortField',
    value: item?.sortField ?? '',
    order: item.sortOrder,
    searchParams,
    deleteOrder: !item?.sortOrder
  })
  const withourSort = createQueryString({
    name: 'sortField',
    value: '',
    searchParams,
    deleteOrder: true
  })

  const href = item.sortField
    ? createUrl({
        pathname,
        params: new URLSearchParams(sortField)
      })
    : createUrl({
        pathname,
        params: new URLSearchParams(withourSort)
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
