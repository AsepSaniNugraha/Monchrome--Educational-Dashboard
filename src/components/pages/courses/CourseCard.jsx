import React from 'react';

const CourseCard = ({ course }) => {
    const Icon = course.icon;
    return (
        <div className='flex gap-3 p-3 min-w-full rounded-2xl text-base text-center items-center bg-slate-700 text-slate-200 shadow-xl'>
            <div className='group flex gap-3 h-full'>
                <div className='relative bg-slate-300 p-3 text-slate-700 rounded-xl shadow-md shadow-slate-900 group-hover:shadow-lg overflow-hidden'>
                    <div className='absolute -top-2/5 left-1/2 -translate-x-1/2 w-35 h-35 bg-slate-700 rounded-full z-10'></div>
                    <Icon className='relative z-10 text-5xl mx-auto mb-6 text-slate-200' />
                    <p className='text-xl font-semibold'>{course.name}</p>
                    <p className='text-sm'>{course.time}</p>
                </div>
                <div className='flex flex-col h-full justify-between'>
                    <div className='flex gap-2 text-left text-sm'>
                        <div className=''>
                            <p>Attendant</p>
                            <p>Avalaiable</p>
                        </div>
                        <div className=''>
                            <p>: {course.attendant}</p>
                            <p>: {course.available} seats</p>
                        </div>
                    </div>
                    <div className='bg-slate-300 p-4 text-slate-700 rounded-xl font-bold shadow-md shadow-slate-900 group-hover:shadow-lg'>
                        <p>{course.price} /month</p>
                    </div>
                    <button className='mx-auto px-2 py-1 w-25 text-slate-200 border rounded-lg transition-all duration-300 ease border-slate-400 hover:bg-slate-300 hover:text-slate-700'>
                        More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CourseCard