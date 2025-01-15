'use client'
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import Products from '../_mockData/Products'
import ProductCartItem from './ProductCartItem'

function ProductList() {
    const [productList, setProductList] = useState([])


    useEffect(() => {
    setProductList(Products)
    }, [])
    

  return (
    <div>
    <h2 className='font-bold text-xl flex justify-between items-center'>Featured
    <span><Button>View All</Button></span>
    </h2>
<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
    {productList.map((product, index)=>(
        <ProductCartItem product={product} key={index}/>
    ))}
</div>
   </div>
  )
}

export default ProductList