export type Product = {
  id: string
  name: string
  image_url: string
  price_in_cents: number
}

export type Products = {
  data: {
    allProducts: Product[]
  }
}
