import React from 'react';
import StoriesThumbnails from './storiesThumbnails';
import CreatePost from './createPost';
import Post from './post';

function feed() {
  return (
    <div className="flex flex-col justify-center mx-auto md:max-w-[690px] w-full z-10 ">
      <StoriesThumbnails />
      <CreatePost />
      <Post />
    </div>


  )
}

export default feed