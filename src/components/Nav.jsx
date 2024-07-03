import React from 'react';
import Sidebar1 from '../components/Sidebar1';



export default function Nav() {
  return (
    <>
    <div className='flex '>
    <Sidebar1/>
    <div className="navbar bg-base-100">
        <div className="flex mr-2 lg:mr-24">
            <a className=" text-xl">
                <img  className="w-20 lg:w-28 lg:h-18" 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHMUb8U4VeW2y-RflH7U7Yp0tsx1hJv0PwQ&s" 
                alt="" />
            </a>
        </div>

        <div className="flex lg:w-[75%] ">
            <input type="text" placeholder="Search" 
            className="input input-bordered rounded-3xl w-[100%] h-[30px] lg:w-[75%] lg:h-12 mr-1" />
            <img className='w-6 p-1 lg:w-12 bg-gray-300 rounded-3xl lg:p-2' 
            src="https://img.icons8.com/?size=48&id=85836&format=png" alt="" />
            <img className='w-14 lg:w-16  rounded-3xl  lg:mt-1 lg:p-5 lg:xl-5 p-5 ' 
            src='https://img.icons8.com/?size=100&id=624&format=png'/>
            <img className='w-9 lg:w-12  rounded-3xl lg:mr-7 lg:mt-1 lg:p-3 p-3' 
            src='https://cdn-icons-png.flaticon.com/128/3602/3602145.png'/>
        </div>


          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                  
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
