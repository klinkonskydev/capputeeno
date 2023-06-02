import styled, { css } from "styled-components";

export const Title = styled.div`
  cursor: pointer;
  position: relative;

  display: flex;
  align-items: center;
  color: var(--text-dark);
  z-index: var(--on-all-elements);
`;

export const Overlay = styled.div`
  background: #00000050;
  position: fixed;
  inset: 0 0 0 0;
  z-index: var(--on-common-elements);
  transition: opacity 250ms;
`;

export const Content = styled.div`
  position: absolute;

  background: var(--white);
  min-width: 180px;

  padding: 1.2rem 1.6rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  transition: transform 0.2s ease-in, opacity 250ms;

  z-index: var(--on-all-elements);
`;

type WrapperProps = {
  isOpen: boolean;
};

const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
    visibility: visible;
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2rem);
    visibility: hidden;
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ isOpen }) => css`
    position: relative;
    width: max-content;

    ${Content},
    ${Overlay} {
      ${isOpen && wrapperModifiers.open()}
      ${!isOpen && wrapperModifiers.close()}
    }
  `}
`;
