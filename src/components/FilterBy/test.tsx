import { fireEvent, render, screen } from '@testing-library/react'
import { SortFilterItem } from 'lib/constants'
import FilterBy from '.'

const items: SortFilterItem[] = [
  { title: 'link 1', slug: '1', reverse: false, sortKey: 'RELEVANCE' },
  { title: 'link 2', slug: '2', reverse: false, sortKey: 'PRICE' },
  { title: 'link 3', slug: '3', reverse: false, sortKey: 'CREATED_AT' },
  { title: 'link 4', slug: '4', reverse: false, sortKey: 'BEST_SELLING' }
]

jest.mock('./FilterBySlug', () => ({
  __esModule: true,
  sorting: items
}))

jest.mock('./FilterBySlug', () => ({
  __esModule: true,
  default: ({ title, slug }: SortFilterItem) => (
    <div>
      <a href={slug ?? ''}>{title}</a>
    </div>
  )
}))

describe('<FilterBy />', () => {
  it('should render correct', () => {
    render(<FilterBy />)

    expect(
      screen.getByRole('button', { name: /filtrar por/i })
    ).toBeInTheDocument()
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  it('should show links', () => {
    render(<FilterBy />)

    const filterByButton = screen.getByRole('button', { name: /filtrar por/i })

    expect(filterByButton).toBeInTheDocument()
    fireEvent(
      filterByButton,
      new MouseEvent('mousedown', {
        bubbles: true,
        cancelable: true
      })
    )

    expect(screen.getAllByRole('link')).toHaveLength(items.length)
  })
})
