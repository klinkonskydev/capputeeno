import { render, screen } from '@testing-library/react'
import Header from '.'

jest.mock('next/navigation', () => ({
  ...require('next-router-mock'),
  useSearchParams: () => ({
    default: [new URLSearchParams({ revalidate: '1' })],
    get: () => null
  }),
  usePathname: () => '/'
}))

describe('<Header />', () => {
  it('should render correct', () => {
    render(<Header />)
    expect(screen.getByLabelText('Open Cart')).toBeInTheDocument()
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /capputeeno/i })
    ).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText('Procurando por algo específico?')
    ).toBeInTheDocument()
  })

  it('should hidde TextField when screen is biger than 768px', () => {
    render(<Header />)

    const textfield = screen.getByPlaceholderText(
      'Procurando por algo específico?'
    )
    expect(textfield).toBeInTheDocument()

    // textfield -> label -> wrapper
    expect(textfield.parentElement?.parentElement).toHaveStyleRule(
      'display',
      'block',
      {
        media: '(min-width: 768px)'
      }
    )
  })
})
