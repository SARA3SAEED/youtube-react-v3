import React from 'react'

export default function ListRecommend({video}) {

  

  return (
    <li className="py-2 sm:py-4">
    <div key={video.id} className="flex ">
      <div className="">
        <iframe
          className=" rounded-lg"
          style={{ width: "50%" , height: "80px"}}

          src={`https://www.youtube.com/embed/${video.id}`} 
          title="Neil's video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-9">
        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
        {video.snippet?.title}
        </p>
        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
          email@windster.com
        </p>
      </div>
     
    </div>
  </li>
  )
}
