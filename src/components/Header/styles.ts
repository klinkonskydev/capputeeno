import { Saira_Stencil_One } from 'next/font/google'
import styled from 'styled-components'
import media from 'styled-media-query'
import MediaMatch from 'components/MediaMatch'
import Container from 'components/Container'

export const sairaStencilOne = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin']
})

export const Header = styled.header`
  width: 100%;
`

export const Content = styled(Container)`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.2rem 2.4rem;
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

export const TextFieldWrapper = styled.form`
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
