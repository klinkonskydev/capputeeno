import { SortField, SortOrder } from 'lib/constants'

type CreateGraphqlParamsByUrlParams = {
  page: number
  perPage: number
  category: 't-shirts' | 'mugs'
  sortField: SortField
  sortOrder: SortOrder
  q: string
}

export const creteGraphqlParamsByUrl = ({
  page = 1,
  perPage = 12,
  sortField,
  sortOrder,
  ...params
}: Partial<CreateGraphqlParamsByUrlParams>) => {
  return {
    page: Number(page - 1),
    perPage: Number(perPage),
    sortField,
    sortOrder,
    filter: {
      ...params
    }
  }
}
