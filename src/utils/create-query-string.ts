import { SortOrder } from 'lib/constants'
import { ReadonlyURLSearchParams } from 'next/navigation'

type CreateQueryStringParams = {
  name: string
  value: string | number
  searchParams: ReadonlyURLSearchParams
  order?: SortOrder
  deleteOrder?: boolean
}

const createQueryString = ({
  name,
  value,
  searchParams,
  order,
  deleteOrder
}: CreateQueryStringParams) => {
  const params = new URLSearchParams(String(searchParams))
  !!value && params.set(name, String(value))
  !value && params.delete(name)

  if (typeof order !== 'undefined') {
    params.set('sortOrder', order)
  }

  if (deleteOrder) {
    params.delete('sortOrder')
  }

  return new URLSearchParams(params.toString())
}

export default createQueryString
