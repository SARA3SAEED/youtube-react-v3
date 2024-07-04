import React from 'react';
import ListRecommend from '../components/ListRecommend';
import axios from 'axios';

export default function Recommend({ categoryId }) {
  const [videos, setVideos] = React.useState([]);

  React.useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&key=AIzaSyCkmleMPcUGZQpOC8DcDWmexkwGWyzJsvI`);
        const filteredVideos = response.data.items.filter(video => video.snippet.categoryId === categoryId);
        setVideos(filteredVideos);
        console.log('Fetched videos of categoryId:',filteredVideos);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    if (categoryId) {
      fetchVideos();
    }
  }, [categoryId]);

  return (
    <div className=" lg:w-[60%] p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8  dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Videos</h5>
        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">View all</a>
      </div>
      <div className="flex flow-root ">
        {/* <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700"> */}
          {videos.map((video) => (
            <ListRecommend key={video.id} video={video} />
          ))}
        {/* </ul> */}
      </div>
    </div>
  );
}
