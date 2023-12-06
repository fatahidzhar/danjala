"use client"

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export const ServiceComponents = () => {
    return (
        <div className='max-w-screen-xl mx-auto mt-10 px-10'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-3xl font-bold'>
                        Service
                    </h1>
                </div>
                <div>
                    <h2 className='text-xl font-semibold'>
                        Explore All
                    </h2>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-5 mt-7 mb-3 h-64'>
                <div className='bg-slate-950 rounded-xl px-7 py-8 space-y-4'>
                    <span className='font-bold text-slate-400 text-sm'>
                        PLANNING
                    </span>
                    <h5 className='font-bold text-slate-100 text-2xl'>
                        Web Design
                    </h5>
                    <p className='text-xs text-slate-100'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 opacity-10" />
                    <div className="flex justify-between items-end">
                        <div>
                            <span className="font-semibold text-xs text-slate-200">
                                Discount
                            </span>
                            <h5 className="font-bold text-3xl text-slate-100">
                                30%
                            </h5>
                        </div>
                        <div>
                            <Link href="/website" className="flex text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-2.5 py-2.5 me-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='bg-green-400 rounded-xl px-7 py-8 space-y-4'>
                    <span className='font-bold text-green-900 text-sm'>
                        PLANNING
                    </span>
                    <h5 className='font-bold text-slate-950 text-2xl'>
                        Hosting
                    </h5>
                    <p className='text-xs text-slate-900'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <hr className="h-px my-8 bg-green-900 border-0 dark:bg-gray-700 opacity-10" />
                    <div className="flex justify-between items-end">
                        <div>
                            <span className="font-semibold text-xs text-slate-950">
                                Discount
                            </span>
                            <h5 className="font-bold text-3xl text-slate-900">
                                30%
                            </h5>
                        </div>
                        <div>
                            <Link href="#" className="flex text-white bg-gray-900 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2.5 py-2.5 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='bg-fuchsia-400 rounded-xl px-7 py-8 space-y-4'>
                    <span className='font-bold text-fuchsia-900 text-sm'>
                        PLANNING
                    </span>
                    <h5 className='font-bold text-slate-950 text-2xl'>
                        Undangan Digital
                    </h5>
                    <p className='text-xs text-slate-900'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <hr className="h-px my-8 bg-fuchsia-900 border-0 dark:bg-gray-700 opacity-10" />
                    <div className="flex justify-between items-end">
                        <div>
                            <span className="font-semibold text-xs text-slate-950">
                                Discount
                            </span>
                            <h5 className="font-bold text-3xl text-slate-900">
                                30%
                            </h5>
                        </div>
                        <div>
                            <Link href="#" className="flex text-white bg-gray-900 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2.5 py-2.5 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='bg-yellow-200 rounded-xl px-7 py-8 space-y-4'>
                    <span className='font-bold text-yellow-900 text-sm'>
                        PLANNING
                    </span>
                    <h5 className='font-bold text-slate-950 text-2xl'>
                        Optimasi Website
                    </h5>
                    <p className='text-xs text-slate-900'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <hr className="h-px my-8 bg-yellow-900 border-0 dark:bg-gray-700 opacity-10" />
                    <div className="flex justify-between items-end">
                        <div>
                            <span className="font-semibold text-xs text-slate-950">
                                Discount
                            </span>
                            <h5 className="font-bold text-3xl text-slate-900">
                                30%
                            </h5>
                        </div>
                        <div>
                            <Link href="#" className="flex text-white bg-gray-900 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2.5 py-2.5 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceComponents