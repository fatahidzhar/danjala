import { FaPager } from "react-icons/fa6";
import { FaRegIdBadge } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import React from 'react'

const ServiceWebsiteComponents = () => {
    return (
        <div className='bg-gray-100 mx-auto max-w-screen-xl px-10 pt-10 pb-10 border-y'>
            <div className='grid grid-cols-4 gap-5'>
                <div className='rounded-xl bg-white px-7 py-8 space-y-4 border'>
                    <div className="border p-3 inline-block rounded-md">
                        <FaPager className="text-4xl" />
                    </div>
                    <h5 className='font-bold text-xl'>
                        Custom Website
                    </h5>
                    <p className="text-sm">
                        Pemilihan atau pembuatan tema atau template sesuai dengan kebutuhan dan gaya yang diinginkan.
                    </p>
                </div>
                <div className='rounded-xl bg-white px-7 py-8 space-y-4 border'>
                    <div className="border p-3 inline-block rounded-md">
                        <FaRegIdBadge className="text-4xl" />
                    </div>
                    <h5 className='font-bold text-xl'>
                        Responsive Design
                    </h5>
                    <p className="text-sm">
                        Pengembangan desain yang responsif agar website dapat diakses dengan baik di berbagai perangkat.
                    </p>
                </div>
                <div className='rounded-xl bg-white px-7 py-8 space-y-4 border'>
                    <div className="border p-3 inline-block rounded-md">
                        <FaUsers className="text-4xl" />
                    </div>
                    <h5 className='font-bold text-xl'>
                        Optimisasi SEO
                    </h5>
                    <p className="text-sm">
                        Penerapan praktik SEO untuk meningkatkan peringkat website di mesin pencari.
                    </p>
                </div>
                <div className='rounded-xl bg-white px-7 py-8 space-y-4 border'>
                    <div className="border p-3 inline-block rounded-md">
                        <FaUserGroup className="text-4xl" />
                    </div>
                    <h5 className='font-bold text-xl'>
                        Pelatihan Pengguna
                    </h5>
                    <p className="text-sm">
                        Pelatihan bagi pengguna yang akan mengelola atau memperbarui konten website.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ServiceWebsiteComponents