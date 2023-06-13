import Container from 'components/Container'
import styled from 'styled-components'

export const Wrapper = styled(Container)`
  display: flex;
  align-items: flex-start;
  gap: 3.2rem;
  width: 100%;
  height: 100%;
`

export const ImageWrapper = styled.div`
  position: relative;

  width: 100%;
  max-width: 640px;
  height: 580px;

  * img {
    display: block;
    object-fit: cover;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Heading = styled.h2`
  font: normal 400 3.2rem/150% Saira, sans-serif;
  color: var(--text-dark-secondary);
`

export const Price = styled.h3`
  font: normal 600 2rem/150% Saira, sans-serif;
  color: var(--shapes-dark);
  margin-bottom: 2.4rem;
  font-variant-numeric: tabular-nums;
`

export const Info = styled.p`
  font: normal 400 1.2rem/150% Saira, sans-serif;
  color: var(--text-dark-secondary);
  margin-bottom: 5.2rem;
`

export const DesciptionTitle = styled.h3`
  font: normal 500 1.6rem/150% Saira, sans-serif;
  color: var(--text-dark);
  margin-bottom: 0.8rem;
`

export const Description = styled.p`
  font: normal 400 1.4rem/150% Saira, sans-serif;
  color: var(--text-dark);
  margin-bottom: 5.2rem;
`
