import React,{useState} from 'react';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import Modal from './modal';


function CreatePost() {
const [open,setOpen]=useState(false)

    return (

        <>
            <div className='max-w-[690px] h-32 shadow my-5' onClick={()=>setOpen(!open)}>
                <div className='flex mt-2'><div className='md:w-1/6 w-2/6'><img className='ml-5 max-h-12' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkSQpuRwKcQD_-_2yf6EGsw56SsFVa4jdKaQ&usqp=CAU' alt='profile' /></div>
                    <input placeholder='Whats on your Mind?' className='rounded-full bg-gray-300 md:w-5/6 w-4/6 mr-5 p-4' />
                </div>
                <hr className='m-3' />
                <div className='flex justify-around'>
                    <p><AddPhotoAlternateIcon />Photo/video</p>
                    <p><AddReactionIcon />Feeling/activity</p>
                </div>
            </div>
            <Modal open={open}/>
        </>
    )
}

export default CreatePost