import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCircleUser } from "react-icons/fa6";
import { BsFillGearFill } from "react-icons/bs";
import { TbBellRinging2Filled } from "react-icons/tb";

const Header = () => {
    const [dropMenu, setDropMenu] = useState(null);
    const dropMenuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropMenu !== null &&
                dropMenuRef.current &&
                !dropMenuRef.current.contains(event.target)
            ) {
                setDropMenu(null)
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [dropMenu])

    const openDropMenu = (tagDropMenu) => {
        setDropMenu(dropMenu === tagDropMenu ? null : tagDropMenu)
    }
    return (
        <div className='w-full'>
            <div ref={dropMenuRef} className='flex justify-end bg-slate-100 shadow-sm shadow-gray-500 p-2 px-6 gap-6 rounded-xl w-full text-slate-800 text-2xl'>
                <div className='relative'>
                    <button
                        onClick={() => openDropMenu("notif")}
                        className='px-2 py-2 text-slate-800 border border-transparent rounded-lg transition-all duration-300 ease hover:border-slate-700'>
                        <TbBellRinging2Filled />
                    </button>
                    <ul className={`absolute z-10 top-15 right-0 flex flex-col gap-3 min-w-max bg-slate-100 shadow-lg py-2 px-4 text-sm rounded-lg transition-all duration-300 ease ${dropMenu === "notif" ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                        <li>
                            <Link className='hover:underline'>Urgent Notifications</Link>
                        </li>
                        <li>
                            <Link className='hover:underline'>New Notifications</Link>
                        </li>
                        <li>
                            <Link className='hover:underline'>All Notifications</Link>
                        </li>
                    </ul>
                </div>
                <div className='relative'>
                    <button
                        onClick={() => openDropMenu("settings")}
                        className='px-2 py-2 text-slate-800 border border-transparent rounded-lg transition-all duration-300 ease hover:border-slate-700'>
                        <BsFillGearFill />
                    </button>
                    <ul className={`absolute z-10 top-15 right-0 flex flex-col gap-3 min-w-max bg-slate-100 shadow-lg py-2 px-4 text-sm rounded-lg transition-all duration-300 ease ${dropMenu === "settings" ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                        <li>
                            <Link className='hover:underline'>Password</Link>
                        </li>
                        <li>
                            <Link className='hover:underline'>Email</Link>
                        </li>
                        <li>
                            <Link className='hover:underline'>All Settings</Link>
                        </li>
                    </ul>
                </div>
                <div className='relative'>
                    <button
                        onClick={() => openDropMenu("profile")}
                        className='px-2 py-2 text-slate-800 border border-transparent rounded-lg transition-all duration-300 ease hover:border-slate-700'>
                        <FaCircleUser />
                    </button>
                    <ul className={`absolute z-10 top-15 right-0 flex flex-col gap-3 min-w-max bg-slate-100 shadow-lg py-2 px-4 text-sm rounded-lg transition-all duration-300 ease ${dropMenu === "profile" ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                        <li>
                            <Link className='hover:underline'>Change Avatar</Link>
                        </li>
                        <li>
                            <Link className='hover:underline'>Privacy Setting</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header