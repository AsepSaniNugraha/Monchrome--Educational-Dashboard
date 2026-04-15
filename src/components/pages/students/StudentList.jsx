import React, { useState } from 'react';
import { FaCircleUser } from "react-icons/fa6";
import students from '../../../data/students.json'
import Button from '../../ui/Button';

const StudentList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 6;
    const indexOfLast = currentPage * recordsPerPage;
    const indexOfFirst = indexOfLast - recordsPerPage;
    const currentStudents = students.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(students.length / recordsPerPage);

    return (
        <div className='px-5 flex flex-col h-full'>
            <div className='flex items-center justify-between'>
                <div className='flex gap-5 items-center'>
                    <input type="text" className='border border-slate-400 rounded-lg p-1 px-2 w-70 focus:outline-none' id='search' />
                    <button
                        className='inline-flex items-center gap-9 px-2 py-1 w-25 justify-center text-slate-700 border rounded-lg transition-all duration-300 ease border-slate-400 hover:bg-slate-400 hover:text-slate-200'>
                        Search
                    </button>
                </div>
                <p className='text-2xl font-bold text-slate-700'>Student List</p>
            </div>
            <div class="text-slate-700 rounded-2xl w-full mt-5 overflow-hidden border border-slate-500/30 shadow-lg">
                <table class="text-sm bg-slate-300 text-slate-800 text-left w-full">
                    <thead className='table-auto'>
                        <tr className=''>
                            <th class="font-medium px-6 py-4 w-max">
                                {/* empty header*/}
                            </th>
                            <th class="font-medium px-6 py-4 w-max">
                                Name
                            </th>
                            <th class="font-medium px-6 py-4 w-max">
                                Student ID
                            </th>
                            <th class="font-medium px-6 py-4 w-max">
                                Gender
                            </th>
                            <th class="font-medium px-6 py-4 w-max">
                                Birthdate
                            </th>
                            <th class="font-medium px-6 py-4 w-max">
                                Address
                            </th>
                            <th class="font-medium px-6 py-4 w-max">
                                Contact Number
                            </th>
                        </tr>
                    </thead>
                    <tbody className='bg-slate-200'>
                        {currentStudents.map((student) => (
                            < tr key={student.id} class="hover:bg-slate-400" >
                                <td class=" text-3xl">
                                    <FaCircleUser className='mx-auto' />
                                </td>
                                <td class="px-6 py-4 w-max">
                                    {student.name}
                                </td>
                                <td class="px-6 py-4 w-max">
                                    {student.studentId}
                                </td>
                                <td class="px-6 py-4 w-max">
                                    {student.gender}
                                </td>
                                <td class="px-6 py-4 w-max">
                                    {student.dob}
                                </td>
                                <td class="px-6 py-4 w-max">
                                    {student.address}
                                </td>
                                <td class="px-6 py-4 w-max">
                                    {student.phone}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='mt-auto flex gap-5 justify-end text-sm'>
                <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className='px-3 py-2 w-40 justify-center text-slate-700 border rounded-lg transition-all duration-300 ease border-slate-400 hover:bg-slate-400 hover:text-slate-200 disabled:opacity-50 disabled:pointer-events-none'>
                    Previous
                </button>
                {/* <Button
                    label="Next"
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} /> */}
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

export default StudentList