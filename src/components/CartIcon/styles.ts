import styled from 'styled-components'
import media from 'styled-media-query'

export const Counter = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 17px;
  height: 17px;
  border-radius: 50px;

  font-weight: 600;
  font-size: 1rem;
  font-family: inherit;

  color: white;

  position: absolute;

  right: -5px;
  bottom: -5px;

  background: var(--red);
`

export const Wrapper = styled('button')`
  border: 0;
  outline: 0;
  background: transparent;

  position: relative;

  cursor: pointer;

  &:hover svg path {
    transition: stroke 250ms;
    stroke: black;
  }

  &:hover ${Counter} {
    transition: background 250ms;
    background: darkred;
  }

  &:focus-within {
    outline: 2px solid var(--black);
    outline-offset: 6px;
  }

  ${media.greaterThan('medium')`
    display: flex;
    align-items: center;
    gap: 2.7rem;
  `}
`
