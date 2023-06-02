import styled from "styled-components";

export const Title = styled.button`
  background: transparent;
  border: 0;

  font-size: 1.4rem;
  color: var(--text-dark);
  display: flex;
  align-items: center;
  gap: 1.6rem;
  cursor: pointer;
`;

export const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const List = styled.li`
  font-size: 1.4rem;
  font-family: inherit;
  color: var(--text-dark);
`;
