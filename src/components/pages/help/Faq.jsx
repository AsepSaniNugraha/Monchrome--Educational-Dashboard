import React, { useState } from 'react';

const Faq = () => {
    const faqData = [
        {
            key: "q1",
            question: "Question 1",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi aperiam fugiat, vero magni sunt sed odio. Quasi quae exercitationem placeat aliquam at eaque eveniet est culpa, impedit ut sit dolorem nostrum voluptatum! Harum quod autem facere deleniti totam magnam consectetur."
        },
        {
            key: "q2",
            question: "Question 2",
            answer: "vero magni sunt sed odio. Quasi quae exercitationem placeat aliquam at eaque eveniet est culpa, impedit ut sit dolorem nostrum voluptatum! Harum quod autem facere deleniti totam magnam consectetur."
        },
        {
            key: "q3",
            question: "Question 3",
            answer: "impedit ut sit dolorem nostrum voluptatum! vero magni sunt sed odio. Quasi quae exercitationem placeat aliquam at eaque eveniet est culpa, impedit ut sit dolorem nostrum voluptatum! Harum quod autem facere deleniti totam magnam consectetur."
        },
        {
            key: "q4",
            question: "Question 4",
            answer: "Quasi quae exercitationem placeat aliquam at eaque eveniet est culpa, impedit ut sit dolorem nostrum voluptatum! Harum quod autem facere deleniti totam magnam consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit..."
        }
    ];
    const [accordionOpen, setAccordionOpen] = useState(null);

    const handleAccordionOpen = (accordionTag) => {
        setAccordionOpen(accordionOpen === accordionTag ? null : accordionTag);
    }
    return (
        <div className='px-5 flex flex-col h-full'>
            <div className='flex items-center justify-end'>
                <p></p>
                <p className='text-2xl font-bold text-slate-700'>FAQs & Contact</p>
            </div>
            <div className='h-full w-full py-4 grid grid-cols-2'>
                <div className='h-full w-full pe-5 border-r-4 border-r-slate-300'>
                    <ul className='flex flex-col gap-3 text-slate-800'>
                        {faqData.map((item) => (
                            <li
                                key={item.key}
                                className={`overflow-hidden rounded-xl border border-slate-300 transition-all duration-300 ease ${accordionOpen === item.key ? "max-h-50 shadow-md" : "max-h-12"}`}>
                                <button
                                    onClick={() => handleAccordionOpen(item.key)}
                                    className='py-2 h-12 w-full font-semibold transition-all duration-300 ease bg-slate-300 hover:text-slate-800/50 text-lg'>
                                    {item.question}
                                </button>
                                <p className={`p-2 transition-all duration-500 ease ${accordionOpen === item.key ? "opacity-100" : "opacity-0"}`}>
                                    {item.answer}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='h-full w-full ps-5'>
                    <p className='text-xl font-semibold'>Any further questions?</p>
                    <form className='pt-10 pb-8 flex flex-col gap-5 h-full w-4/5'>
                        <div className='flex gap-5 items-center'>
                            <label htmlFor="fullname">Full Name</label>
                            <input type="text" id="fullname" className='border border-slate-400 rounded-lg p-1 px-2 w-80 ml-auto focus:outline-none' />
                        </div>
                        <div className='flex gap-5 items-center'>
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" className='border border-slate-400 rounded-lg p-1 px-2 w-80 ml-auto focus:outline-none' />
                        </div>
                        <div className='flex gap-5 items-start'>
                            <label htmlFor="message">Messages</label>
                            <textarea type="" id="message" rows="6" className='border border-slate-400 rounded-lg p-1 px-2 w-80 ml-auto focus:outline-none resize-none' />
                        </div>
                        <button
                            className='px-3 py-2 w-40 text-slate-700 border rounded-lg transition-all duration-300 ease border-slate-400 hover:bg-slate-400 hover:text-slate-200 ml-auto mt-auto'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Faq