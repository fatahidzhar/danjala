"use client"

import React, { useState } from 'react'
import { IoCloseCircle } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const ToastAlertComponents = ({ children, }: { children: React.ReactNode }) => {
    const [isActive, setIsActive] = useState(false);
    const close = () => setIsActive(!isActive)
    return (
        <>
            <div className={`${isActive ? 'hidden' : ' w-full max-w-xs'}`}>
                <div
                    id="toast-danger"
                    className="flex items-center p-4 mb-2 text-gray-500 bg-white rounded-lg shadow-lg dark:text-gray-400 dark:bg-gray-800"
                    role="alert"
                >
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
                        <IoCloseCircle className="text-xl" />
                        <span className="sr-only">Error icon</span>
                    </div>
                    <div className="ms-3 text-sm font-normal">
                        {children}
                    </div>
                    <button
                        type="button"
                        onClick={close}
                        className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                        data-dismiss-target="#toast-danger"
                        aria-label="Close"
                    >
                        <span className="sr-only">Close</span>
                        <IoClose className="text-xl" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default ToastAlertComponents