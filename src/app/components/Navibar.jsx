import Link from 'next/link'
import React from 'react'

export default function Navibar() {
  return (
    <nav>
        <ul className='flex justify-around capitalize items-center h-12 bg-slate-950 text-white text-lg'>
            <Link href={'/'}> 
                <li>home</li>
            </Link>
            <Link href={'/about'}> 
                <li>about</li>
            </Link>
            <Link href={'/products'}> 
                <li>products</li>
            </Link>
            <Link href={'/contact'}> 
                <li>contact</li>
            </Link>
            <Link href={'/help'}> 
                <li>support</li>
            </Link>
        </ul>
    </nav>
    
  )
}
