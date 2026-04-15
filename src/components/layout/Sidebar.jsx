import React, { useState, useRef, useEffect } from 'react';
import SidebarItem from './SidebarItem';
import { Link } from 'react-router-dom';
import { FaBookReader, FaQuestion } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";
import { BsPeopleFill } from "react-icons/bs";
import { TfiBlackboard } from "react-icons/tfi";
import { PiExamFill } from "react-icons/pi";

const Sidebar = () => {
    const menuItems = [
        {
            title: "Dashboard",
            icon: <MdDashboard />,
            path: "/"
        }, {
            title: "Students",
            icon: <BsPeopleFill />,
            key: "students",
            subItems: [
                { title: "Student Lists", path: "/students" },
                { title: "Student Detail", path: "/students/detail" }
            ]
        }, {
            title: "Courses",
            icon: <TfiBlackboard />,
            key: "courses",
            subItems: [
                { title: "Course List", path: "/courses" },
                { title: "Gallery", path: "/courses/gallery" }
            ]
        }, {
            title: "Assesment",
            icon: <PiExamFill />,
            key: "assessment",
            subItems: [
                { title: "Tasks", path: "/assessment" },
                { title: "Quiz", path: "/assessment/quiz" }
            ]
        }
    ];
    const [sidebar, setSidebar] = useState(false);
    const [menu, setMenu] = useState(null);
    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                sidebar &&
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target)
            ) {
                setSidebar(false);
                setMenu(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [sidebar]);

    const toggleSideBar = () => {
        setSidebar(prev => {
            if (prev) setMenu(null);
            return !prev;
        })
    }
    const toggleMenu = (menuTag) => {
        setSidebar(true);
        setMenu(prev => (prev === menuTag ? null : menuTag))
    }

    return (
        <aside
            ref={sidebarRef}
            className='w-16 h-full overflow-visible z-10' >
            <div className={`inset-0 h-full flex flex-col item-center p-2 rounded-2xl bg-slate-100 shadow-2xl shadow-gray-500 overflow-hidden transition-all duration-300 ease-in-out ${sidebar ? "min-w-64" : "min-w-0"}`}>
                <button
                    onClick={() => toggleSideBar()}
                    className="text-slate-700 text-xl px-3 py-2 mx-auto border border-transparent rounded-lg transition-all duration-300 ease hover:border-slate-700" >
                    <FaChevronRight className={`transition-transform duration-500 ease-in-out ${sidebar ? "rotate-180" : ""}`} />
                </button>
                <Link
                    to="/"
                    className='flex items-center justify-center mx-auto my-8 text-3xl text-slate-800'>
                    <FaBookReader />
                </Link>
                <ul className='flex flex-col gap-2'>
                    {menuItems.map((item, index) => (
                        <SidebarItem
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            path={item.path}
                            subItems={item.subItems}
                            isOpen={menu === item.key}
                            onClick={() => toggleMenu(item.key)} />
                    ))}
                </ul>
                <div className='mt-auto pb-3'>
                    <Link
                        to="/faq"
                        className='inline-flex items-center gap-9 px-3 py-2 w-full text-slate-800 border border-transparent rounded-lg transition-all duration-300 ease hover:border-slate-700'>
                        <span className='text-xl text-center'><FaQuestion /></span>
                        <span>Help</span>
                    </Link>
                </div>
            </div >
        </aside >
    );
};

export default Sidebar