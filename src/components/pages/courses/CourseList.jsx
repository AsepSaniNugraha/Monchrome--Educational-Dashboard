import React from 'react';
import CourseCard from '../courses/CourseCard';
import { PiPersonSimpleSwimFill } from "react-icons/pi";
import { GiHorseshoe, GiRobotGrab, GiArcher } from "react-icons/gi";
import { RiEnglishInput } from "react-icons/ri";
import { TbAlphabetArabic } from "react-icons/tb";

const CourseList = () => {
    const courseData = [
        {
            id: 1,
            icon: GiArcher,
            name: "Archery",
            time: "Monday, Friday, 14:00",
            attendant: 12,
            available: 6,
            price: "40.000",
        }, {
            id: 2,
            icon: PiPersonSimpleSwimFill,
            name: "Swimming",
            time: "Tuesday, Thursday, 09:00",
            attendant: 20,
            available: 5,
            price: "30.000",
        }, {
            id: 3,
            icon: GiHorseshoe,
            name: "Horse Riding",
            time: "Monday, Saturday, 15:00",
            attendant: 10,
            available: 1,
            price: "50.000",
        }, {
            id: 4,
            icon: RiEnglishInput,
            name: "English",
            time: "Tuesday, Friday, 10:00",
            attendant: 5,
            available: 7,
            price: "20.000",
        }, {
            id: 5,
            icon: GiRobotGrab,
            name: "Robotic",
            time: "Wednesday, Friday, 16:00",
            attendant: 10,
            available: 2,
            price: "80.000",
        }, {
            id: 6,
            icon: TbAlphabetArabic,
            name: "Arabic",
            time: "Tuesday, Saturday, 16:00",
            attendant: 8,
            available: 6,
            price: "30.000",
        }
    ]
    return (
        <div className='px-5 flex flex-col h-full'>
            <div className='flex items-center justify-end'>
                <p className='text-2xl text-slate-700 font-bold'>Course Lists</p>
            </div>
            <div className='p-8 max-h-full my-auto grid grid-cols-[repeat(3,360px)] gap-5 justify-center z-0 overflow-hidden'>
                {courseData.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    )
}

export default CourseList