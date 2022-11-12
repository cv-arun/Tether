
import React, { useEffect, useState } from 'react';
import Post from './post';
import Modal2 from './modal2';
import { openReducer } from '../redux/modal2';
import { useDispatch } from 'react-redux';
import Follow from './follow';
import ProfilePic from './updateProfilePic';
import getPost from '../api.js/getAllPost';
import { useSelector } from 'react-redux'

function Profile() {
    const dispatch = useDispatch()
    const refresh = useSelector(state => state.refresh.refresh)
    const [post, setPost] = useState([]);
    const [mobile, setMobile] = useState()
    useEffect(() => {
        getPost(true).then(data => {
            console.log(data)
            setPost(data)
        })
        window.screen.availWidth < 450 ? setMobile(true) : setMobile(false)

    }, [refresh])
    return (
        <>
            <div className='border-x-2 bg-white  max-w-[690px] h-[100%] mx-auto shadow-md flex flex-col rounded-md p-3'>
                <div>
                    <div className='flex mt-5'>
                        <div onClick={() => dispatch(openReducer({ open: true, component: <ProfilePic /> }))} className='w-1/4 '>
                            <img className='rounded-full md:h-36 md:w-36 h-20 w-20 ml-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY1oe3q_rwNsSemyJCQVuiVXWRq55ovkQABw&usqp=CAU' alt='profle pic' />
                        </div>
                        <div className='w-3/4 pl-5'>
                            <div className='flex '>
                                <h1 className='text-[28px] place-self-center'>Arun </h1>
                                <button className=' m-2  p-1 ring-1'>Edit Profile</button>
                            </div>
                            <div>
                                <button onClick={() => dispatch(openReducer({ open: true, component: <Follow Following={true} /> }))} className='m-2 ml-0 p-1 bg-slate-100 rounded-md'>Following</button>
                                <button onClick={() => dispatch(openReducer({ open: true, component: <Follow Followers={true} /> }))} className='m-2 p-1 bg-slate-100 rounded-md'>Followers</button>

                            </div>
                            {!mobile && <div >
                                <p>eat code sleep</p>
                                <p>eat code sleep</p>
                                <p>eat code sleep</p>
                                <p>eat code sleep</p>
                            </div>}
                        </div>
                    </div>
                    {mobile && <div className='m-3'>
                        <p>eat code  mobile</p>
                        <p>eat code sleep</p>
                        <p>eat code sleep</p>
                        <p>eat code sleep</p>
                    </div>}
                </div>

                <Modal2 />

            </div>
            <div className='border-x-2  max-w-[690px]  mx-auto shadow-md flex flex-col rounded-md'>
                {post.map((post) => <Post key={post._id} curr={post} />)}
            </div>
        </>
    )
}

export default Profile