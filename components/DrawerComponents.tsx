"use client"

import Link from "next/link";
import { useRef, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { FaArrowRightLong } from "react-icons/fa6";

export const DrawerComponents = () => {
    const drawer = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const menu = () => setIsActive(!isActive)
    return (
        <>
            <div className="text-center">
                <button
                    className="focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-2.5 py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                    type="button"
                    onClick={menu}
                    data-drawer-target="drawer-right-example"
                    data-drawer-show="drawer-right-example"
                    data-drawer-placement="right"
                    aria-controls="drawer-right-example"
                >
                    <HiMenuAlt4 size="30" />
                </button>
            </div>
            <div
                ref={drawer}
                id="drawer-right-example"
                className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${isActive ? '' : 'translate-x-full'} backdrop-blur-md bg-white/30 w-80 dark:bg-gray-800`}
                tabIndex={-1}
                aria-labelledby="drawer-right-label"
            >
                <h5
                    id="drawer-right-label"
                    className="inline-flex items-center mb-6 text-base font-semibold text-gray-500 dark:text-gray-400"
                >
                </h5>
                <button
                    type="button"
                    onClick={menu}
                    data-drawer-hide="drawer-right-example"
                    aria-controls="drawer-right-example"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                    <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>
                <div>
                    <ul className="space-y-2 font-semibold text-2xl">
                        <li className="p-3 hover:translate-x-3 hover:text-gray-800 transition delay-75 duration-300 ease-in-out">
                            <Link href="#">
                                Customer
                            </Link>
                        </li>
                        <li className="p-3 hover:translate-x-3 hover:text-gray-800 transition delay-75 duration-300 ease-in-out">
                            <Link href="#">
                                Layanan
                            </Link>
                        </li>
                        <li className="p-3 hover:translate-x-3 hover:text-gray-800 transition delay-75 duration-300 ease-in-out">
                            <Link href="#">
                                Blog
                            </Link>
                        </li>
                        <li className="p-3 hover:translate-x-3 hover:text-gray-800 transition delay-75 duration-300 ease-in-out">
                            <Link href="#">
                                About Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default DrawerComponents