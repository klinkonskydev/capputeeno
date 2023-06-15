'use client'

import NextNProgress from 'nextjs-progressbar'

import CardListSkeleton from 'components/CardList/skeleton'
import Container from 'components/Container'
import React from 'react'
import HomeTemplate from 'templates/Home'

export default function Loading() {
  return (
    <HomeTemplate>
      <Container>
        <CardListSkeleton />
        <NextNProgress
          color="#FFA585"
          startPosition={0.3}
          stopDelayMs={200}
          height={8}
          showOnShallow={true}
        />
      </Container>
    </HomeTemplate>
  )
}
