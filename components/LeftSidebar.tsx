import { SidebarLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LeftSidebar = () => {
  return (
    <section className='left_sidebar'>
        <nav className='flex flex-col gap-6'>
            <Link href='/' className='flex cursosr-pointer items-center gap-1 pb-10 max-lg:justify-center'>
              <Image
              src='/icons/logo.svg' 
              alt='logo'
              height={23}
              width={27}
              />
              <h1 className='text-24 font-extrabold text-white max-lg:hidden'>podcaster</h1>
            </Link>
            {SidebarLinks.map(({route, label, imgURL}) =>{
              return <Link href={route} key={label} className='flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start'>
                <Image src={imgURL} alt={label} width={24} height={24}/>
                <p>{label}</p>
              </Link>
            }
          )}
        </nav>
    </section>
  )
}

export default LeftSidebar