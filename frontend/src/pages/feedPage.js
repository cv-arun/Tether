
import React from 'react';
import Sidebar from '../layout/sidebar';
import Feed from '../components/feed';


function feed() {
  return (
    <>
   <Sidebar component={<Feed/>}/>
    </>
  )
}

export default feed