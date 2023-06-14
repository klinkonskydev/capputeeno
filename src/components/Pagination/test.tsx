import { render, screen } from '@testing-library/react'

import Pagination from '.'

jest.mock('next/navigation', () => ({
  ...require('next-router-mock'),
  useSearchParams: () => ({
    default: [new URLSearchParams({ revalidate: '1' })],
    get: () => null
  }),
  usePathname: () => '/'
}));


describe('<Pagination />', () => {
  it('should render the buttons correctly', () => {
    // default numberOfProductPerPage is 12
    render(<Pagination totalProduct={24} />)
    expect(screen.getAllByRole('button')).toHaveLength(2)
  })
})
