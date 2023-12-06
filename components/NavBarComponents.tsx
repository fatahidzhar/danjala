"use client"

import React from 'react'
import { useSession } from "next-auth/react"
import { Image } from 'next/dist/client/image-component'
import Link from 'next/link'

const NavBarComponents = () => {
    const { data: session } = useSession();
    console.log({ session })

    return (
        <div className='space-x-3'>
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div>
                        <Link href="#" className="flex ms-2 md:me-24 text-xl font-bold ml-4">
                           DanJala
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center ms-3">
                            <Image
                                className="w-8 h-8 rounded-full"
                                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                alt="user photo"
                                width={35} height={35}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBarComponents