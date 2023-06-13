import { render, screen } from '@testing-library/react'

import cardMock from './mock'
import Card from '.'

describe('<Cart />', () => {
  it('should render Card correctly', () => {
    render(<Card {...cardMock} />)

    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      `product/${cardMock.id}`
    )
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: cardMock.name })
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/product price/)).toBeInTheDocument()
  })
})
