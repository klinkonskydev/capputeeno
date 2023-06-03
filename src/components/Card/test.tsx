import { render, screen } from '@testing-library/react'

import cardMock from './mock'
import Card from '.'

describe('<Cart />', () => {
  it('should render Card correctly', () => {
    render(<Card {...cardMock} />)

    expect(screen.getByRole('link')).toHaveAttribute('href', cardMock.slug)
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: cardMock.title })
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/product price/)).toBeInTheDocument()
  })
})
