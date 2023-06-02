import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { SortFilterItem } from 'lib/constants'
import { createUrl } from 'utils/create-url'

import * as S from '../styles'

const SortFilterItem = ({ item }: { item: SortFilterItem }) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [active, setActive] = useState(searchParams.get('sort') === item.slug)
  const q = searchParams.get('q')

  useEffect(() => {
    setActive(searchParams.get('sort') === item.slug)
  }, [searchParams, item.slug])

  const href =
    item.slug && item.slug.length
      ? createUrl({
          pathname,
          params: new URLSearchParams({
            ...(q && { q }),
            sort: item.slug
          })
        })
      : pathname

  return (
    <li>
      <S.Link prefetch={false} href={href} isActive={active}>{item.title}</S.Link>
    </li>
  )
}

export default SortFilterItem
