import React from 'react';
import CardVideo from '../components/CardVideo';
import { Link } from 'react-router-dom';



export default function Sidebar() {

  return (
  <>
 
  <div className="flex p-2 text-gray-900 ">
    <aside className="flex  h-screen w-30 flex-col items-center  bg-white">
      <nav className="flex flex-1 flex-col gap-y-4 pt-10">
        <Link to="/" className="group relative rounded-xl  p-2 text-black-600 hover:bg-gray-50">
        <img className='w-7 ml-3' src="https://cdn-icons-png.flaticon.com/128/9440/9440315.png" />
        <small className='ml-3 font-thin'>Home</small>
        </Link>

        <a
          href="#"
          className="group relative rounded-xl  p-2 text-black-600 hover:bg-gray-50"
        >
          <img className='w-7 ml-3' src="https://cdn-icons-png.flaticon.com/128/9440/9440315.png" />
          <small className='ml-3 font-thin'>Shorts</small>
        </a>


        <Link
          to="/details"
          className="group relative rounded-xl  p-2 text-black-600 hover:bg-gray-50"
        >
          <img className='w-7 ml-3 ' 
          src="https://cdn-icons-png.flaticon.com/128/15070/15070063.png" />
          <small className='text-xs font-thin'>Subscriptions</small>
        </Link>


        <a
          href="#"
          className="group relative rounded-xl  p-2 text-black-600 hover:bg-gray-50"
        >
          <img className='w-8 ml-3' 
          src="https://cdn-icons-png.flaticon.com/128/15070/15070167.png" />
          <small className='ml-4 font-thin'>You</small>
        </a>
      </nav>
    </aside>


      <div className='flex flex-wrap '>
      <CardVideo/>
      <CardVideo/>
      <CardVideo/>
      <CardVideo/>
      <CardVideo/>
      </div>
  </div>


    </>
  );
}