import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar1() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>  
        <button
          className="w-20 text-white bg-white bg-transparent hover:bg-base-200 focus:ring-4  font-medium rounded text-sm px-5 py-2.5 "
          type="button"
          onClick={toggleSidebar}
        >
          <img className='w-6 h-6 ' src="https://img.icons8.com/?size=100&id=3096&format=png" alt="" />
        </button>
  

      <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 ${
          isOpen ? 'transform-none' : '-translate-x-full'
        }`}
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        

      
      
      <button
          type="button"
          onClick={toggleSidebar}
          aria-controls="drawer-navigation"
          className="text-gray-400 bg-transparent hover:bg-base-200 hover:text-gray-900 rounded-lg text-sm p-2.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
            
        <img  className='w-6 h-6 mr-20 ' src="https://img.icons8.com/?size=100&id=3096&format=png" alt="" />
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHMUb8U4VeW2y-RflH7U7Yp0tsx1hJv0PwQ&s' 
        id="drawer-navigation-label" 
        className="w-24 h-18 text-base font-semibold text-gray-500 uppercase dark:text-gray-400"></img>
        </button>











        <div className="py-4 mt-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">




            <label className="px-3  text-xs text-gray-500 uppercase dark:text-gray-400">
            analytics
            </label>
            <li>
            <Link
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            to="/home"
            >
            <img className='w-6 h-6 mr-3' src="https://cdn-icons-png.flaticon.com/128/9440/9440315.png" alt="" />
                <span className="mx-2 text-sm font-medium">Home</span>
            </Link>
            </li>

            <li>
            <a
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="#"
            >
                <img className='w-6 h-6 mr-3' src='https://img.icons8.com/?size=48&id=ajczeHCWXbyR&format=png'/>
                <span className="mx-2 text-sm font-medium">Shorts</span>
            </a>
            </li>


            <li>
            <Link
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            to="/details"
          >
            <img className='w-6 h-6 mr-3' 
            src="https://cdn.icon-icons.com/icons2/2248/PNG/512/youtube_subscription_icon_136007.png" alt="" />
            <span className="mx-2 text-sm font-medium">Subscriptions</span>
          </Link>
            </li>

            <div className="space-y-3 ">
          <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
            You
          </label>

            <li>
            <a
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="#"
            >
            <img className='w-6 h-6 mr-3' src="https://cdn-icons-png.flaticon.com/128/16821/16821509.png" alt="" />
            <span className="mx-2 text-sm font-medium">
            Your channel</span>
            </a>
            </li>

            <li> <a
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="#"
            >
                <img className='w-5 h-5 mr-3' src="https://cdn-icons-png.flaticon.com/128/2961/2961948.png" alt="" />
                <span className="mx-2 text-sm font-medium">History</span>
            </a>
            </li>


            <li>
            <a
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="#"
            >
            <img className='w-5 h-5 mr-3'  src="https://cdn-icons-png.flaticon.com/128/565/565266.png" alt="" />
            <span className="mx-2 text-sm font-medium">Checklists</span>
            </a>
            </li>



            <li>
            <a
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="#"
            >
            <img className='w-6 h-7 mr-3' src="https://cdn-icons-png.flaticon.com/128/14068/14068622.png" alt="" />
            <span className="mx-2 text-sm font-medium">Your Vedio</span>
            </a>
            </li>



            <li>
            <a
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="#"
            >
            <img className='w-6 h-6 mr-3' src="https://cdn-icons-png.flaticon.com/128/15476/15476736.png" alt="" />
            <span className="mx-2 text-sm font-medium"> Watch later</span>
            </a>
            </li>


            <li>
            <a
            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="#"
            >
            <img className='w-6 h-6 mr-3' src="https://cdn-icons-png.flaticon.com/128/9513/9513802.png" alt="" />
            <span className="mx-2 text-sm font-medium"> Liked videos</span>
            </a>
            </li>

            <div className="space-y-3 ">
            <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
            Customization
            </label>

            <li>
            <a
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#"
            >
                <img className='w-5 h-5 mr-3' src="https://cdn-icons-png.flaticon.com/128/3524/3524636.png" alt="" />
                <span className="mx-2 text-sm font-medium">Setting</span>
            </a>
        
            </li>
            </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
