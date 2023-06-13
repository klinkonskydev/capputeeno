export type SortFilterItem = {
  title: string
  slug: string | null
  sortKey: 'RELEVANCE' | 'BEST_SELLING' | 'CREATED_AT' | 'PRICE'
  reverse: boolean
}

export const defaultSort: SortFilterItem = {
  title: 'Novidades',
  slug: null,
  sortKey: 'RELEVANCE',
  reverse: false
}

export const sorting: SortFilterItem[] = [
  defaultSort,
  {
    title: 'Preço: Maior - menor',
    slug: 'price-desc',
    sortKey: 'PRICE',
    reverse: true
  },
  {
    title: 'Preço: Menor - maior',
    slug: 'price-asc',
    sortKey: 'PRICE',
    reverse: false
  },
  {
    title: 'Mais vendidos',
    slug: 'trending-desc',
    sortKey: 'BEST_SELLING',
    reverse: false
  }
]
