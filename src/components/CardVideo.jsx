import React from 'react';
import { Link } from 'react-router-dom';

export default function CardVideo({ video }) {


  return (
            // <div className="flex flex-wrap">
            <div  key={video.id}  
            class="w-96 lg:w-[30%] h-[320px]  bg-white rounded-lg  dark:bg-gray-800 dark:border-gray-700 p-2  mb-2 mr-2">

                    <div class="flex flex-col h-[250px] w-full  ">
                    <div className='w-full  ml-5 rounded'> 
                        
                    <iframe className="w-full h-[200px] rounded-3xl" 
                    src={`https://www.youtube.com/embed/${video.id}`} 
                    title={video.snippet?.title} frameBorder="0" allowFullScreen></iframe>
                    </div> 
                    
                    <div className='flex  my-3 mx-3 w-full'>
                    <div className="avatar ">
                    <div className="w-10 h-9 mx-2 rounded-full">
                    
                    <img  src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                    <div>
                    </div>
                    </div> 
                    <div className=' w-full'>
                    <Link to={`/details/${video.id}`}> 
                    <h5 className="mb-1 text-sm font-small text-gray-900 dark:text-white">{video.snippet?.title}</h5></Link>   
                    <span className="text-sm text-gray-500 dark:text-gray-400">{video.snippet?.channelTitle}</span>
                    </div>
                    
                    </div>                  
            </div>
        </div>
    </div>
  );
}
