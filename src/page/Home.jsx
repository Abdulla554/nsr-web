import React from 'react'
import Carousel from '../components/Carousel'
import ProductShowcase from '../components/ProductShowcase'
import Categories from '../components/Categories'
import Brands from '../components/Brands'
import ProductSection from '../components/Product-Section'
import Banars from '../components/banars'
 

export default function Home() {
  return (
    <div className="min-h-screen">
      <Carousel />
      <Categories />
      <Banars/>
      <ProductShowcase />
      <Brands/>
      <ProductSection/>
    </div>
  )
}
