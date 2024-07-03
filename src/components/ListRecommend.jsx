import React from 'react'

export default function ListRecommend() {
  return (
    <li className="py-2 sm:py-4">
    <div className="flex items-center">
      <div className="m-0">
        <iframe
          className=" rounded-lg"
          style={{ width: "80%" , height: "97px"}}

          src="https://www.youtube.com/embed/tgbNymZ7vqY"
          title="Neil's video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="m-0">
        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
          Neil Sims
        </p>
        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
          email@windster.com
        </p>
      </div>
     
    </div>
  </li>
  )
}
