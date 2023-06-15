import QueryClientProvider from 'lib/query-client-provider'
import { Suspense } from 'react'
import ProductTemplate from 'templates/Product'
import ProductSkeleton from 'templates/Product/skeleton'

type ProductProps = {
  params: {
    id: string
  }
}

export default function Product({ params }: ProductProps) {
  return (
    <QueryClientProvider>
      <Suspense fallback={<ProductSkeleton />}>
        <ProductTemplate id={params?.id} />
      </Suspense>
    </QueryClientProvider>
  )
}
