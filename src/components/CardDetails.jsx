import React from 'react';
import { Link, useParams } from 'react-router-dom';
import NavDetails from '../components/NavDetails';
import Comments from '../components/Comments';
import Recommed from '../components/Recommed';
import Des from '../components/Des';
import axios from 'axios';





export default function CardDetails() {
  const {id} = useParams();

  const [video, setVideo] = React.useState([]);
  const [videoTitle, setVideoTitle] = React.useState('');
  const [videoThumbnail, setVideoThumbnail] = React.useState('');
  const [channelTitle, setChannelTitle] = React.useState('');
  const [likeCount, setLikeCount] = React.useState('');
  const [descraption, setDescraption] = React.useState('');
  const [viewCount, setViewCount] = React.useState('');






  React.useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&key=AIzaSyCkmleMPcUGZQpOC8DcDWmexkwGWyzJsvI`);
        const videos = response.data.items;
        const selectedVideo = videos.find(video => video.id === id);
        if (selectedVideo) {
          setVideo(selectedVideo);
          setVideoTitle(selectedVideo.snippet.title);
          setVideoThumbnail(selectedVideo.snippet.thumbnails.high.url);
          setChannelTitle(selectedVideo.snippet.channelTitle);
          setLikeCount(selectedVideo.statistics.likeCount);
          setDescraption(selectedVideo.snippet.description);
          setViewCount(selectedVideo.statistics.viewCount);


        }
        console.log('Fetched videos:', videos);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);
  return (
    <>
    <div className="flex p-2 text-gray-900 ">
    <aside className="flex  h-screen w-30 flex-col items-center  bg-white">
      <nav className="flex flex-1 flex-col gap-y-4 pt-10">

        <Link to="/" className="group relative rounded-xl  p-2 text-black-600 hover:bg-gray-50">
        <img className='w-7 ml-3' src="https://cdn-icons-png.flaticon.com/128/9440/9440315.png" />
        <small className='ml-3 font-thin'>Home</small>
        </Link>

        <a href="#" className="group relative rounded-xl  p-2 text-black-600 hover:bg-gray-50">
          <img className='w-7 ml-3' src="https://img.icons8.com/?size=48&id=ajczeHCWXbyR&format=png" />
          <small className='ml-3 font-thin'>Shorts</small>
        </a>


        <Link to="/details" className="group relative rounded-xl  p-2 text-black-600 hover:bg-gray-50">
          <img className='w-7 ml-3 ' src="https://cdn-icons-png.flaticon.com/128/15070/15070063.png" />
          <small className='text-xs font-thin'>Subscriptions</small>
        </Link>


        <a href="#" className="group relative rounded-xl  p-2 text-black-600 hover:bg-gray-50">
          <img className='w-8 ml-3' src="https://cdn-icons-png.flaticon.com/128/15070/15070167.png" />
          <small className='ml-4 font-thin'>You</small>
        </a>

      </nav>
    </aside>
    <div className='w-[100%]'>
            <iframe 
            className="lg:h-64 rounded-lg sm:h-96 shadow-xl" 
            style={{ width: "99%" , height: "450px"}}
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
            
            <h2 className='h-12 mx-1 mt-6 lg:text-lg lg:font-bold'>{video.snippet?.title} </h2>
            <NavDetails videoId={id} thumbnail={videoThumbnail} channelTitle={channelTitle} likeCount={likeCount}/>
            <Des desc={descraption} viewCount={viewCount}/>
            <Comments id={id}/>
            </div>

            <Recommed />


      </div>
    </>
  )
}
