import React from 'react'

export default function Button(props) {
    return (
        <button className='items-center bg-indigo-600 text-white font-[Poppins] py-2 px-4 rounded md:ml-8 hover:bg-indigo-400 duration-500'>
            {props.children}
        </button>
    )
}
