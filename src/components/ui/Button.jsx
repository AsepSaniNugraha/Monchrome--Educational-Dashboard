import React from 'react'

const Button = ({ label, onClick }) => {
    return (
        <>
            <button
                onClick={onClick}
                className='px-3 py-2 w-40 justify-center text-slate-700 border rounded-lg transition-all duration-300 ease border-slate-400 hover:bg-slate-400 hover:text-slate-200'>
                {label}
            </button>
        </>
    )
}

export default Button