import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const GetPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizza 01', amount: 20 },
    { product: 'Pizza 02', amount: 30 },
    { product: 'Pizza 03', amount: 15 },
    { product: 'Pizza 04', amount: 40 },
    { product: 'Pizza 05', amount: 18 },
  ])
})
