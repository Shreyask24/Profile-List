import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='w-full bg-[#5f5f5f55] text-white h-[10vh] items-center flex justify-center'>
                <Link to="/" className="font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:text-slate-300 dark:hover:bg-gray-500 me-2 mb-2 hover:cursor-pointer text-white">Home</Link>

                <Link to="/admin" className="font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:text-slate-300 dark:hover:bg-gray-500 me-2 mb-2 hover:cursor-pointer text-white">Admin</Link>
            </div>
        </>

    )
}

export default Navbar