import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SidebarItem = ({
    icon,
    title,
    isOpen,
    onClick,
    subItems,
    path
}) => {
    if (!subItems) {
        return (
            <li>
                <Link
                    to={path}
                    className='inline-flex items-center gap-9 px-3 py-2 w-full text-slate-800 border border-transparent rounded-lg transition-all duration-300 ease hover:border-slate-700'>
                    <span className='text-2xl text-center'>{icon}</span>
                    <span>{title}</span>
                </Link>
            </li>
        )
    }
    return (
        <li>
            <button
                onClick={onClick}
                className='inline-flex items-center gap-9 px-3 py-2 w-full text-slate-800 border border-transparent rounded-lg transition-all duration-300 ease hover:border-slate-700'>
                <span className='text-2xl text-center'>{icon}</span>
                <span>{title}</span>
            </button>
            <ul className={`ps-13 overflow-hidden transition-all duration-500 ease ${isOpen ? "max-h-40" : "max-h-0"}`}>
                {subItems.map((item, index) => (
                    <li key={index}>
                        <Link
                            to={item.path}
                            className="group flex items-center ps-5 pe-2 py-2 text-slate-800">
                            <span>{item.title}</span>
                            <FaArrowRight className="ml-auto text-slate-100 transition-all duration-300 ease group-hover:text-slate-800" />
                        </Link>
                    </li>
                ))}
            </ul>
        </li>
    )
}

export default SidebarItem