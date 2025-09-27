import React, { useEffect } from 'react'
import Carousel from '../components/Carousel'
import ProductShowcase from '../components/ProductShowcase'
import Categories from '../components/Categories'
import Brands from '../components/Brands'
import ProductSection from '../components/Product-Section'
import Banars from '../components/banars'
import Customer from '../components/Customer'
 

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <Carousel />
      <Customer/>
      <Categories />
      <Banars/>
      <ProductShowcase />
      <Brands/>
      <ProductSection/>
    </div>
  )
}
