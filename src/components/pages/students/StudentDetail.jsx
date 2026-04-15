import React, { useState } from 'react'

const StudentDetail = () => {
    const [tabActive, setTabActive] = useState("bio");
    const tabs = [
        { id: "bio", label: "Student Bio" },
        { id: "courses", label: "Courses" },
        { id: "attendance", label: "Attendance" },
        { id: "grade", label: "Grade Report" }
    ];

    return (
        <div className='px-5 flex flex-col h-full'>
            <div className='flex items-center justify-end'>
                <p className='text-2xl font-bold text-slate-700'>Student Detail</p>
            </div>
            <div class="text-slate-700 w-full mx-auto h-full ">
                <div className='flex flex-col h-full gap-4 '>
                    <div className='p-2 bg-slate-300 max-w-max rounded-xl'>
                        <div className='relative flex text-sm text-slate-800 max-w-max font-semibold'>
                            <div className='absolute inset-0 h-full w-1/4 bg-slate-200 rounded-lg transition-all duration-300 ease'
                                style={{
                                    width: `${100 / tabs.length}%`,
                                    transform: `translateX(${tabs.findIndex(t => t.id === tabActive) * 100}%)`
                                }}></div>
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setTabActive(tab.id)}
                                    className='py-2 w-30 z-5 hover:opacity-50'>
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className='relative p-4 bg-slate-200 rounded-xl h-full'>
                        <div className={`absolute w-full transition-all ease duration-300 ${tabActive === "bio" ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                            <p className='text-3xl font-bold text-center'>
                                Bio Page
                            </p>
                        </div>
                        <div className={`absolute w-full transition-all ease duration-300 ${tabActive === "courses" ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                            <p className='text-3xl font-bold text-center'>
                                Courses Page
                            </p>
                        </div>
                        <div className={`absolute w-full transition-all ease duration-300 ${tabActive === "attendance" ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                            <p className='text-3xl font-bold text-center'>
                                Attendance Page
                            </p>
                        </div>
                        <div className={`absolute w-full transition-all ease duration-300 ${tabActive === "grade" ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                            <p className='text-3xl font-bold text-center'>
                                Grade Report Page
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentDetail