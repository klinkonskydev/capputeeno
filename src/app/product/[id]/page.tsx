import QueryClientProvider from 'lib/query-client-provider'
import ProductTemplate from 'templates/Product'

type ProductProps = {
  params: {
    id: string
  }
}

export default function Product({ params }: ProductProps) {
  return (
    <QueryClientProvider>
      <ProductTemplate id={params?.id} />
    </QueryClientProvider>
  )
}
