import CardList from 'components/CardList'
import { defaultSort, sorting } from 'lib/constants'
import { getProducts } from 'lib/graphql'
import HomeTemplate from 'templates/Home'

type HomeProps = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

export default async function Home({ searchParams }: HomeProps) {
  const { sort, q: searchValue } = searchParams as { [key: string]: string }
  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort

  const products = await getProducts({ sortKey, reverse, query: searchValue })
  const resultsText = products.length > 1 ? 'results' : 'result'
  console.log(resultsText)

  return (
    <HomeTemplate>
      <CardList products={products} />
    </HomeTemplate>
  )
}
