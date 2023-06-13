import styled, { css } from 'styled-components'
import { TextFieldProps } from '.'

export const TextField = styled.input`
  width: 100%;
  background: transparent;
  padding: 1rem 1.6rem;

  border: 0;
  outline: 0;
  border-radius: 8px;
  font-family: inherit;
  font-size: 1.6rem;

  color: var(--text-dark-secondary);

  &::placeholder {
    color: var(--text-dark);
  }
`

export const Icon = styled.button`
  border: 0;
  outline: 0;
  background: transparent;

  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus svg path,
  &:focus svg circle {
    stroke: var(--orange);
  }
`

type WrapperProps = Pick<TextFieldProps, 'iconPosition'>

export const Wrapper = styled.div<WrapperProps>`
  ${({ iconPosition }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 352px;

    background-color: var(--bg-secondary);

    border-radius: 8px;
    overflow: hidden;

    transition: border-color 200ms;

    cursor: pointer;
    padding-${iconPosition}: 1.6rem;

    &:focus-within {
      box-shadow: 0 0 0 2px black;
    }

    ${Icon} {
      order: ${iconPosition === 'left' ? 0 : 1}
    }
  `}
`
