import Container from 'components/Container'
import styled from 'styled-components'

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: 100%;
  height: 100%;
`

export const Link = styled.button`
  all: unset;
  cursor: pointer;
  color: var(--text);
  font-weight: 500;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  gap: 1.1rem;
  width: fit-content;

  & svg {
    transition: scale 100ms ease-in;
  }

  &:hover, &:hover path {
    color: var(--text-dark-secondary);
    stroke: var(--text-dark-secondary);
  }

  &:active svg {
    scale: 0.9;
  }
`

export const ContentWrapper = styled.section`
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
  min-height: 580px;
  height: 100%;
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

export const Button = styled.button`
  all: unset;
  box-sizing: border-box;
  padding: 1rem 1.4rem;
  width: 100%;
  cursor: pointer;

  background: var(--blue);
  color: var(--shapes-light-background);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  border-radius: 4px;
  transition: scale 100ms ease-in;
  border: 2px solid transparent;

  & svg path {
    stroke: var(--shapes-light-background);
  }

  &:active {
    scale: 0.98;
  }

  &:focus {
    border-color: var(--black);
  }
`
