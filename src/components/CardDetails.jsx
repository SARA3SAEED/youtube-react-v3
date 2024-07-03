import React from 'react';
import { Link } from 'react-router-dom';
import NavDetails from '../components/NavDetails';
import Comments from '../components/Comments';
import Recommed from '../components/Recommed';




export default function CardDetails() {
  return (
    <>
    <div className="flex p-2 text-gray-900 ">
    <aside className="flex  h-screen w-30 flex-col items-center  bg-white">
      <nav className="flex flex-1 flex-col gap-y-4 pt-10">

        <Link to="/" className="group relative rounded-xl  p-2 text-black-600 hover:bg-gray-50">
        <img className='w-7 ml-3' src="https://cdn-icons-png.flaticon.com/128/9440/9440315.png" />
        <small className='ml-3 font-thin'>Home</small>
        </Link>

        <a href="#" className="group relative rounded-xl  p-2 text-black-600 hover:bg-gray-50">
          <img className='w-7 ml-3' src="https://img.icons8.com/?size=48&id=ajczeHCWXbyR&format=png" />
          <small className='ml-3 font-thin'>Shorts</small>
        </a>


        <Link to="/details" className="group relative rounded-xl  p-2 text-black-600 hover:bg-gray-50">
          <img className='w-7 ml-3 ' src="https://cdn-icons-png.flaticon.com/128/15070/15070063.png" />
          <small className='text-xs font-thin'>Subscriptions</small>
        </Link>


        <a href="#" className="group relative rounded-xl  p-2 text-black-600 hover:bg-gray-50">
          <img className='w-8 ml-3' src="https://cdn-icons-png.flaticon.com/128/15070/15070167.png" />
          <small className='ml-4 font-thin'>You</small>
        </a>

      </nav>
    </aside>
            <div className='w-[100%]'>
            <iframe 
            className="lg:h-64 rounded-lg sm:h-96 shadow-xl" 
            style={{ width: "99%" , height: "450px"}}
            src="https://www.youtube.com/embed/KaLxCiilHns" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
            <h2 className='h-12 mx-1 mt-6 lg:text-lg lg:font-bold'>شيخ الحارة | لقاء بسمة وهبة مع النجمة نجلاء بدر </h2>
            <NavDetails/>
            <Comments/>
            </div>

            <Recommed/>


      </div>
    </>
  )
}
