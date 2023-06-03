import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  background: var(--bg-primary);
  padding: 1.2rem 1.8rem;
  min-height: calc(100vh - 98px);

  ${media.greaterThan('medium')`
    padding: 1.9rem 10rem;
  `}

  ${media.greaterThan('large')`
    padding: 1.9rem 16rem;
  `}
`

export const TabsWrapper = styled.ul`
  display: flex;
  align-items: flex-start;
  gap: 2.4rem;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.8rem 3rem;
  margin-bottom: 32px;
`
