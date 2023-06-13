import { ReadonlyURLSearchParams } from 'next/navigation'

type CreateUrlParams = {
  pathname: string
  params?: URLSearchParams | ReadonlyURLSearchParams
}

export const createUrl = ({ params, pathname }: CreateUrlParams) => {
  const paramsString = params ? params.toString() : ''
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`

  return `${pathname}${queryString}`
}
