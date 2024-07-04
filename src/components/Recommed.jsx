import React from 'react';
import ListRecommend from '../components/ListRecommend';
import axios from 'axios';

export default function Recommed() {

  const [videos, setVideos] = React.useState([]);

  React.useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&key=AIzaSyCkmleMPcUGZQpOC8DcDWmexkwGWyzJsvI');
        setVideos(response.data.items);
        console.log('Fetched videos:', response.data.items);
        console.log('Fetched videos:', response.data);

      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="w-[60%] p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        
        
        <div className="flex items-center justify-between mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Latest Videos
            </h5>
            <a
            href="#"
            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
            View all
            </a>
        </div>





        <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
        {videos.map((video) => (
          <ListRecommend key={video.id} video={video} />
        ))}
        </ul>
        </div>


</div>

  )
}
