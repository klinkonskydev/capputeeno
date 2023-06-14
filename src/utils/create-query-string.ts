import { ReadonlyURLSearchParams } from "next/navigation"

type CreateQueryStringParams = {
  name: string
  value: string | number
  searchParams: ReadonlyURLSearchParams
}

const createQueryString = ({ name, value, searchParams }: CreateQueryStringParams) => {
  const params = new URLSearchParams(String(searchParams))
  params.set(name, String(value))

  return params.toString()
}

export default createQueryString
