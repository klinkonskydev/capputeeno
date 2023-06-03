'use client'

import * as S from './styles'

export type Tab = {
  label: string
  url: string
}

type TabsProps = {
  tabs: Tab[]
}

const Tabs = ({ tabs }: TabsProps) => {
  return tabs.map((tab, i) => (
    <li key={`${tab.label}-${i}`}>
      <S.Tab href={tab.url} isActive={i === 0}>
        {tab.label}
      </S.Tab>
    </li>
  ))
}
export default Tabs
