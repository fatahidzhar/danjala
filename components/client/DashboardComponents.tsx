"use client"

import React, { ReactNode } from 'react'
import SidebarComponents from "../SidebarComponents";
import NavBarComponents from "../NavBarComponents";

interface Props {
    children: ReactNode;
}

const DashboardComponent = ({ children }: Props) => {
    return (
        <div className='bg-gray-100'>
            <nav className='fixed top-0 z-50 w-full'>
                <NavBarComponents />
            </nav>
            <aside className='fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700'>
                <SidebarComponents />
            </aside>
            <div className='p-4 sm:ml-64'>
                {children}
            </div>
        </div>
    )
}
export default DashboardComponent