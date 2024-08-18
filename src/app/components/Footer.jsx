import React from 'react'

export default function Footer() {
  return (
   <footer className='flex justify-around capitalize items-center h-16 bg-slate-950 text-white text-lg'>
    <p className='hover:text-amber-600'>&copy; univel {(new Date('01-01-2015').getFullYear())} - {(new Date().getFullYear())}</p>
   </footer>
  )
}
