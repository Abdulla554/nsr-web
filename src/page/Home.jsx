import React from 'react'
import Carousel from '../components/Carousel'
import ProductShowcase from '../components/ProductShowcase'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Carousel />
      <ProductShowcase />
    </div>
  )
}
