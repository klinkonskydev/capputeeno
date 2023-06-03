'use client'

import Tabs, { Tab } from 'components/Tabs'
import FilterBy from 'components/FilterBy'

import * as S from './styles'
import Container from 'components/Container'

const tabs: Tab[] = [
  {
    label: 'TODOS',
    url: '/'
  },
  {
    label: 'CAMISETAS',
    url: '/'
  },
  {
    label: 'CANECAS',
    url: '/'
  }
]

type HomeTemplateProps = React.PropsWithChildren<unknown>
export default function HomeTemplate({ children }: HomeTemplateProps) {
  return (
    <S.Wrapper>
      <Container>
        <S.Header>
          <S.TabsWrapper>
            {/* @ts-expect-error Server Component */}
            <Tabs tabs={tabs} />
          </S.TabsWrapper>

          <FilterBy />
        </S.Header>
      </Container>

      {children}
    </S.Wrapper>
  )
}
