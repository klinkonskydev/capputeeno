import { Saira_Stencil_One } from 'next/font/google'
import styled from 'styled-components'
import media from 'styled-media-query'
import MediaMatch from 'components/MediaMatch'

export const sairaStencilOne = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin']
})

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.2rem 1.8rem;

  ${media.greaterThan('medium')`
    padding: 1.9rem 10rem;
  `}

  ${media.greaterThan('large')`
    padding: 1.9rem 16rem;
  `}
`

export const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 150%;
  text-decoration: none;

  ${media.greaterThan('medium')`
    font-size: 4rem;
  `}
`

export const TextFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2.7rem;
  margin-left: auto;
  width: 100%;
  max-width: 403px;

  & ${MediaMatch} {
    width: 100%;
  }
`
