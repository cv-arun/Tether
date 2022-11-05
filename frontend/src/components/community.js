import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import getPeople from '../api.js/getPeople';
import requestFollow from '../api.js/requestFollow';
import getFollow from '../api.js/getFollow';
import requestUnFollow from '../api.js/requestUnFollow';





function Community() {
    const [tabs, setTabs] = useState(1);
    const [people, setPeople] = useState([])
    const [followers, setfollowers] = useState([])
    const [following, setfollowing] = useState([])
    useEffect(() => {
        tabs === 3 && getPeople().then(data => {
            console.log(data, "pople you may know")
            setPeople(data)
        });

        tabs !== 3 && getFollow().then(data => {
            console.log(data)
            setfollowers(data.followers)
            setfollowing(data.following)
        });




    }, [tabs])
    const handleClick = (e) => {

        e.target.innerText = e.target.id !== '' ? 'FOLLOWING' : e.target.innerText;
        e.target.style.opacity = e.target.id !== '' ? '50%' : '';
        e.target.id !== '' ? e.target.style.opacity === '50%' ?
        requestUnFollow(e.target.id).then(data => {
                console.log(data, 'follow request')
            }) : requestFollow(e.target.id).then(data => {
                console.log(data, 'follow request')
            }) : e.target.style.opacity = '';
    }
    const handleClick2 = (e) => {
       
        e.target.id !=='' && requestUnFollow(e.target.id).then(data => {
            console.log(data)
        })

    }
    return (
        <>
            <div className="flex flex-col justify-center mx-auto md:max-w-[690px] w-full  rounded-lg gap-2">
                <div className='flex h-16 bg-white'>
                    <button onClick={() => setTabs(1)} className='w-1/3 text-center md:text-2xl  text-sm py-4 focus:border-2 focus:border-b-blue-500'>
                        Followers
                    </button>
                    <button onClick={() => setTabs(2)} className='w-1/3 text-center md:text-2xl  text-sm py-4 focus:border-2 focus:border-b-blue-500'>
                        Following
                    </button>
                    <button onClick={() => setTabs(3)} className='w-1/3 text-center md:text-xl text-xs py-4 focus:border-2 focus:border-b-blue-500'>
                        People you may know
                    </button>
                </div>
                <hr />
                {tabs === 1 && <div className='flex flex-wrap gap-2 '>
                    {followers.map((curr, index) => {
                        return <div key={index} className='bg-white shadow-lg w-[150px] md:w-[180px] mx-auto flex flex-col gap-3 h-fit p-2'>
                            <img src='https://www.zimlive.com/dating/wp-content/themes/gwangi/assets/images/avatars/user-avatar.png' alt='profile' />
                            <p className='px-1'>Name</p>
                            <div className='px-1'><Button className='w-full' variant="contained">Following</Button></div>
                        </div>
                    })}


                </div>}
                {tabs === 2 && <div className='flex flex-wrap gap-2 ' onClick={handleClick2}>
                    {following.map((curr, index) => {
                        return <div key={index} className='bg-white shadow-lg w-[150px] md:w-[180px] mx-auto flex flex-col gap-3 h-fit p-2'>
                            <img src={curr.picture} alt='profile' />
                            <p className='px-1'>{`${curr.first_name} ${curr.last_name}`}</p>
                            <div className='px-1'><Button id={`${curr._id}`} className='w-full' variant="contained">Following</Button></div>
                        </div>
                    })}
                </div>}
                {tabs === 3 && <div className='flex flex-wrap gap-4' onClick={handleClick}>
                    {people.map((curr, index) => {
                        return <div key={index} className='bg-white shadow-lg w-[150px] md:w-[180px]  mx-auto flex flex-col gap-2 h-fit p-2'>
                            <img src={curr.picture} alt='profile' />
                            <p className='px-1'>{curr.first_name + ' ' + curr.last_name}</p>
                            <div className='px-1'><Button id={`${curr._id}`} className='w-full' variant="contained">Follow</Button></div>
                        </div>
                    })}
                </div>}

            </div>
            <div className='w-full h-28'></div>
        </>
    )
}

export default Community