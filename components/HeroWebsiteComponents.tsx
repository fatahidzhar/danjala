import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const HeroWebsiteComponents = () => {
  return (
    <div className='max-w-screen-xl mx-auto flex justify-between px-10 pb-16'>
      <div className='w-5/12 space-y-3 self-center'>
        <span className='font-semibold'>
          Build your website
          <hr className="h-px w-9 my-5 bg-gray-200 border rounded-full dark:bg-gray-700" />
        </span>
        <h1 className='text-6xl font-bold'>
          Make your business digital
        </h1>
        <p className='pt-5 pb-3 font-medium text-lg'>
          Our Zero - Interest Overdraft Protection And Financial Coach Bundle Has Your Pack.
        </p>
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <hr className="h-px w-9 my-5 bg-gray-200 border rounded-full dark:bg-gray-700" />
          <Link href="#"
            className="text-white bg-gray-900 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Show Template
          </Link>
        </div>
      </div>
      <div className='self-center'>
        <Image className='mr-16' loading='lazy' src={'http://danjala.test/image/website/vector.png'} width={450} height={450} alt='vector' />
      </div>
    </div>
  )
}

export default HeroWebsiteComponents