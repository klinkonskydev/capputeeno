'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CardList from 'components/CardList'
import Container from 'components/Container'
import HomeTemplate from 'templates/Home'

export default function Home() {
  const client = new QueryClient()

  return (
    <QueryClientProvider client={client}>
      <HomeTemplate>
        <Container>
          <CardList />
        </Container>
      </HomeTemplate>
    </QueryClientProvider>
  )
}
