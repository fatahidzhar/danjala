"use client"

import { HiOutlineMailOpen } from "react-icons/hi";
import { MdOutlinePassword } from "react-icons/md";
import { TbCircleArrowRightFilled } from "react-icons/tb";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { CgRename } from "react-icons/cg";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod"
import { z, ZodType } from "zod"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import ToastAlertComponents from "../ToastAlertComponents";
import LoadingComponents from "../LoadingComponents";

type TSignUpForm = {
    first_name: string
    last_name: string
    email: string
    password: string
    password_confirmation: string
}

const schema: ZodType<TSignUpForm> = z
    .object({
        first_name: z
            .string().min(5, { message: "First Name is required min 5" }),
        last_name: z
            .string().min(5, { message: "Last Name is required min 5" }),
        email: z
            .string().email({
                message: "Must be a valid email",
            }),
        password: z
            .string()
            .min(8, { message: "Password must be at least 8 characters long" })
            .regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/, {
                message:
                    "Password must contain at least one number and one special character",
            }),
        password_confirmation: z.string(),
    })

    .refine((data) => data.password === data.password_confirmation, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    })

const SignUpComponents = () => {
    const [loading, setLoading] = useState(false)
    const [toast, setToast] = useState(false)
    const [err, setErr] = useState(false)
    const message =
        toast && !err
            ? "Your registration was successful."
            : "An error occurred while processing your request."

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<TSignUpForm>({
        resolver: zodResolver(schema),
    })

    const handleFormSubmit = async (data: TSignUpForm) => {
        setLoading(true)
        await axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/signup`, data)
            .then(() => {
                router.push('/login')
            })
            .catch((error) => {
                setErr(error.response.data)
            })
        setLoading(false)
        reset()
    }

    useEffect(() => {
        if (setToast) {
            const timer = setTimeout(() => {
                setToast(false)
                setErr(false)
            }, 5000)
            return () => {
                clearTimeout(timer)
            }
        }
    }, [toast])

    const router = useRouter()

    return (

        <>
            {/* {toast && (
                <div
                    className={`flex justify-between py-4 px-8 ${err
                        ? "bg-[#fad2e1]  text-[#7c193d]"
                        : "bg-[#98f5e1]  text-[#236c5b"
                        }]`}
                >
                    <p className="font-sans">{message}</p>
                    <button className="font-bold">&#10005;</button>
                </div>
            )} */}
            <div
                id="toast-top-right"
                className="fixed flex items-center flex-col w-full max-w-xs top-5 right-5 z-50"
                role="alert">
                {errors.first_name ? (
                    <>
                        <ToastAlertComponents>
                            {errors.first_name?.message}
                        </ToastAlertComponents>
                    </>
                ) : null}

                {errors.last_name ? (
                    <>
                        <ToastAlertComponents>
                            {errors.last_name?.message}
                        </ToastAlertComponents>
                    </>
                ) : null}

                {errors.email ? (
                    <>
                        <ToastAlertComponents>
                            {errors.email?.message}
                        </ToastAlertComponents>
                    </>
                ) : null}

                {errors.password ? (
                    <>
                        <ToastAlertComponents>
                            {errors.password?.message}
                        </ToastAlertComponents>
                    </>
                ) : null}

                {errors.password_confirmation ? (
                    <>
                        <ToastAlertComponents>
                            {errors.password_confirmation?.message}
                        </ToastAlertComponents>
                    </>
                ) : null}

            </div>
            <div className='h-screen flex md:flex-nowrap flex-wrap justify-center'>
                <div className="bacground-login bg-cover bg-repeat z-10 w-full grid items-end md:items-center justify-center md:justify-end">
                    <div className='backdrop-blur-xl bg-white/10 w-96 rounded md:rounded-l-3xl md:rounded-tr-none md:rounded-br-none rounded-t-3xl grid px-10 py-10'>
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
                                <button onClick={() => router.back()} type="button" className="text-gray-100 border border-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                    <FaArrowLeftLong />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-gray-100 w-full grid items-center justify-start'>
                    <div className='bg-gray-50 shadow-xl w-96 rounded-r-3xl grid items-center px-10 py-4'>
                        <div>
                            <div className="w-full mb-5 inline-flex justify-end items-center gap-2">
                                <span className="text-xs">
                                    Already have an account?
                                </span>
                                <Link
                                    href="/login"
                                    className="px-3 py-2 text-xs font-medium text-center text-blue-800 bg-blue-100 rounded-full hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-600"
                                >
                                    Log In
                                </Link>

                            </div>
                            <div>
                                <button
                                    type="button"
                                    className="w-full inline-flex items-center justify-between text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                >
                                    Log In with Google
                                    <FcGoogle />
                                </button>
                            </div>
                            <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
                            <form onSubmit={handleSubmit(handleFormSubmit)}>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="relative mb-3">
                                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                            <CgRename className={`text-gray-500 dark:text-gray-400 ${errors.first_name ? "text-red-500 dark:text-red-400" : null}`} />
                                        </div>
                                        <input
                                            type="text"
                                            id="first_name"
                                            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.first_name ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-full focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500" : null}`}
                                            placeholder="First Name"
                                            {...register("first_name")}
                                        />
                                    </div>
                                    <div className="relative mb-3">
                                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                            <CgRename className={`text-gray-500 dark:text-gray-400 ${errors.last_name ? "text-red-500 dark:text-red-400" : null}`} />
                                        </div>
                                        <input
                                            type="text"
                                            id="last_name"
                                            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.last_name ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-full focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500" : null}`}
                                            placeholder="Last Name"
                                            {...register("last_name")}
                                        />
                                    </div>
                                </div>

                                <div className="relative mb-3">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <HiOutlineMailOpen className={`text-gray-500 dark:text-gray-400 ${errors.email ? "text-red-500 dark:text-red-400" : null}`} />
                                    </div>
                                    <input
                                        type="email"
                                        id="email"
                                        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.email ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-full focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500" : null}`}
                                        placeholder="name@danjala.com"
                                        {...register("email")}
                                    />
                                </div>
                                <div className="relative mb-3">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <MdOutlinePassword className={`text-gray-500 dark:text-gray-400 ${errors.password ? "text-red-500 dark:text-red-400" : null}`} />
                                    </div>
                                    <input
                                        type="password"
                                        id="password" autoComplete="off"
                                        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.password ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-full focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500" : null}`}
                                        placeholder="********"
                                        {...register("password")}
                                    />
                                </div>
                                <div className="relative mb-5">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <MdOutlinePassword className={`text-gray-500 dark:text-gray-400 ${errors.password_confirmation ? "text-red-500 dark:text-red-400" : null}`} />
                                    </div>
                                    <input
                                        type="password"
                                        id="password_confirmation" autoComplete="off"
                                        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.password_confirmation ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-full focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500" : null}`}
                                        placeholder="********"
                                        {...register("password_confirmation")}
                                    />
                                </div>
                                {!loading ? (
                                    <button className="text-white inline-flex justify-between items-center w-full bg-gray-900 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                        Sign Up<TbCircleArrowRightFilled className="text-lg" />
                                    </button>
                                ) : (
                                    <button disabled className="text-white inline-flex justify-between items-center w-full bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                        Loading...<LoadingComponents />
                                    </button>
                                )}
                            </form>
                            <div className="mt-4 inline-flex justify-between items-center py-4 px-5">
                                {/* <div>
                                <p className="text-sm font-semibold">
                                    Make your idea a reality.
                                </p>
                                <Link href="#" className="text-xs font-semibold text-sky-800">
                                    Click here to try
                                </Link>
                            </div>
                            <div>
                                <FcIdea className="text-3xl animate-bounce" />
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ >
    )
}

export { SignUpComponents }