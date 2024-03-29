import 'styles/globals.css'
import { Saira } from 'next/font/google'

import Header from 'components/Header'
import StyledComponentsRegistry from 'lib/styled-components-registery'
import QueryClientProvider from 'lib/query-client-provider'

const saira = Saira({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <QueryClientProvider>
          <StyledComponentsRegistry>
            <Header />
            {children}
          </StyledComponentsRegistry>
        </QueryClientProvider>
      </body>
    </html>
  )
}
