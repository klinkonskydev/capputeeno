import styled, { css } from "styled-components";
import { TextFieldProps } from ".";

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
`;

export const Icon = styled.span`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type WrapperProps = Pick<TextFieldProps, "iconPosition">;

export const Wrapper = styled.label<WrapperProps>`
  ${({ iconPosition }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 352px;
    border: 2px solid transparent;

    background-color: var(--bg-secondary);

    border-radius: 8px;
    overflow: hidden;

    transition: border-color 200ms;

    cursor: pointer;
    padding-${iconPosition}: 1.6rem;

    &:focus-within {
      border-color: #EEEEEE;
    }

    ${Icon} {
      order: ${iconPosition === "left" ? 0 : 1} 
    }
  `}
`;
