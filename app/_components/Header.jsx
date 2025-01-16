import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Header() {
   const menuList = [
     { name: 'Home', path: '/' },
     { name: 'Store', path: '/store' },
     { name: 'Explore', path: '/explore' },

   ]
  return (
    <div className='flex p-4 px-10 border-b-2 border-color-2 justify-between items-center'>
      <h2 className='font-bold text-lg bg-black text-white px-2 p-1'>DIGITAL STORE</h2>
      

      <ul className='flex gap-5'>
        {menuList.map((menu, index) =>(
          <li key={index} className='px-2 p-1 hover:border-2 cursor-pointer'>{menu?.name}</li>
        ))}
        
      </ul>
      <div className='flex gap-5 items-center'>
        <ShoppingBag/>
        <Link href='/dashboard'>
        <Button className='bg-red-400 hover:bg-red-500'>Start Selling</Button>
        </Link>
        <UserButton />
      </div>
    </div>
  )
}

export default Header