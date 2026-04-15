import React from 'react';
import { FaArrowRight } from "react-icons/fa";


const Quiz = () => {
    return (
        <div className='px-5 flex flex-col h-full'>
            <div className='flex items-center justify-end'>
                <p className='text-2xl font-bold text-slate-700'>Quiz</p>
            </div>
            <div className='bg-slate-700 text-slate-200 h-full w-1/3 rounded-xl mx-auto p-8'>
                <p className='text-2xl text-center'>Please select a subject</p>
                <div className='flex flex-col items-center justify-between h-full py-10'>
                    <button
                        type="button"
                        className="group flex gap-4 w-full">
                        <div className="border border-slate-200 w-25 h-20 rounded-lg flex items-center justify-center">
                            <p className='font-bold text-3xl'>H</p>
                        </div>
                        <div className='flex items-center text-left w-full justify-between bg-slate-200 text-slate-700 px-4 rounded-lg '>
                            <div className='flex flex-col gap-1 text-xl'>
                                <p className="font-bold">
                                    History
                                </p>
                                <p className="text-sm">
                                    5 questions
                                </p>
                            </div>
                            <FaArrowRight className="text-slate-200 transition all duration-300 ease group-hover:text-slate-700" />
                        </div>
                    </button>
                    <button
                        type="button"
                        className="group flex gap-4 w-full">
                        <div className="border border-slate-200 w-25 h-20 rounded-lg flex items-center justify-center">
                            <p className='font-bold text-3xl'>M</p>
                        </div>
                        <div className='flex items-center text-left w-full justify-between bg-slate-200 text-slate-700 px-4 rounded-lg '>
                            <div className='flex flex-col gap-1 text-xl'>
                                <p className="font-bold">
                                    Math
                                </p>
                                <p className="text-sm">
                                    7 questions
                                </p>
                            </div>
                            <FaArrowRight className="text-slate-200 transition all duration-300 ease group-hover:text-slate-700" />
                        </div>
                    </button>
                    <button
                        type="button"
                        className="group flex gap-4 w-full">
                        <div className="border border-slate-200 w-25 h-20 rounded-lg flex items-center justify-center">
                            <p className='font-bold text-3xl'>S</p>
                        </div>
                        <div className='flex items-center text-left w-full justify-between bg-slate-200 text-slate-700 px-4 rounded-lg '>
                            <div className='flex flex-col gap-1 text-xl'>
                                <p className="font-bold">
                                    Science
                                </p>
                                <p className="text-sm">
                                    6 questions
                                </p>
                            </div>
                            <FaArrowRight className="text-slate-200 transition all duration-300 ease group-hover:text-slate-700" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Quiz