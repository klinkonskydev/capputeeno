export type ProductFilter = {
  q?: string
  category?: 't-shirts' | 'mugs'
}

export type FilterParams = {
  page: number
  perPage: number
  order?: string
  filter?: ProductFilter
}

export type Product = {
  id: string
  name: string
  description?: string
  image_url: string
  price_in_cents: number
}

export type AllProductsMeta = {
  count: number
}

export type ProductsResponse = {
  data: {
    allProducts: Product[]
    _allProductsMeta: AllProductsMeta
  }
}

export type ProductResponse = {
  data: {
    Product: Product
  }
}
