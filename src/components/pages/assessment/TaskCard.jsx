import React from 'react';
import Button from '../../ui/Button';

const TaskCard = ({ task }) => {
    return (
        <div className='flex gap-3 p-3 min-w-full rounded-2xl text-base bg-slate-700 text-slate-200 shadow-xl'>
            <div className='flex flex-col items-center bg-slate-200 text-slate-700 p-4 w-1/2 h-full rounded-xl'>
                <p className='text-5xl font-bold'>{task.sumPages}</p>
                <p className='text-sm'>pages</p>
                <p className='text-sm text-center mt-5'>{task.subSubject}</p>
            </div>
            <div className='flex flex-col justify-between'>
                <p className='text-2xl font-semibold'>{task.mainSubject}</p>
                <div className='flex gap-2 items-start text-left text-sm'>
                    <div>
                        <p>Due date</p>
                        <p>Points</p>
                    </div>
                    <div>
                        <p>: {task.dueDate}</p>
                        <p>: {task.points} pts</p>
                    </div>
                </div>
                <button
                    className='px-3 py-2 w-40 text-slate-200 border rounded-lg transition-all duration-300 ease border-slate-400 hover:bg-slate-400 hover:text-slate-200 disabled:opacity-50 disabled:pointer-events-none'>
                    Assign
                </button>
            </div>
        </div>
    )
}

export default TaskCard