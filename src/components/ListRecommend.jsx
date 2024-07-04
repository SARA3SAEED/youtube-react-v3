import React from 'react'

export default function ListRecommend({video}) {

  

  return (
    // <li className="py-2 sm:py-4">
    <div key={video.id} className="flex py-2">
        <iframe
          className=" rounded-lg"
          style={{ width: "50%" , height: "80px"}}

          src={`https://www.youtube.com/embed/${video.id}`} 
          title="Neil's video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      <div className="w-8 lg:w-48 m-1 my-4">
        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
        {video.snippet?.title}
        </p>
        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
          email@windster.com
        </p>
      </div>
     
    </div>
  // </li>
  )
}
