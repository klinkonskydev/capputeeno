type CreateGraphqlParamsByUrlParams = {
  page?: number
  perPage?: number
  category?: 't-shirts' | 'mugs'
  q?: string
}

export const creteGraphqlParamsByUrl = ({
  page = 1,
  perPage = 12,
  ...params
}: CreateGraphqlParamsByUrlParams) => {
  return {
    page: Number(page - 1),
    perPage: Number(perPage),
    filter: {
      ...params
    }
  }
}
