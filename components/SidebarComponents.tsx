"use client"

import { TbSmartHome } from "react-icons/tb";
import { GrGroup } from "react-icons/gr"
import { CgCollage } from "react-icons/cg";
import { LuTrendingUp } from "react-icons/lu";
import { TbSettings2 } from "react-icons/tb";
import { FiMinusCircle } from "react-icons/fi";
import { useRouter } from "next/navigation"
import Link from "next/link";

const SidebarComponents = () => {
    const router = useRouter();
    return (
        <div className="flex flex-col justify-between h-full">
            <ul className="space-y-7 font-medium text-gray-700 ml-6">
                <li>
                    <Link href={'/home'} className="inline-flex items-center gap-2.5">
                        <TbSmartHome className="text-xl" />
                        Home
                    </Link>
                </li>
                <li>
                    <Link href={'/template'} className="inline-flex items-center gap-2.5">
                        <CgCollage className="text-xl" />
                        Template
                    </Link>
                </li>
                <li>
                    <Link href="#" className="inline-flex items-center gap-2.5">
                        <GrGroup className="text-xl" />
                        Subscriptions
                    </Link>
                </li>
                <li>
                    <Link href="#" className="inline-flex items-center gap-2.5">
                        <LuTrendingUp className="text-xl" />
                        Statistics
                    </Link>
                </li>
            </ul>
            <ul className="space-y-7 font-medium text-gray-700 mb-8 ml-6">
                <li>
                    <Link href="#" className="inline-flex items-center gap-2.5">
                        <TbSettings2 className="text-xl" />
                        Settings
                    </Link>
                </li>
                <li>
                    <Link href="#" className="inline-flex items-center gap-2.5">
                        <FiMinusCircle className="text-xl" />
                        Log Out
                    </Link>
                </li>
            </ul>
        </div>

    )
}

export default SidebarComponents