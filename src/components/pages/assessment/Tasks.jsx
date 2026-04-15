import React, { useState } from 'react';
import TaskCard from './TaskCard';
import tasks from '../../../data/tasks.json';

const Tasks = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 6;
    const indexOfLast = currentPage * recordsPerPage;
    const indexOfFirst = indexOfLast - recordsPerPage;
    const currentTasks = tasks.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(tasks.length / recordsPerPage);

    return (
        <div className='px-5 flex flex-col h-full'>
            <div className='flex ps-8 items-center justify-between'>
                <button
                    className='inline-flex items-center gap-9 px-2 py-1 w-40 justify-center text-slate-700 border rounded-lg transition-all duration-300 ease border-slate-400 hover:bg-slate-400 hover:text-slate-200'>
                    Add New Task
                </button>
                <p className='text-2xl font-bold text-slate-700'>Tasks</p>
            </div>
            <div className='px-8 pt-4 max-h-full grid grid-cols-[repeat(3,360px)] gap-5 z-0 overflow-hidden'>
                {currentTasks.map(task => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
            <div className='mt-auto pe-8 py-0 flex gap-5 justify-end text-sm'>
                <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className='px-3 py-2 w-40 justify-center text-slate-700 border rounded-lg transition-all duration-300 ease border-slate-400 hover:bg-slate-400 hover:text-slate-200 disabled:opacity-50 disabled:pointer-events-none'>
                    Previous
                </button>

                <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className='px-3 py-2 w-40 text-slate-700 border rounded-lg transition-all duration-300 ease border-slate-400 hover:bg-slate-400 hover:text-slate-200 disabled:opacity-50 disabled:pointer-events-none'>
                    Next
                </button>
            </div>
        </div >
    )
}

export default Tasks