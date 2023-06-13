import * as Tabs from '@radix-ui/react-tabs'
import styled from 'styled-components'

export const Root = styled(Tabs.Root)`
  display: flex;
  flex-direction: column;
  width: 300px;
`

export const List = styled(Tabs.List)`
  flex-shrink: 0;
  display: flex;
  width: fit-content;
  gap: 4rem;
`

export const Trigger = styled(Tabs.Trigger)`
  all: unset;
  font: normal 600 1.6rem/2.2rem Saira, sans-serif;
  color: var(--text-dark);
  padding: 0.8rem;
  cursor: pointer;

  &:first-child {
    border-top-left-radius: 6px;
  }

  &:last-child {
    border-top-right-radius: 6px;
  }

  &:hover {
    color: var(--shapes-dark);
  }

  &[data-state='active'] {
    color: var(--text-dark-secondary);
    box-shadow: inset 0 -1px 0 0 var(--orange), 0 1px 0 0 var(--orange);
  }

  &:focus {
    position: relative;
    box-shadow: 0 0 0 2px black;
  }
`
