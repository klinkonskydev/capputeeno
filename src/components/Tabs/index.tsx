'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import * as S from './styles'
import { createUrl } from 'utils/create-url'
import createQueryString from 'utils/create-query-string'

export type Tab = {
  label: string
  param: string
}

type TabsProps = {
  tabs: Tab[]
}

const Tab = ({ tabs }: TabsProps) => {
  const { push } = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  return (
    <S.Root defaultValue="" data-orientation="horizontal">
      <S.List>
        {tabs.map(({ label, param }) => {
          const params = createQueryString({ name: 'category', value: param, searchParams })
          const url = createUrl({ pathname, params })

          const activated =
            param === (searchParams.get('category') ?? '').replace('/', '')

          return (
            <S.Trigger
              key={label}
              value={param}
              onClick={() => push(url)}
              data-state={activated ? 'active' : 'inactive'}
            >
              {label}
            </S.Trigger>
          )
        })}
      </S.List>
    </S.Root>
  )
}

export default Tab
