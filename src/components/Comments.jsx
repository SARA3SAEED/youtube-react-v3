import React from 'react';
import Comment from '../components/Comment';

export default function Comments() {
  return (
    <div className="w-[97%] bg-white rounded-lg border p-2 m-1 mt-10">
        <h3 className="font-bold">Discussion</h3>
        <form>
        
            <div className="w-full px-3 my-2">
            <textarea
                className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                name="body"
                placeholder="Type Your Comment"
                required=""
                defaultValue={""}
            />
            </div>
            <div className="w-full flex justify-end px-3">
            <input
                type="submit"
                className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500"
                defaultValue="Post Comment"
            />
            </div>






            <div className="flex flex-col">
            <Comment/>
            </div>


         
        </form>
        </div>

  )
}
