import styled, { css } from 'styled-components'
import LinkNext from 'next/link'

export const Title = styled.button`
  background: transparent;
  border: 0;

  font-size: 1.4rem;
  color: var(--text-dark);
  display: flex;
  align-items: center;
  gap: 1.6rem;
  cursor: pointer;
`

export const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

const linkModifiers = {
  active: () => css`
    color: var(--text-dark-secondary);
    font-weight: 500;
  `
}

type LinkProps = {
  isActive: boolean
}

export const Link = styled(LinkNext)<LinkProps>`
  ${({ isActive }) => css`
    font-size: 1.4rem;
    font-family: inherit;
    color: var(--text-dark);
    transition: color 250ms;
    ${!!isActive && linkModifiers.active()}
  `}
`
