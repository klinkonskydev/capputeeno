export type SortField = 'price_in_cents' | 'sales'
export type SortOrder = 'ASC' | 'DSC'

export type SortFilterItem = {
  title: string
  sortField?: SortField
  sortOrder?: SortOrder
}

export const defaultSort: SortFilterItem = {
  title: 'Novidades'
}

export const sorting: SortFilterItem[] = [
  defaultSort,
  {
    title: 'Preço: Maior - menor',
    sortField: 'price_in_cents',
    sortOrder: 'DSC'
  },
  {
    title: 'Preço: Menor - maior',
    sortField: 'price_in_cents',
    sortOrder: 'ASC'
  },
  {
    title: 'Mais vendidos',
    sortField: 'sales'
  }
]
