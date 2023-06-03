import { render, screen } from '@testing-library/react'
import { SortFilterItem as SortFilterItemParams } from 'lib/constants'
import SortFilterItem from '.'

const item: SortFilterItemParams = {
  title: 'link 1',
  slug: '1',
  reverse: false,
  sortKey: 'RELEVANCE'
}

describe('<FilterBy />', () => {
  it.skip('should render correct', () => {
    render(<SortFilterItem item={item} />)

    expect(screen.queryByRole('link', { name: /link 1/i })).toBeInTheDocument()
  })
})
