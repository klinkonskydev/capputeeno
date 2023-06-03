import styled, { css } from 'styled-components'
import Link from 'next/link'

type TabProps = {
  isActive: boolean
}

const tabModifiers = {
  active: () => css`
    font-weight: 600;
    color: var(--text-dark-secondary);

    &::after {
      content: '';
      width: 100%;
      height: 4px;
      background: var(--orange);
      display: block;
    }
  `
}

export const Tab = styled(Link)<TabProps>`
  ${({ isActive }) => css`
    font-family: inherit;
    font-size: 1.6rem;
    color: var(--text-dark);
    cursor: pointer;

    transition: color 250ms;

    &:hover {
      color: var(--text-dark-secondary);
    }

    ${isActive && tabModifiers.active()}
  `}
`
