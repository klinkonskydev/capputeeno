import Link from 'next/link'
import styled from 'styled-components'

export const Wrapper = styled(Link)`
  background: var(--white);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 auto;
  color: var(--shapes-light);
  overflow: hidden;
  outline: 2px solid transparent;
  transition: outline-color 200ms;
  max-width: 350px;
  width: 100%;

  img {
    transition: scale 200ms;
  }

  &:hover,
  &:focus {
    outline-color: var(--shapes-light);

    img {
      scale: 1.1;
    }
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 300px;
  max-height: 300px;
  overflow: hidden;
`

export const Content = styled.div`
  padding: 0.8rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Title = styled.h3`
  font-weight: 300;
  font-size: 1.6rem;
  font-family: inherit;
  color: var(--text-dark);
`

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background: var(--shapes-light);
`

export const Price = styled.p`
  font-weight: 600;
  font-family: inherit;
  color: var(--shapes-dark);
`
