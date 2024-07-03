import React from 'react';

export default function Video() {
    return (
    <>
        <div className='w-[100%]  ml-5 rounded'>       
        <video class="w-full h-[230px] rounded-3xl" controls>
        <source src="/docs/videos/flowbite.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
        </video>
        </div> 
    </>
    )
}
