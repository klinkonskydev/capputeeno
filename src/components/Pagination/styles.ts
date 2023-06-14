import styled from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 3.2rem;
  gap: 0.2rem;
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 31px;
  height: 31px;
  border-radius: 8px;
  border: 1px solid var(--shapes-light);
  background: var(--shapes-light);
  color: var(--text-dark);
  font-variant-numeric: tabular-nums;

  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.4rem;

  cursor: pointer;

  &[data-state="active"] {
    color: var(--orange);
    border-color: var(--orange);
    background: transparent;
  }
`
