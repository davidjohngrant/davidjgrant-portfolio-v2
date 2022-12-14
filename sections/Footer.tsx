import Link from 'next/link'
import React from 'react'
import Clock from '../components/clock'
import Nav from '../components/nav'
import Socials from '../components/socials'

const Footer = () => {

  const currentYear = new Date().getFullYear()

  return (
    <>
      <div className='bg-gradient-to-r from-amber-500 to-pink-600 h-4'></div>
      <footer className='bg-gray-200 text-zinc-900 dark:bg-black dark:text-gray-100'>
        <div className="container flex flex-col h-72 sm:h-64 justify-center items-center mx-auto relative overflow-hidden">
          <div className='flex flex-col justify-center items-center sm:flex-row sm:justify-around w-full mb-0 sm:mb-10 font-medium'>
            <Nav isFooter={true} />
            <div className='flex flex-col justify-center items-center order-2 my-6'>
              <Clock />
              <p>Bristol, UK</p>
            </div>
            <div className="flex flex-col justify-center items-start order-1 sm:order-3">
              <h5 className='mb-4 hidden sm:block'>Follow me on social media</h5>
              <Socials />
            </div>
          </div>
          <span className='absolute select-none -bottom-1 sm:-bottom-2 font-bold text-gray-400 dark:text-zinc-900 opacity-20 whitespace-nowrap text-4xl sm:text-6xl md:text-8xl tracking-wider'>©{currentYear} DAVIDJGRANT</span>
        </div>
      </footer>
    </>
  )
}

export default Footer