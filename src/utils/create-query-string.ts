import { ReadonlyURLSearchParams } from "next/navigation"

type CreateQueryStringParams = {
  name: string
  value: string | number
  searchParams: ReadonlyURLSearchParams
}

const createQueryString = ({ name, value, searchParams }: CreateQueryStringParams) => {
  const params = new URLSearchParams(String(searchParams))

  !!value && params.set(name, String(value))
  !value && params.delete(name)

  return new URLSearchParams(params.toString())
}

export default createQueryString
