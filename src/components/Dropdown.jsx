import React from 'react';

export default function Dropdown({ onDelete }) {
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex ml-96 justify-center w-12 rounded-md border border-gray-300 shadow-sm px-4 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <img className='w-4 h-4 ' src="https://img.icons8.com/?size=100&id=36944&format=png" alt="" />
        </button>
      </div>

      <div
        className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
        <div className="py-1" role="none">
          <button
            onClick={onDelete}
            className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
            role="menuitem"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
