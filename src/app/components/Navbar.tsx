"use client"
import { NavItems } from '@/assets/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar: React.FC = () => {
    const pathname = usePathname();
    const path = '/' + pathname.split('/')[1]; 
    return (
        <div className='w-full h-20 bg-navBg shadow-lg fixed top-0 z-50'>
            <div className=' max-w-[1280px] mx-auto h-full flex items-center justify-between text-white opacity-85 xl:px-8'>
                <Link href={'/'} className='text-lg font-semibold text-white capitalize cursor-pointer'>Stegenography</Link>
                <div className=''>
                    {
                        NavItems.map(item => (
                            <Link
                                href={item.path}
                                key={item.name}
                                className={`text-lg  font-medium capitalize cursor-pointer  px-4 py-2.5 ${path == item.path && "bg-violet-500 text-white opacity-100 rounded"}`}
                            >
                                {item.name}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar
