import React from 'react'
import Hero from './_components/Hero'
import ProductList from './_components/ProductList'

function Home() {
  return (
    <div>
      <Hero/>
      <div className='p-10 md:px-36 lg:p-48'>
        <ProductList />
      </div>
    </div>
  )
}

export default Home 