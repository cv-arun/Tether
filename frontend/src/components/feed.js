import React from 'react';
import StoriesThumbnails from './storiesThumbnails';
import CreatePost from './createPost';

function feed() {
  return (
    <>




      <div className="flex flex-col justify-center mx-auto max-w-[690px]">
        <StoriesThumbnails />
        <CreatePost />

      </div>

    </>
  )
}

export default feed