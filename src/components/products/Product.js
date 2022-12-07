import React from 'react'
import { useGetAllProductsQuery } from './slices/productApi'

export default function Product() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  return (
    <div>
      <h1>Product</h1>
      </div>
  )
}
