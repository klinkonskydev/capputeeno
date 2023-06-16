import Container from 'components/Container'
import styled from 'styled-components'

export const Wrapper = styled.div`
  background: var(--bg-primary);
  min-height: calc(100vh - 98px);
  padding: 1.9rem 0;
`

export const ContentWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
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
