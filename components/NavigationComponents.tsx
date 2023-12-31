"use client"

import Link from 'next/link'
import DrawerComponents from './DrawerComponents'
import { useSession } from "next-auth/react"
import React from "react"
export const NavigationComponents = () => {

    const { data: session } = useSession();
    console.log({ session })
    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl py-4 px-10">
                    <Link
                        href="https://flowbite.com"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            DanJala
                        </span>
                    </Link>
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Link
                            href="/login"
                            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        >
                            Log In
                        </Link>
                        <Link href=""
                            className="text-white bg-gray-900 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                        >
                            Get Started
                        </Link>
                        <DrawerComponents />
                    </div>
                </div>
            </nav>
        </>

    )
}

export default NavigationComponents