type CreateGraphqlParamsByUrlParams = {
  page?: number
  perPage?: number
  params?: {
    category?: 't-shirts' | 'mugs'
    q?: string
  }
}

export const creteGraphqlParamsByUrl = ({
  page = 0,
  perPage = 12,
  params
}: CreateGraphqlParamsByUrlParams) => {
  return {
    page,
    perPage,
    filter: {
      ...params
    }
  }
}
