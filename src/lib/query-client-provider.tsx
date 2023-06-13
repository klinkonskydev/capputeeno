'use client'

import React from 'react'
import {
  QueryClientProvider as QueryClientProviderByQuery,
  QueryClient
} from '@tanstack/react-query'

function QueryClientProvider({ children }: React.PropsWithChildren) {
  const [client] = React.useState(new QueryClient())

  return (
    <QueryClientProviderByQuery client={client}>
      {children}
    </QueryClientProviderByQuery>
  )
}

export default QueryClientProvider
