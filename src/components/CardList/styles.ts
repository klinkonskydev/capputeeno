import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, auto));
  justify-content: space-between;
  column-gap: 32px;
  row-gap: 22px;

  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    justify-content: center;
  `}
`
