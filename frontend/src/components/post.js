import React, { useState, useEffect } from 'react';
import PublicIcon from '@mui/icons-material/Public';
import PeopleIcon from '@mui/icons-material/People';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendSharpIcon from '@mui/icons-material/SendSharp';
import getPost from '../api.js/getAllPost';
import Moment from 'react-moment';
import { useSelector } from 'react-redux'



function Post() {
    const [post, setPost] = useState([]);
    const user = useSelector((state) => state.userReducer.user)
    useEffect(() => {
        getPost().then(data => {
            console.log(data)
            setPost(data)
        })
    }, [])
    const [openComment, setopenComment] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    return (
        <>
            {post.map((curr) => <div className='max-w-[690px] shadow my-1 bg-white rounded-lg flex flex-col'>
                <div className='flex mt-2 px-3'>

                    <img className=' max-h-12 my-auto rounded-full' src={curr.user.picture} alt='profile' />

                    <div className='m-3 '>
                        <h3 className='m-1 text-lg '>{curr.user.first_name}</h3>
                        <div className='flex'>{curr.privacy === 'public' ? <PublicIcon /> : <PeopleIcon />} <Moment className=' mx-2 w-[60px]' element="span" fromNow ago>{curr.createdAt}</Moment> ago </div>
                    </div>
                    <div className='self-center w-full flex flex-row-reverse'>
                    {showMenu && <div onMouseOut={()=>setShowMenu(false)} className='w-[150px] h-[150px] absolute z-40 shadow-2xl bg-slate-600 rounded'>hello</div>}

                        <span onClick={()=>setShowMenu(true)}><MoreHorizIcon /></span>
                    </div>





                </div>
                <div className='m-5 max-h-[500px] overflow-y-auto scrollbar-hide '>
                    <p>{curr.text}</p>
                </div>
                {curr.images[0] && <div className='m-5 mb-0 overflow-y-auto flex scrollbar-hide'>
                    {curr.images.map((img, i) => (<><img className='min-w-full max-h-[500px]' src={img.url} alt='post' /><p>{i}</p></>))}
                </div>}
                {curr.images.length > 1 ? <p className='z-50 mx-auto'>Swipe left</p> : ''}
                <div className=''>
                    <div className='my-3 mx-5 flex flex-row justify-between'>
                        <p>Ashish joshy,Remeese salam and 78 others</p>
                        <p>28 comments</p>
                    </div>
                    <hr />
                    <div className='p-3 flex justify-around'>
                        <Button><ThumbUpOutlinedIcon /> Like</Button>
                        <Button onClick={() => { setopenComment(!openComment); }}><CommentOutlinedIcon /> Comment</Button>
                        <Button><ShareOutlinedIcon />  Share</Button>
                    </div>

                    <hr />
                </div>
                {openComment &&
                    <div >

                        <div className='flex m-3'><div className='md:w-1/6 w-2/6'>
                            <img className='ml-5 max-h-12 rounded-full' src={user.picture} alt='profile' /></div>
                            <div className='rounded-full bg-gray-300 w-full mr-5 flex'>
                                <input placeholder='Write a comment...' className='md:w-11/12 w-10/12 p-4 bg-gray-300 focus-visible:outline-none' />
                                <button className='h-full md:w-1/12 w-2/12 active:bg-slate-400 rounded-full'><SendSharpIcon /></button>
                            </div>
                        </div>
                        <div className='flex m-3'>
                            <div className='md:w-1/6 w-2/6'>
                                <img className='ml-5 max-h-12' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkSQpuRwKcQD_-_2yf6EGsw56SsFVa4jdKaQ&usqp=CAU' alt='profile' />
                            </div>
                            <div className='  w-full mr-5 flex flex-col'>
                                <p className='w-full p-4 bg-gray-300 rounded-xl flex flex-col'>
                                    <span>Name</span>
                                    <span className='text-slate-600 max-h-[100px]'>dksamvdksm</span>
                                </p>
                                <span className='flex gap-5'>
                                    <span>replay</span>
                                    <span>like</span>
                                </span>

                            </div>
                        </div>



                    </div>}
            </div>)}
        </>
    )
}

export default Post