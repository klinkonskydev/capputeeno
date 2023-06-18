'use client'

import React from 'react'
import HomeTemplate from 'templates/Home'

export default function Loading() {
  return <HomeTemplate totalProducts={0} products={[]} isLoading={true} />
}
