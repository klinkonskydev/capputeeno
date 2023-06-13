import { render, screen } from '@testing-library/react'
import CartIcon from '.'

describe('<CartIcon />', () => {
  it('Should render correct', () => {
    const items = 0
    render(<CartIcon items={items} />)

    expect(
      screen.getByRole('button', { name: /Open Cart/i })
    ).toBeInTheDocument()
    expect(screen.queryByText(items)).not.toBeInTheDocument()
    expect(screen.queryByLabelText(/items in cart/i)).not.toBeInTheDocument()
  })

  it('should render counter if has more than 1 item in cart', () => {
    const items = 1
    render(<CartIcon items={items} />)

    expect(
      screen.getByRole('button', { name: /Open Cart/i })
    ).toBeInTheDocument()
    expect(screen.getByText(items)).toBeInTheDocument()
    expect(screen.getByLabelText(/items in cart/i)).toBeInTheDocument()
  })
})
