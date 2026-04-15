import React from 'react';
import GalleryCard from './GalleryCard';


const Gallery = () => {
    return (
        <div className='px-5 flex flex-col h-full max-w-full'>
            <div className='flex items-center justify-end'>
                <p className='text-2xl text-slate-700 font-bold'>Course Gallery</p>
            </div>
            <div className='p-10 pt-2 min-h-full min-w-full my-auto grid grid-cols-[repeat(4,230px)] gap-2 justify-center'>
                <div className='flex row-span-2'>
                    <GalleryCard />
                </div>
                <div className='flex row-span-3'>
                    <GalleryCard />
                </div>
                <div className='flex row-span-2 col-span-2'>
                    <GalleryCard />
                </div>
                <div className='flex '>
                    <GalleryCard />
                </div>
                <div className='flex row-span-2 '>
                    <GalleryCard />
                </div>
                <div className='flex row-span-2'>
                    <GalleryCard />
                </div>
                <div className='flex '>
                    <GalleryCard />
                </div>
                <div className='flex '>
                    <GalleryCard />
                </div>
                {/* <div className='flex '>
                    <GalleryCard label="9" />
                </div> */}
            </div>
        </div>
    )
}

export default Gallery