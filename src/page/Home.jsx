import React from 'react'
import Carousel from '../components/Carousel'
import ProductShowcase from '../components/ProductShowcase'
import Categories from '../components/Categories'
import Brands from '../components/Brands'
import Products from './Products'
import ProductSection from '../components/Product-Section'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Carousel />
      <Categories />
      <ProductShowcase />
      <Brands/>
      <ProductSection/>
    </div>
  )
}
