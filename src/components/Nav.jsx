import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar1 from '../components/Sidebar1';
import axios from 'axios';


export default function Nav() {
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userId');
    setShowModal(false);
    navigate('/')
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&key=AIzaSyCkmleMPcUGZQpOC8DcDWmexkwGWyzJsvI');

      setSearchResults(response.data.items);
      console.log('Search results:', response.data.items.snippet.title);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div className='flex'>
        <Sidebar1 />
        <div className="navbar bg-base-100">
          <div className="flex mr-2 lg:mr-24">
            <a className=" text-xl">
              <img className="w-20 lg:w-28 lg:h-18"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHMUb8U4VeW2y-RflH7U7Yp0tsx1hJv0PwQ&s"
                alt="" />
            </a>
          </div>

          <div className="flex lg:w-[75%] ">
            <input type="text" 
            placeholder="Search"
            value={searchQuery}
            onChange={handleChange}
              className="input input-bordered rounded-3xl w-[100%] h-[30px] lg:w-[75%] lg:h-12 mr-1" />
                  {/* <button
              className="w-6 p-1 lg:w-12 bg-gray-300 rounded-3xl lg:p-2"
              onClick={handleSearch}
            >
              <img
                className="w-6"
                src="https://img.icons8.com/?size=48&id=85836&format=png"
                alt=""
              />
            </button> */}
            <img className='w-6 p-1 lg:w-12 bg-gray-300 rounded-3xl lg:p-2'
              src="https://img.icons8.com/?size=48&id=85836&format=png" alt="" />
            <img className='w-14 lg:w-16  rounded-3xl  lg:mt-1 lg:p-5 lg:xl-5 p-5 '
              src='https://img.icons8.com/?size=100&id=624&format=png' alt="" />
            <img className='w-9 lg:w-12  rounded-3xl lg:mr-7 lg:mt-1 lg:p-3 p-3'
              src='https://cdn-icons-png.flaticon.com/128/3602/3602145.png' alt="" />
          </div>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li><Link to="/settings">Settings</Link></li>
              <li>
                <button className='text-red-400 ' onClick={openModal}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-md">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-xl font-semibold">
                  Are you sure you want to log out?
                </h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={closeModal}
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              <div className="relative p-6 flex-auto">
                <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                  Are you sure you want to log out from your account?
                </p>
              </div>
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={handleLogout}
                >
                  Logout
                </button>
                <button
                  className="bg-gray-200 text-gray-700 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </div>

            
          </div>
        </div>
      )}
    </>
  )
}
