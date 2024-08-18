import React from 'react'
import Image from 'next/Image'


export default function Home() {
  return (
    // <div className='bg-amber-600 h-screen text-white flex flex-row justify-center items-center text-6xl'>
  <div className='bg-amber-600'>
      
    
          <h1 className='py-4'>Welcome to SmartVille Estates</h1>
          <h2 className='my-2'>Your Trusted Partner in Real Estate Management</h2>
        <div className='flex justify-around gap-4'>
          <Image src={'/sky.jpg'} alt={'Tall building'} width={'600'} height={'600'} />
          <Image src={'https://images.pexels.com/photos/7447654/pexels-photo-7447654.jpeg'} alt={'Skycrapper'} width={'400'} height={'400'}/>
        </div>

          <p className='py-8'>At SmartVille Estate, we specialize in providing top-notch real estate management services that are tailored to meet the unique needs of our clients. Whether you own residential properties, commercial spaces, or investment properties, our experienced team is dedicated to ensuring that your assets are well-managed and your tenants are satisfied.</p>
    
  </div>
  )
}
