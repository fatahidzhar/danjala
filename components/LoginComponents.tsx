"use client"
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdOutlinePassword } from "react-icons/md";
import { TbCircleArrowRightFilled } from "react-icons/tb";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FcIdea } from "react-icons/fc";
import Image from "next/image";
import Link from "next/link";

const LoginComponents = () => {
    return (
        <div className='h-screen flex md:flex-nowrap flex-wrap justify-center'>
            <div className="bacground-login bg-cover bg-no-repeat z-10 w-full grid items-end md:items-center justify-center md:justify-end">
                <div className='backdrop-blur-xl bg-white/10 h-4/5 w-96 rounded md:rounded-l-3xl md:rounded-tr-none md:rounded-br-none rounded-t-3xl grid px-10 py-10'>
                    <div className="space-y-4">
                        <span className="text-slate-50 text-2xl font-bold">
                            DanJala
                        </span>
                        <p className="text-slate-50 text-lg">
                            all require a network of ideas and technological inspiration.
                        </p>
                        <div className="h-60">
                            <Image className="rounded-3xl" src={`https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`} alt="Product" width={900}
                                height={500} loading="lazy" />
                        </div>
                        <div>
                            <button className="text-gray-100 border border-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                <FaArrowLeftLong />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-gray-100 w-full grid items-center justify-start'>
                <div className='bg-gray-50 shadow-xl h-4/5 w-96 rounded-r-3xl grid items-center px-10'>
                    <div>
                        <div className="w-full mb-5 inline-flex justify-end items-center gap-2">
                            <span className="text-xs">
                                Don{"'"}t have an account yet?
                            </span>
                            <button
                                type="button"
                                className="px-3 py-2 text-xs font-medium text-center text-blue-800 bg-blue-100 rounded-full hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-600"
                            >
                                Sign Up
                            </button>

                        </div>
                        <div>
                            <button
                                type="button"
                                className="w-full inline-flex items-center justify-between text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            >
                                Sign In with Google
                                <FcGoogle />
                            </button>
                        </div>
                        <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
                        <div className="relative mb-3">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <HiOutlineMailOpen className="text-gray-500 dark:text-gray-400" />
                            </div>
                            <input
                                type="text"
                                id="input-group-1"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@danjala.com"
                            />
                        </div>
                        <div className="relative mb-5">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <MdOutlinePassword className="text-gray-500 dark:text-gray-400" />
                            </div>
                            <input
                                type="password"
                                id="input-group-1"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="********"
                            />
                        </div>
                        <button type="button" className="text-white inline-flex justify-between items-center w-full bg-gray-900 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                            Sign In with Email <TbCircleArrowRightFilled className="text-lg" />
                        </button>
                        <div className="w-full bg-sky-50 mt-8 rounded-2xl inline-flex justify-between items-center py-4 px-5 space-x-3">
                            <div>
                                <p className="text-sm font-semibold">
                                    Make your idea a reality.
                                </p>
                                <Link href="#" className="text-xs font-semibold text-sky-800">
                                    Click here to try
                                </Link>
                            </div>
                            <div>
                                <FcIdea className="text-3xl animate-bounce" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginComponents