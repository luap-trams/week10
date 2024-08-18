import Link from 'next/link'
import React from 'react'

export default function Navibar() {
  return (
    <nav>
        <ul className='flex justify-around uppercase items-center h-16 bg-slate-950 text-white text-lg'>
            <Link href={'/'}> 
                <li className='hover:text-amber-600'>home</li>
            </Link>
            <Link href={'/about'}> 
                <li className='hover:text-amber-600'>about</li>
            </Link>
            <Link href={'/products'}> 
                <li className='hover:text-amber-600'>products</li>
            </Link>
            <Link href={'/contact'}> 
                <li className='bg-amber-600 h-8 w-28 px-3 rounded-full hover:text-black'>contact</li>
            </Link>
            <Link href={'/help'}> 
                <li className='hover:text-amber-600'>support</li>
            </Link>
        </ul>
    </nav>
    
  )
}
